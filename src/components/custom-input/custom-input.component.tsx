import { FC } from 'react';
import { Form } from '../../models/form.model';
import { SelectForm } from '../../models/select-form.model';

export const CustomInputComponent: FC<Form> = ({
	type,
	placeholder,
	label,
	radioOptions,
	selectOptions,
}): JSX.Element => {
	return type === 'radio' ? (
		<div>
			<p className="text-gray-700">{label}</p>
			{radioOptions &&
				radioOptions.length > 0 &&
				radioOptions.map((option: string, index: number) => (
					<div className="inline-flex items-center ml-6" key={index}>
						<input type="radio" className="form-radio w-4 h-4" />
						<label className="ml-2 text-gray-800">{option}</label>
					</div>
				))}
		</div>
	) : type === 'select' ? (
		<div className="block">
			<p className="text-gray-700">{label}</p>
			<select className="form-select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
				{selectOptions &&
					selectOptions?.length > 0 &&
					selectOptions.map((selectOption: SelectForm, index: number) => (
						<option value={selectOption.value} key={index}>
							{selectOption.label}
						</option>
					))}
			</select>
		</div>
	) : (
		<div className="block">
			<label className="text-gray-700">{label}</label>
			<input
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
				type={type}
				placeholder={placeholder}
			/>
		</div>
	);
};
