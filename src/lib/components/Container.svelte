<script lang="ts">
	export let layout = 'flex flex-col xl:flex-row justify-center items-center gap-20 w-full';
	export let bg = 'bg-surface-900';
	export let paddingY = 'py-32';
	export let paddingX = 'px-16 xl:px-2';
</script>

<section class="w-full flex flex-col justify-center items-center {bg} {paddingY} {paddingX}">
	{#if $$slots.title}
		<h2 class="text-7xl font-heading-token text-black pb-16">
			<slot name="title" />
		</h2>
	{/if}
	<div class="xl:w-site mx-auto {layout}">
		<slot />
	</div>
</section>
