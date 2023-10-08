<script lang="ts">
	export let href = '';
</script>

<a class="group relative" {href}>
	<div
		class="absolute -right-4 -bottom-4 left-4 top-4 z-10 bg-surface-500 group-hover:-right-8 group-hover:-bottom-8 group-hover:left-8 group-hover:top-8 transition-all duration-200 ease-in-out"
	/>
	<div
		class="flex flex-col w-full group-hover:scale-105 transition-all duration-200 ease-in-out relative z-20"
	>
		<div class="w-full aspect-square flex relative z-20">
			<slot name="image" />
			<div class="absolute left-0 bottom-0 px-8 py-2 variant-filled-primary font-lg">
				<slot name="date" />
			</div>
		</div>
		<div class="w-full p-8 flex flex-col gap-4 variant-filled-secondary relative z-20">
			<h3 class="text-3xl">
				<slot name="title" />
			</h3>
			<p>
				<slot />
			</p>
			<p class="italic w-full text-right">
				<slot name="author" />
			</p>
		</div>
	</div>
</a>
