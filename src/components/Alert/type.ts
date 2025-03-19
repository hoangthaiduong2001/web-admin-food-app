export interface IAlter {
  titleAlter: string;
  titleButton: string;
  description: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  onClick: () => void;
}
