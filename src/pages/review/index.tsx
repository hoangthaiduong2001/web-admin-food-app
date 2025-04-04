import { useGetAllReview } from '@/apis/hooks/review';
import Table from '@/components/Table';
import { useState } from 'react';
import { reviewColumns } from './column';
import { filterReviewTable } from './const';

const Review = () => {
  const [valueSelect, setValueSelect] = useState(filterReviewTable[0].value);
  const { data, isPending } = useGetAllReview();
  return (
    <div className="px-4">
      <Table
        data={data?.data.map((item) => item.review) || []}
        AddItem={() => <></>}
        isPending={isPending}
        columns={reviewColumns}
        selectFilter={{
          placeholder: 'Filter by',
          value: valueSelect,
          onChange: setValueSelect,
          items: filterReviewTable,
        }}
        isLink
      />
    </div>
  );
};

export default Review;
