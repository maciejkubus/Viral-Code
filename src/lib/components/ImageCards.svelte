<script lang="ts">
	import Link from './Link.svelte';

	export let images: string[] = [];
	export let href: string = '';
</script>

<Link container="flex relative w-full aspect-square group" {href}>
	<img
		src={images[0]}
		alt="logo"
		class="absolute z-0 rotate-3 bg-white border-8 border-secondary-500 rounded group-hover:-rotate-3 group-hover:-translate-x-1/4 duration-500 transition-all ease-in-out"
	/>
	<img
		src={images[1]}
		alt="logo2"
		class="absolute -z-10 rotate-3 bg-white border-8 border-secondary-500 rounded scale-50 group-hover:scale-100 group-hover:rotate-3 group-hover:translate-x-1/4 duration-500 transition-all ease-in-out"
	/>
</Link>
