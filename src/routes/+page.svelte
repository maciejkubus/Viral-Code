<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Page from '$lib/components/Page.svelte';
</script>

<Page>
	<Header>
		<div class="flex flex-col gap-8 w-2/3">
			<h1 class="font-heading-token text-9xl font-extrablack text-secondary-500 -rotate-1">
				Viral Code
			</h1>
			<p class="font-heading-token text-8xl font-black text-tertiary-500">
				Best website building team.
			</p>
		</div>
		<div class="w-1/3">
			<img src="/pics/logo.png" alt="logo" class="border-4 border-secondary-500 rotate-6 rounded" />
		</div>
	</Header>
</Page>
