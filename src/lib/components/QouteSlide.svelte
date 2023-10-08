<script lang="ts">
	import { SplideSlide } from '@splidejs/svelte-splide';
</script>

<SplideSlide>
	<div class="flex flex-col items-center justify-center h-96 gap-2">
		<div class="font-heading-token text-6xl">
			<slot name="name" />
		</div>
		<div class="text-xl text-center italic py-2">
			<slot />
		</div>
		<div>
			<slot name="bottom" class="text-lg" />
		</div>
	</div>
</SplideSlide>
