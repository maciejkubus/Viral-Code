<script lang="ts">
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';

	export let unobserveOnEnter = false;
	export let rootMargin = '-0%';
	export let container = '';
	export let from = '';
	export let to = '';
	export let delay = 0;
	export let transition = 'transition-all';
	export let duration = 'duration-400';
	export let timing = 'ease-in-out';
	export let inView = true;

	let start = false;

	onMount(() => {
		if (!inView)
			setTimeout(() => {
				start = true;
			}, delay);
	});
</script>

<div
	class="{container} {start ? to : from} {transition} {duration} {timing}"
	use:inview={{ unobserveOnEnter, rootMargin }}
	on:inview_change={(event) => {
		if (inView) setTimeout(() => (start = event.detail.inView), delay);
	}}
>
	<slot />
</div>
