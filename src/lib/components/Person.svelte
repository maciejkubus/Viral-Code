<script lang="ts">
	export let image = '';
	export let href = '';
	export let target = '_self';
	export let accent = 'bg-tertiary-500';
</script>

<a class="w-full aspect-[3/5] relative group flex" {href} {target}>
	<div
		class="absolute -right-4 -bottom-4 left-4 top-4 z-10 rounded {accent} group-hover:-right-8 group-hover:-bottom-8 group-hover:left-8 group-hover:top-8 transition-all duration-200 ease-in-out"
	/>
	<div
		class="absolute z-20 w-full h-full inset-0 rounded bg-cover bg-center group-hover:scale-105 transition-all duration-200 ease-in-out"
		style="background-image: url({image});"
	/>
	<div
		class="relative z-30 flex flex-col rounded justify-end items-center gap-2 w-full h-full text-center px-2 py-8 group-hover:scale-105 transition-all duration-200 ease-in-out"
	>
		<div class="text-2xl font-heading-token">
			<slot name="name" />
		</div>
		<div class="text-xl italic">
			<slot name="position" />
		</div>
	</div>
</a>
