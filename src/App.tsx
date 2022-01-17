import { FC, useState, ChangeEvent } from 'react';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

import FORMS from './forms.json';
import { Form } from './models/form.model';

const App: FC = (): JSX.Element => {
	const forms: Form[] = FORMS.fields;

	const [displayForm, setDisplayForm] = useState<Form[]>([]);

	const handleSelectForm = (
		event: ChangeEvent<HTMLInputElement>,
		form: Form
	): void => {
		const { checked } = event.currentTarget;
		if (checked) {
			setDisplayForm([...displayForm, form]);
		} else {
			handleFormDelete(form.id);
		}
	};

	const handleFormDelete = (id: string): void => {
		const filterForm: Form[] = displayForm.filter(
			(displayForm: Form) => displayForm.id !== id
		);
		setDisplayForm(filterForm);
	};

	return (
		<div className="flex flex-row">
			<div className="basis-1/4 p-2">
				<p className="text-xl">Select forms</p>
				{forms.map((form: Form) => (
					<div key={form.id} className="flex items-center">
						<input
							className="form-checkbox h-4 w-4"
							type="checkbox"
							checked={displayForm.some(
								(formType: Form) => formType.id === form.id
							)}
							onChange={(event) => handleSelectForm(event, form)}
						/>
						<label className="ml-2 text-l">{form.label}</label>
					</div>
				))}
			</div>
			<div className="basis-3/4 p-2">
				<p className="text-xl">Forms view</p>
				{displayForm.length > 0 &&
					displayForm.map((form: Form) => (
						<div className="flex mt-3 mb-3" key={form.id}>
							<div className="basis-3/4">
								<CustomInputComponent {...form} />
							</div>
							<div className="flex flex-row-reverse basis-1/4 items-end justify-center">
								<button
									className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
									onClick={() => handleFormDelete(form.id)}
								>
									Delete
								</button>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default App;
