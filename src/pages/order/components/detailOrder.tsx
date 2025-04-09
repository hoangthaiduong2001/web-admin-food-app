import Dialog from '@/components/Dialog';
import Table from '@/components/Table';
import { IProductOrder } from '@/types/order';
import { useState } from 'react';
import { productsOrderColumns } from '../column';
import { filterOrderDetail } from '../const';

const DetailOrder = ({ products, onClick }: { products: IProductOrder[]; onClick: () => void }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [valueSelect, setValueSelect] = useState(filterOrderDetail[0].value);
  return (
    <Dialog
      open={openDialog}
      setOpen={() => {
        setOpenDialog((prev) => !prev);
        onClick();
      }}
      variantButton="contained"
      titleButton="Detail"
      titleDialog="View  detail order"
      size="6xl"
      className="h-[90vh] overflow-y-scroll"
      showButtonSubmit={false}
      children={
        <Table
          data={products}
          AddItem={() => <></>}
          columns={productsOrderColumns}
          selectFilter={{
            placeholder: 'Filter by',
            value: valueSelect,
            onChange: setValueSelect,
            items: filterOrderDetail,
          }}
          isLink
        />
      }
    />
  );
};

export default DetailOrder;
