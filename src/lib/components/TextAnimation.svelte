<script lang="ts">
	import { onMount } from 'svelte';

	export let text = '';
	let index = 1;
	let showIndicator = true;
	let textInterval: ReturnType<typeof setInterval>;
	let indicatorInterval: ReturnType<typeof setInterval>;

	onMount(() => {
		textInterval = setInterval(() => {
			index += 1;

			if (index >= text.length) {
				clearInterval(textInterval);
				clearInterval(indicatorInterval);
				showIndicator = false;
			}
		}, 300);

		indicatorInterval = setInterval(() => {
			showIndicator = !showIndicator;
		}, 200);
	});
</script>

{text.slice(0, index)}{showIndicator ? '_' : ''}
