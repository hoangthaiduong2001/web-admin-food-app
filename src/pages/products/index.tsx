import { useGetAllProduct } from '@/apis/hooks/product';
import InputFile from '@/components/InputFile';
import Table from '@/components/Table';
import { useState } from 'react';
import { productColumns } from './column';
import { filterProductTable } from './const';

const Product = () => {
  const [valueSelect, setValueSelect] = useState(filterProductTable[0].value);
  const { data, isPending } = useGetAllProduct();
  return (
    <div className="px-4">
      <InputFile />
      <Table
        data={data?.data || []}
        AddItem={() => <>Add</>}
        isPending={isPending}
        columns={productColumns}
        selectFilter={{
          placeholder: 'Filter by',
          value: valueSelect,
          onChange: setValueSelect,
          items: filterProductTable,
        }}
        isLink
      />
    </div>
  );
};

export default Product;
