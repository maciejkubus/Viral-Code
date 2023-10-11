<script lang="ts">
	import Link from './Link.svelte';

	export let variant = 'variant-filled-primary';
	export let href = '';
</script>

<Link container="relative xl:w-full max-w-full group" {href}>
	<div
		class="absolute -right-4 -bottom-4 left-4 top-4 z-10 bg-surface-500 rounded group-hover:-right-8 group-hover:-bottom-8 group-hover:left-8 group-hover:top-8 transition-all duration-200 ease-in-out"
	/>
	<div
		class="p-8 {variant} rounded flex flex-col xl:w-full relative z-20 group-hover:scale-105 transition-all duration-200 ease-in-out"
	>
		<p class="font-heading-token">
			<slot name="subtitle" />
		</p>
		<h3 class="font-heading-token text-4xl pt-2">
			<slot name="title" />
		</h3>
		<p class="text-lg pt-4">
			<slot name="content" />
		</p>
	</div>
</Link>
