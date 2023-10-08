<script lang="ts">
	import { onMount } from 'svelte';
	import viewport from '$lib/actions/useViewportAction';

	export let count = 0;

	let counter = 0;
	let interval: NodeJS.Timeout;

	const start = () => {
		interval = setInterval(() => {
			counter++;
			if (count <= counter) clearInterval(interval);
		}, 10);
	};
</script>

<div class="w-full flex flex-col gap-4" use:viewport on:enterViewport={() => start()}>
	<h4 class="font-heading-token text-2xl">
		<slot />
	</h4>
	<p class="text-8xl font-black">
		{counter}
	</p>
</div>
