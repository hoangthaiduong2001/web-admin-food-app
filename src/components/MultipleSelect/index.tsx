import { cn } from '@/config/utils';
import { Command as CommandPrimitive } from 'cmdk';
import {
  forwardRef,
  KeyboardEvent,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { IoClose } from 'react-icons/io5';
import { Badge } from '../Badge';
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '../Command';
import { GroupOption, MultipleSelectorProps, MultipleSelectorRef, Option } from './type';
import { removePickedOption, transToGroupOption, useDebounce } from './utils';

const MultipleSelector = forwardRef<MultipleSelectorRef, MultipleSelectorProps>(
  (
    {
      value,
      onChange,
      placeholder,
      defaultOptions: arrayDefaultOptions = [],
      options: arrayOptions,
      delay,
      onSearch,
      onSearchSync,
      loadingIndicator,
      emptyIndicator,
      maxSelected = Number.MAX_SAFE_INTEGER,
      onMaxSelected,
      disabled,
      groupBy,
      className,
      badgeClassName,
      triggerSearchOnFocus = false,
      commandProps,
      inputProps,
      label,
      hideClearAllButton = false,
    }: MultipleSelectorProps,
    ref: Ref<MultipleSelectorRef>
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);
    const [onScrollbar, setOnScrollbar] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState<Option[]>(value || []);
    const [options, setOptions] = useState<GroupOption>(transToGroupOption(arrayDefaultOptions, groupBy));
    const [inputValue, setInputValue] = useState('');
    const debouncedSearchTerm = useDebounce(inputValue, delay || 500);

    useImperativeHandle(
      ref,
      () => ({
        selectedValue: [...selected],
        input: inputRef.current as HTMLInputElement,
        focus: () => inputRef?.current?.focus(),
        reset: () => setSelected([]),
      }),
      [selected]
    );

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        inputRef.current.blur();
      }
    };

    const handleUnselect = useCallback(
      (option: Option) => {
        const newOptions = selected.filter((s) => s.value !== option.value);
        setSelected(newOptions);
        onChange?.(newOptions);
      },
      [onChange, selected]
    );

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLDivElement>) => {
        const input = inputRef.current;
        if (input) {
          if (e.key === 'Delete' || e.key === 'Backspace') {
            if (input.value === '' && selected.length > 0) {
              const lastSelectOption = selected[selected.length - 1];
              if (!lastSelectOption.fixed) {
                handleUnselect(selected[selected.length - 1]);
              }
            }
          }

          if (e.key === 'Escape') {
            input.blur();
          }
        }
      },
      [handleUnselect, selected]
    );

    useEffect(() => {
      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchend', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchend', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchend', handleClickOutside);
      };
    }, [open]);

    useEffect(() => {
      if (value) {
        setSelected(value);
      }
    }, [value]);

    useEffect(() => {
      if (!arrayOptions || onSearch) {
        return;
      }
      const newOption = transToGroupOption(arrayOptions || [], groupBy);
      if (JSON.stringify(newOption) !== JSON.stringify(options)) {
        setOptions(newOption);
      }
    }, [arrayDefaultOptions, arrayOptions, groupBy, onSearch, options]);

    useEffect(() => {
      const doSearchSync = () => {
        const res = onSearchSync?.(debouncedSearchTerm);
        setOptions(transToGroupOption(res || [], groupBy));
      };

      const exec = async () => {
        if (!onSearchSync || !open) return;

        if (triggerSearchOnFocus) {
          doSearchSync();
        }

        if (debouncedSearchTerm) {
          doSearchSync();
        }
      };

      void exec();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearchTerm, groupBy, open, triggerSearchOnFocus]);

    useEffect(() => {
      const doSearch = async () => {
        setIsLoading(true);
        const res = await onSearch?.(debouncedSearchTerm);
        setOptions(transToGroupOption(res || [], groupBy));
        setIsLoading(false);
      };

      const exec = async () => {
        if (!onSearch || !open) return;

        if (triggerSearchOnFocus) {
          await doSearch();
        }

        if (debouncedSearchTerm) {
          await doSearch();
        }
      };

      void exec();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearchTerm, groupBy, open, triggerSearchOnFocus]);

    const EmptyItem = useCallback(() => {
      if (!emptyIndicator) return undefined;

      if (onSearch && Object.keys(options).length === 0) {
        return (
          <CommandItem
            value="-"
            disabled
          >
            {emptyIndicator}
          </CommandItem>
        );
      }

      return <CommandEmpty>{emptyIndicator}</CommandEmpty>;
    }, [emptyIndicator, onSearch, options]);

    const selectables = useMemo<GroupOption>(() => removePickedOption(options, selected), [options, selected]);

    const commandFilter = useCallback(() => {
      if (commandProps?.filter) {
        return commandProps.filter;
      }

      return undefined;
    }, [commandProps?.filter]);

    return (
      <Command
        ref={dropdownRef}
        {...commandProps}
        onKeyDown={(e) => {
          handleKeyDown(e);
          commandProps?.onKeyDown?.(e);
        }}
        className={cn('h-auto overflow-visible bg-transparent mb-[30px]', commandProps?.className)}
        shouldFilter={commandProps?.shouldFilter !== undefined ? commandProps.shouldFilter : !onSearch}
        filter={commandFilter()}
      >
        <div className="flex font-semibold pb-1">{label}</div>
        <div
          className={cn(
            'min-h-10 rounded-md border border-input text-base md:text-sm focus-within:ring-1',
            {
              'px-3 py-2': selected.length !== 0,
              'cursor-text': !disabled && selected.length !== 0,
            },
            className
          )}
          onClick={() => {
            if (disabled) return;
            // inputRef?.current?.focus();
          }}
        >
          <div className="relative flex flex-wrap gap-1">
            {selected.map((option) => {
              return (
                <Badge
                  key={option.value}
                  className={cn(
                    'data-[disabled]:bg-muted-foreground data-[disabled]:text-muted data-[disabled]:hover:bg-muted-foreground',
                    'data-[fixed]:bg-muted-foreground data-[fixed]:text-muted data-[fixed]:hover:bg-muted-foreground',
                    badgeClassName
                  )}
                  data-fixed={option.fixed}
                  data-disabled={disabled || undefined}
                >
                  {option.label}
                  <button
                    className={cn(
                      'ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2',
                      (disabled || option.fixed) && 'hidden'
                    )}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleUnselect(option);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => {
                      handleUnselect(option);
                      document.addEventListener('mousedown', handleClickOutside);
                    }}
                  >
                    <IoClose className="h-3 w-3 text-muted-foreground hover:text-foreground cursor-pointer" />
                  </button>
                </Badge>
              );
            })}

            <CommandPrimitive.Input
              {...inputProps}
              ref={inputRef}
              value={inputValue}
              disabled={disabled}
              onValueChange={(value) => {
                setInputValue(value);
                inputProps?.onValueChange?.(value);
              }}
              onBlur={(event) => {
                if (!onScrollbar) {
                  setOpen(false);
                }
                inputProps?.onBlur?.(event);
              }}
              onFocus={(event) => {
                setOpen(true);
                inputProps?.onFocus?.(event);
              }}
              placeholder={selected.length !== 0 ? '' : placeholder}
              className={cn(
                'flex-1 bg-transparent outline-none placeholder:text-muted-foreground hover:ring-offset-2',
                {
                  'px-3 py-2': selected.length === 0,
                  'ml-1': selected.length !== 0,
                },
                inputProps?.className
              )}
            />
            <button
              type="button"
              onClick={() => {
                setSelected(selected.filter((s) => s.fixed));
                onChange?.(selected.filter((s) => s.fixed));
                setOpen(false);
              }}
              className={cn(
                'absolute right-0 p-0 cursor-pointer',
                (hideClearAllButton ||
                  disabled ||
                  selected.length < 1 ||
                  selected.filter((s) => s.fixed).length === selected.length) &&
                  'hidden'
              )}
            >
              <IoClose size={20} />
            </button>
          </div>
        </div>
        <div className="relative">
          {open && (
            <CommandList
              className="absolute top-1 z-100 w-full rounded-md border shadow-md overflow-y-scroll scrollbar-hide bg-white"
              onMouseLeave={() => {
                setOnScrollbar(false);
              }}
              onMouseEnter={() => {
                setOnScrollbar(true);
              }}
              onMouseUp={() => {
                inputRef?.current?.focus();
              }}
            >
              {isLoading ? (
                <>{loadingIndicator}</>
              ) : (
                <>
                  {EmptyItem()}
                  {Object.entries(selectables).map(([key, dropdowns]) => (
                    <CommandGroup
                      key={key}
                      heading={key}
                      className="h-[15vh] overflow-auto p-0"
                    >
                      <>
                        {dropdowns.map((option) => {
                          return (
                            <CommandItem
                              key={option.value}
                              value={option.label}
                              disabled={option.disable}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                              onSelect={() => {
                                if (selected.length >= maxSelected) {
                                  onMaxSelected?.(selected.length);
                                  return;
                                }
                                setInputValue('');
                                const newOptions = [...selected, option];
                                setSelected(newOptions);
                                onChange?.(newOptions);
                              }}
                              className={cn(
                                'cursor-pointer hover:bg-neutral-200',
                                option.disable && 'cursor-default text-muted-foreground '
                              )}
                            >
                              {option.label}
                            </CommandItem>
                          );
                        })}
                      </>
                    </CommandGroup>
                  ))}
                </>
              )}
            </CommandList>
          )}
        </div>
      </Command>
    );
  }
);

MultipleSelector.displayName = 'MultipleSelector';
export default MultipleSelector;
