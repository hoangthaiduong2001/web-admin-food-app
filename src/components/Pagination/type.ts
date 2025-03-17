export interface IPaginationTable {
  page: number;
  pageSize: number;
  pathname?: string;
  isLink?: boolean;
  onClick: (pageNumber: number) => void;
}
