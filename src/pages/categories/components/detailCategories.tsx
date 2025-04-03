import Dialog from '@/components/Dialog';
import Table from '@/components/Table';
import { IListProductCategories } from '@/types/categories';
import { useState } from 'react';
import { productsCategoriesColumns } from '../column';
import { filterCategoriesDetail } from '../const';

const DetailCategories = ({
  id,
  products,
  onClick,
}: {
  id: string;
  products: IListProductCategories[];
  onClick: () => void;
}) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [valueSelect, setValueSelect] = useState(filterCategoriesDetail[0].value);
  const data = products.map((item) => item.product) || [];
  return (
    <Dialog
      open={openDialog}
      setOpen={() => {
        setOpenDialog((prev) => !prev);
        onClick();
      }}
      variantButton="contained"
      titleButton="Detail"
      titleDialog="View  detail categories"
      size="6xl"
      className="h-[90vh] overflow-y-scroll"
      showButtonSubmit={false}
      children={
        <Table
          data={data}
          AddItem={() => <></>}
          columns={productsCategoriesColumns(id, setOpenDialog)}
          selectFilter={{
            placeholder: 'Filter by',
            value: valueSelect,
            onChange: setValueSelect,
            items: filterCategoriesDetail,
          }}
          isLink
        />
      }
    />
  );
};

export default DetailCategories;
