<script lang="ts">
</script>

<div class="xl:px-32 pt-16 relative">
	<div class="hidden xl:block absolute top-0 left-16 opacity-20 text-9xl">
		<i class="fas fa-quote-right" />
	</div>
	<div class="hidden xl:block absolute bottom-0 right-16 opacity-20 text-9xl">
		<i class="fas fa-quote-left" />
	</div>
	<div class="text-2xl xl:text-4xl italic font-light text-center">
		<slot />
	</div>
	<div class="text-2xl mt-12 text-center font-bold">
		<slot name="author" />
		-
		<slot name="year" />
	</div>
</div>
