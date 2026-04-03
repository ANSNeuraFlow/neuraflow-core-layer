export type AppSelectOption = {
  label: string;
  value: string | number;
};

export type AppSelectProps = {
  modelValue?: string | number | null;
  options: AppSelectOption[];
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  id?: string;
  name?: string;
};
