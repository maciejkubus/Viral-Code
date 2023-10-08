<script lang="ts">
	export let href = '';
	export let text = '';
</script>

<a {href} class="flex relative w-full h-full pl-8 group">
	<slot />
	<div
		class="absolute bottom-8 -left-8 px-8 py-6 variant-filled-primary xl:text-2xl font-bold rounded group-hover:-translate-x-4 group-hover:scale-105 group-hover:-rotate-3 group-hover:shadow-xl transition-all duration-300 ease-in-out"
	>
		{text}
	</div>
</a>
