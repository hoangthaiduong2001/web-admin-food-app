import Dialog from '@/components/Dialog';
import Table from '@/components/Table';
import { ProductCart } from '@/types/cart';
import { useState } from 'react';
import { cartByIdColumns } from '../column';
import { filterCartByIdTable } from '../const';

const DetailCart = ({ cart, onClick }: { cart: ProductCart[]; onClick: () => void }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [valueSelect, setValueSelect] = useState(filterCartByIdTable[0].value);
  return (
    <Dialog
      open={openDialog}
      setOpen={() => {
        setOpenDialog((prev) => !prev);
        onClick();
      }}
      variantButton="contained"
      titleButton="Detail"
      titleDialog="View  detail cart"
      size="6xl"
      showButtonSubmit={false}
      children={
        <Table
          data={cart}
          AddItem={() => <></>}
          columns={cartByIdColumns}
          selectFilter={{
            placeholder: 'Filter by',
            value: valueSelect,
            onChange: setValueSelect,
            items: filterCartByIdTable,
          }}
          isLink
        />
      }
    />
  );
};

export default DetailCart;
