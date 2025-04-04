import { useDeleteReviewMutation } from '@/apis/hooks/review';
import Alert from '@/components/Alert';
import { showToast } from '@/components/Toast';
import { IReview } from '@/types/review';
import { useState } from 'react';

const DeleteReview = ({ review, onClick }: { review: IReview; onClick: () => void }) => {
  const [openAlter, setOpenAlter] = useState<boolean>(false);
  const { mutate: deleteReview } = useDeleteReviewMutation();
  const onSubmit = (id: string) => {
    if (id) {
      deleteReview(id, {
        onSuccess: (data) => {
          showToast({ message: data.message, type: 'success' });
          setOpenAlter(false);
        },
        onError: (error) => {
          showToast({ message: error.message, type: 'error' });
        },
      });
    } else {
      showToast({ message: 'Not found id', type: 'error' });
    }
  };
  return (
    <Alert
      description={
        <>
          Are you sure you want to delete this review of user:
          <span className="font-bold"> {review.reviewer.username}?</span>
        </>
      }
      variantTile="destructive"
      variantSubmit="destructive"
      onClick={() => onSubmit(review._id)}
      open={openAlter}
      setOpen={() => {
        setOpenAlter((prev) => !prev);
        onClick();
      }}
      titleAlter="Delete review"
      titleButton="Delete"
    />
  );
};

export default DeleteReview;
