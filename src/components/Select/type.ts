export interface ItemSelect {
  label: string;
  value: string;
}

export interface ISelect {
  label?: string;
  items: ItemSelect[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  classNameContent?: string;
}
