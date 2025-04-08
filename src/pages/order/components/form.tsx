import MultipleSelector from '@/components/MultipleSelect';
import { Quantity } from '@/components/Quantity';
import Select from '@/components/Select';
import { TFormInstanceOrder } from '../type';

const FormOrder = ({
  items,
  selectUser,
  setSelectUser,
  option,
  optionProduct,
  setOptionProduct,
  orders,
  setOrders,
}: TFormInstanceOrder) => {
  const handleQuantityChange = (productId: string, quantity: number) => {
    const newOrders = (() => {
      if (quantity === 0) {
        return orders.filter((order) => order.productId !== productId);
      }

      const index = orders.findIndex((order) => order.productId === productId);

      if (index === -1) {
        return [...orders, { productId, quantity }];
      }

      const updatedOrders = [...orders];
      updatedOrders[index] = { ...updatedOrders[index], quantity };
      return updatedOrders;
    })();

    setOrders(newOrders);
  };
  return (
    <div className="sm:w-10/12 md:w-8/12 lg:w-10/12 xl:w-full text-center">
      <Select
        label="Select ussr"
        placeholder="Filter"
        items={items}
        value={selectUser}
        onChange={setSelectUser}
        className="w-full mb-2"
        classNameContent="h-[20vh]"
      />
      <MultipleSelector
        label="Select product"
        options={option}
        value={optionProduct}
        onChange={setOptionProduct}
        placeholder="Select product..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">no results found.</p>
        }
      />
      <div className={`border-1 p-2 py-1 rounded-xl ${!optionProduct.length ? 'hidden' : ''}`}>
        {optionProduct.map((item) => (
          <div
            key={item.value}
            className="flex justify-between items-center "
          >
            <span>{item.label}</span>
            <Quantity
              value={orders.find((order) => order.productId === item.value)?.quantity || 1}
              onChange={(quantity) => handleQuantityChange(item.value, quantity)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormOrder;
