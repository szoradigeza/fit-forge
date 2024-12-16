import showToast from '../../shared/showToast';

const submit = async (e: SubmitEvent) => {
	const inputs = e.target as HTMLFormElement;
	const formData = new FormData(inputs);

	if (inputs.confirmPassword.value != inputs.password.value) {
		showToast({
			description: "Passwords don't match!",
			type: 'error'
		});
	}

	formData.delete('confirmPassword');

	fetch('http://localhost:3200/register', {
		method: 'POST',
		body: formData
	}).then((value) => {
		console.log(value);
	});
};
