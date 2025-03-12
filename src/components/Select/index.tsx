import { Group, Root, SelectContent, Value } from '@radix-ui/react-select';
import SelectItem from './components/SelectItem';
import SelectLabel from './components/SelectLabel';
import SelectTrigger from './components/SelectTrigger';

const Select = () => {
  return (
    <Root>
      <SelectTrigger className="w-md">
        <Value placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <Group>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </Group>
      </SelectContent>
    </Root>
  );
};

export default Select;
