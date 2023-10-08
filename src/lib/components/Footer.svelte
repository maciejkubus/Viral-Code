<script lang="ts">
</script>

<div class="w-full py-32 px-16 xl:px-2 variant-filled-secondary">
	<div class="xl:w-site mx-auto flex flex-col xl:flex-row justify-center gap-20">
		<div class="w-full xl:w-1/4">
			<slot name="col-1" />
		</div>
		<div class="w-full xl:w-1/4">
			<slot name="col-2" />
		</div>
		<div class="w-full xl:w-1/4">
			<slot name="col-3" />
		</div>
		<div class="w-full xl:w-1/4">
			<slot name="col-4" />
		</div>
	</div>
	<div class="xl:w-site mx-auto mt-8 pt-8 border-t-2 border-white">
		<slot name="bottom" />
	</div>
</div>
