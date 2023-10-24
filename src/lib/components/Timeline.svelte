<script lang="ts">
	import type { ITimelineItem } from '$lib/interfacess/timeline-item.interface';

	export let items: Array<ITimelineItem> = [];
</script>

<div class="w-full flex flex-col gap-8">
	{#each items as item, index}
		<div class="flex gap-8 {index % 2 == 0 ? 'flex-row-reverse' : ''}">
			<div class="w-2/5 px-8 py-4" />
			<div class="variant-filled-tertiary px-8 py-4 w-3/5 rounded-lg">
				<div class="flex justify-between items-center rounded">
					<h3 class="text-2xl font-bold">{item.title}</h3>
					<div
						class="text-lg px-4 py-2 variant-filled-surface rounded text-center whitespace-nowrap"
					>
						{item.date}
					</div>
				</div>
				<div class="text-lg mt-4">
					{item.text}
				</div>
			</div>
		</div>
	{/each}
</div>
