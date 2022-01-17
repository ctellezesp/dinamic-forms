import { SelectForm } from "./select-form.model";

export interface Form {
	id: string;
	type: string;
	label: string;
	placeholder: string;
	radioOptions?: string[];
  selectOptions?: SelectForm[];
}