interface ItemSelect {
  label: string;
  value: string;
}

interface ISelect {
  items: ItemSelect[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}
