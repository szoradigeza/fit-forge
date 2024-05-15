<script>
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	// TODO: fetch login data from server
	//
	//
	onMount(async () => {
		await goto('/login');
	});
</script>

<title>Home</title>
<meta name="description" content="Svelte demo app" />
<h1>asd</h1>
