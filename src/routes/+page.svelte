<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import ImageCards from '$lib/components/ImageCards.svelte';
	import Page from '$lib/components/Page.svelte';
</script>

<Page>
	<Header>
		<div class="flex flex-col gap-12 w-2/3">
			<h1
				class="font-heading-token text-8xl xl:text-9xl font-extrablack text-secondary-500 -rotate-1"
			>
				Viral Code
			</h1>
			<p class="font-heading-token text-6xl xl:text-8xl font-black text-tertiary-500">
				Best website building team.
			</p>
			<div class="flex gap-4 xl:gap-10 flex-col xl:flex-row">
				<a href="/about-us" class="btn variant-filled-primary btn-lg xl:btn-xl">Get to know us</a>
				<a href="/contact" class="btn variant-filled-secondary btn-lg xl:btn-xl">Contact us</a>
			</div>
		</div>
		<div class="w-1/3 hidden xl:flex">
			<ImageCards images={['/pics/logo.png', '/pics/logo2.png']} href="#" />
		</div>
	</Header>
</Page>
