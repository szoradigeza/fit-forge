import { toasts } from 'svelte-toasts';
import type { ToastType } from 'svelte-toasts/types/common';

interface IToasts {
	title?: string;
	description: string;
	type: ToastType;
}

const showToast = (toastDetails: IToasts) => {
	const toast = toasts.add({
		...toastDetails,
		duration: 10000,
		theme: 'dark',
		onClick: () => {},
		onRemove: () => {}
	});
};

export default showToast;
