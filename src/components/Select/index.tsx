import { Group, Root, Value } from '@radix-ui/react-select';
import { useState } from 'react';
import SelectContent from './components/SelectContent';
import SelectItem from './components/SelectItem';
import SelectTrigger from './components/SelectTrigger';
import { ISelect } from './type';

const Select = ({ items, onChange, value, placeholder, className, label, classNameContent }: ISelect) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={className}>
      <p className="flex font-semibold">{label}</p>
      <Root
        onOpenChange={setOpen}
        onValueChange={onChange}
        value={value}
      >
        <SelectTrigger open={open}>
          <Value placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className={classNameContent}>
          <Group>
            {items.map((item) => (
              <SelectItem
                key={item.label}
                value={item.value}
              >
                {item.label}
              </SelectItem>
            ))}
          </Group>
        </SelectContent>
      </Root>
    </div>
  );
};

export default Select;
