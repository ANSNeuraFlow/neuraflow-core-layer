export interface AppFormFieldProps {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  htmlFor?: string;
}

export { default as AppFormField } from './AppFormField.vue';
