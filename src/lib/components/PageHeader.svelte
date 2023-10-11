<script lang="ts">
	export let paddingY = 'py-32';
	export let paddingX = 'px-16 xl:px-2';
	export let height = 'min-h-screen';
</script>

<header class="w-full {height} flex justify-center items-center {paddingY} {paddingX}">
	<div class="xl:w-site mx-auto flex flex-col xl:flex-row justify-center items-center gap-20">
		<slot />
	</div>
</header>
