<script lang="ts">
	import '../theme/app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import '@splidejs/svelte-splide/css';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell>
	<!-- <svelte:fragment slot="header">Header</svelte:fragment> -->
	<slot />
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
