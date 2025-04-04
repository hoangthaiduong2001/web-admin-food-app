export interface IReview {
  _id: string;
  product: {
    _id: string;
    title: string;
    img: string;
  };
  reviewer: {
    _id: string;
    username: string;
  };
  rating: number;
  content: string;
}

export interface ReviewResType {
  data: {
    review: IReview;
  }[];
}

export interface DeleteReviewResType {
  message: string;
}
