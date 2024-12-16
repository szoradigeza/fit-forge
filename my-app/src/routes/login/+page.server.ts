import { env } from '$env/dynamic/private';
import { fail, redirect } from '@sveltejs/kit';
import { object, string } from 'yup';

export const actions = {
	login: async ({ request }: any) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const formSchema = object({
			email: string().email().required(),
			password: string().required()
		});

		try {
			await formSchema.validate({ email, password });
		} catch (error) {
			console.log(error);
			return fail(400, { error: 'Invalid username or password!' });
		}

		try {
			const resp = await fetch(`${env.API_URL}/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email,
					password
				})
			});
			const respData = await resp.json();

			if (!resp.ok) {
				console.error(respData);
				return { ok: false, error: respData.message };
			}

			return { ok: true, token: respData.token };
		} catch (e) {
			console.error(e);
		}
	}
};
