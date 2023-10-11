<script lang="ts">
	import { goto } from '$app/navigation';

	export let href: string;
	export let target = '_self';
	export let container = '';
	export let stopPropagation = false;

	const click = (e: MouseEvent) => {
		if (stopPropagation) e.stopPropagation();
		goto(href);
	};
</script>

<a {href} {target} class={container} on:click|preventDefault={click}>
	<slot />
</a>
