<script lang="ts">
	export let textSize = 'text-xl';
	export let container = '';
</script>

<div class="flex gap-8 {container}">
	<div class="text-6xl text-secondary-500">
		<slot name="icon" />
	</div>
	<div class="space-y-2">
		<div class="text-2xl font-bold font-heading-token">
			<slot name="title" />
		</div>
		<div class={textSize}>
			<slot />
		</div>
	</div>
</div>
