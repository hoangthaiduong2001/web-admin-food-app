import { IPlainObject } from '@/types/common';
import { UseMutateFunction, UseQueryResult } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { Context } from 'react';

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

export type TTableProps<TRowDataType extends IPlainObject, TRowDataSort extends IPlainObject = object[]> = {
  name: string;
  pathname?: string;
  filterName: string;
  deleteById?: boolean;
  isLink?: boolean;
  columns: ColumnDef<TRowDataType>[];
  data: TRowDataType[];
  tableContext: Context<IItemTableContext<TRowDataType>>;
  initRows?: TRowDataType[];
  AddItem: React.ComponentType;
  EditItem: React.ComponentType<TEditItem>;
  mutationItem?: UseMutateFunction<TData<TRowDataType>, Error, number, unknown>;
  queryListItem?: UseQueryResult<TData<TRowDataType[]>, Error>;
  tableListSortedByNumber?: TRowDataSort;
  onChoose?: (value: TRowDataType) => void;
};
