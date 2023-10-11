<script lang="ts">
	import { inview } from 'svelte-inview';

	export let unobserveOnEnter = false;
	export let rootMargin = '-10%';
	export let container = '';
	export let from = '';
	export let to = '';
	export let delay = 0;
	export let transition = 'transition-all';
	export let duration = 'duration-400';
	export let timing = 'ease-in-out';

	let isInView = false;
</script>

<div
	class="{container} {isInView ? to : from} {transition} {duration} {timing}"
	use:inview={{ unobserveOnEnter, rootMargin }}
	on:inview_change={(event) => {
		setTimeout(() => (isInView = event.detail.inView), delay);
	}}
>
	<slot />
</div>
