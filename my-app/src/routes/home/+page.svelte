<script lang="ts">
	import { get } from 'svelte/store';
	import userStore from '../../stores/user.store';

	const user: any = get(userStore);
	console.log(user);
</script>

<h1>{user?.name ? user.name : 'Guest'}</h1>
