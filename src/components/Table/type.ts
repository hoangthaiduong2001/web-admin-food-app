import { IPlainObject } from '@/types/common';
import { ColumnDef } from '@tanstack/react-table';
import { ItemSelect } from '../Select/type';

export type TData<T> = {
  status: number;
  response: {
    data: T;
    message: string;
  };
};

type TEditItem = {
  id: number | undefined;
  setId: (value: number | undefined) => void;
  onSubmitSuccess?: () => void;
};

export interface IItemTableContext<T extends IPlainObject> {
  itemIdEdit: number | undefined;
  itemDelete?: T | null;
  setItemIdEdit: (value: number | undefined) => void;
  setItemDelete?: (value: T | null) => void;
}

export interface FilterItem {
  placeholder: string;
  items: ItemSelect[];
  value: string;
  onChange: (value: string) => void;
}

export type TTableProps<TRowDataType extends IPlainObject> = {
  pathname?: string;
  isLink?: boolean;
  columns: ColumnDef<TRowDataType>[];
  data: TRowDataType[];
  initRows?: TRowDataType[];
  AddItem: React.ComponentType;
  selectFilter: FilterItem;
  isPending?: boolean;
  onChoose?: (value: TRowDataType) => void;
};
