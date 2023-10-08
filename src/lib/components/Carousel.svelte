<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
</script>

<div>
	<Splide class="px-16 xl:px-32">
		<slot />
	</Splide>
</div>
