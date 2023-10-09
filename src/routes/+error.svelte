<script>
	import { page } from '$app/stores';
</script>

<div class="container min-h-screen mx-auto flex justify-center items-center">
	<div class="space-y-5 text-center">
		<h1 class="text-8xl">{$page.status}</h1>
		<div class="">
			<h3 class="h3 text-2xl">{$page.error?.message}</h3>
		</div>
	</div>
</div>
