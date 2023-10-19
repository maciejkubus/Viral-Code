<script lang="ts">
	import Link from './Link.svelte';
	import Animation from './Animation.svelte';

	export let href = '';
	export let text = '';
	export let animationDelay = 0;
</script>

<Link {href} container="flex relative w-full h-full pl-8 group">
	<slot />
	<Animation
		container="absolute bottom-8 -left-8 px-8 py-6 variant-filled-primary xl:text-2xl font-bold rounded group-hover:-translate-x-4 group-hover:scale-105 group-hover:-rotate-3 group-hover:shadow-xl transition-all duration-300 ease-in-out"
		from="translate-x-16 scale-0 opacity-0 -rotate-12"
		to="translate-x-0 scale-100 opacity-100 rotate-0"
		duration="duration-500"
		delay={animationDelay}
	>
		{text}
	</Animation>
</Link>
