<script lang="ts">
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

		await fetch('http://localhost:4200/api/register', {
			method: 'POST',
			body: formData
		});
	};
</script>

<div class="w-full max-w-md space-y-8">
	<div>
		<h2 class="mt-6 text-center text-3xl font-bold">Create your account</h2>
		<p class="mt-2 text-center text-sm text-gray-400">
			Or
			<a href="#" class="font-medium text-indigo-500 hover:text-indigo-400">
				sign in to your existing account
			</a>
		</p>
	</div>
	<form on:submit|preventDefault={submit} class="mt-8 space-y-6 flex flex-col">
		<div class="py-1">
			<div class="py-1">
				<label for="name" class="sr-only"> Name </label>
				<input
					id="name"
					autocomplete="name"
					class="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					placeholder="Name"
					name="name"
				/>
			</div>

			<div class="py-1">
				<label for="email-address" class="sr-only"> Email address </label>
				<input
					id="email-address"
					autocomplete="email"
					class="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					placeholder="Email address"
					type="email"
					name="email"
				/>
			</div>
			<div class="py-1">
				<label for="password" class="sr-only"> Password </label>
				<input
					id="password"
					autocomplete="current-password"
					class="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					placeholder="Password"
					type="password"
					name="password"
				/>
			</div>
			<div class="py-1">
				<label for="confirmPassword" class="sr-only"> Confirm Password </label>
				<input
					id="confirmPassword"
					autocomplete="current-password"
					class="relative block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					placeholder="Confirm Password"
					type="password"
					name="confirmPassword"
				/>
			</div>
		</div>
		<div>
			<button
				type="submit"
				class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				Register
			</button>
		</div>
	</form>
</div>
