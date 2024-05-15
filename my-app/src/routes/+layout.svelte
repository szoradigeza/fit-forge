<script lang="ts">
	import { onMount } from 'svelte';
	import { ToastContainer, FlatToast } from 'svelte-toasts';

	import './styles.css';
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<ToastContainer placement="top-right" let:data>
		<FlatToast {data} />
		<!-- Provider template for your toasts -->
	</ToastContainer>
	<main>
		<slot />
	</main>
</div>
