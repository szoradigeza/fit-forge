<script lang="ts">
	import { derived, get } from 'svelte/store';
	import { userStore } from '../../stores/user.store';

	import fetchWithToken from '../../shared/fetchWithToken';
	import { getContext, setContext } from 'svelte';

	let userData: any;
	userStore.subscribe((data) => {
		userData = data;
	});

	let username: string | null = null;

	if (!userData) {
		fetchWithToken('/restricted/me').then((resp: any) => {
			userStore.set(resp);
		});
	}
</script>

<h1>{userData?.username ? userData?.username : 'Guest'}</h1>
