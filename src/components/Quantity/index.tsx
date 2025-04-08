import { FaMinus, FaPlus } from 'react-icons/fa';
import { Button } from '../Button';
import Input from '../Input';
import { IQuantity } from './type';

export const Quantity = ({ onChange, value }: IQuantity) => {
  return (
    <div className="flex gap-1 items-center justify-center">
      <Button
        className="h-6 w-6"
        disabled={value === 1}
        onClick={() => onChange(value - 1)}
      >
        <FaMinus className="w-3 h-3" />
      </Button>
      <Input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        className="h-6 w-10 text-center"
        value={value}
        onChange={(e) => {
          let value = e.target.value;
          const numberValue = Number(value);
          if (isNaN(numberValue) && numberValue < 0) {
            return;
          }
          onChange(numberValue);
        }}
      />
      <Button
        className="h-6 w-6"
        onClick={() => onChange(value + 1)}
      >
        <FaPlus className="w-3 h-3" />
      </Button>
    </div>
  );
};
