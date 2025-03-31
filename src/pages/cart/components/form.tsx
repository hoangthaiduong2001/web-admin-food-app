import Input from '@/components/Input';
import Select from '@/components/Select';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { TFormInstanceCart, TReturnFormCart } from '../type';

const FormCart = forwardRef<{ getValues: () => TReturnFormCart }, TFormInstanceCart>(({ cart, items }, ref) => {
  const [selectValue, setSelectValue] = useState(items[0].value);
  const [quantity, setQuantity] = useState<number>(cart.cart[0].quantity);

  useImperativeHandle(ref, () => ({
    getValues: () => ({
      productId: selectValue,
      quantity,
    }),
  }));

  useEffect(() => {
    const selectedItem = cart.cart.find((item) => item.productId === selectValue);
    setQuantity(selectedItem ? selectedItem.quantity : 0);
  }, [selectValue]);

  return (
    <div className="sm:w-10/12 md:w-8/12 lg:w-10/12 xl:w-full text-center">
      <form onSubmit={() => console.log('123')}>
        <Input
          value={cart.username}
          label="Username"
          disabled
          readOnly
        />
        <Select
          label="Product name"
          placeholder="Filter"
          items={items}
          value={selectValue}
          onChange={setSelectValue}
          className="w-full"
        />
        <Input
          value={quantity}
          onChange={(e) => {
            let value = e.target.value;
            const numberValue = Number(value);
            if (!isNaN(numberValue)) {
              setQuantity(numberValue);
            }
          }}
          label="Quantity"
          placeholder="Input quantity"
          required
        />
      </form>
    </div>
  );
});

export default FormCart;
