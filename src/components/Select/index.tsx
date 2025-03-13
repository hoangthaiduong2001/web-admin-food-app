import { Group, Root, Value } from '@radix-ui/react-select';
import { useState } from 'react';
import SelectContent from './components/SelectContent';
import SelectItem from './components/SelectItem';
import SelectTrigger from './components/SelectTrigger';

const Select = ({ items, onChange, value, placeholder }: ISelect) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Root
      onOpenChange={setOpen}
      onValueChange={onChange}
      value={value}
    >
      <SelectTrigger open={open}>
        <Value placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
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
  );
};

export default Select;
