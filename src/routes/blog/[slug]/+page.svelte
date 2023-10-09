<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ImageCards from '$lib/components/ImageCards.svelte';
	import Page from '$lib/components/Page.svelte';
	import type { IPortfolioItem } from '$lib/interfacess/portfolio-item.interface';

	export let data;
</script>

<Page>
	<PageHeader>
		<div class="flex flex-col gap-12 xl:w-2/3">
			<h1 class="font-heading-token text-6xl font-extrablack text-secondary-500 -rotate-1">
				{data.post.title}
			</h1>
			<div class="font-heading-token text-4xl font-bold text-tertiary-500 flex gap-12">
				{data.post.date} - {data.post.author}
			</div>
			<div class="font-heading-token text-4xl text-white flex gap-12">
				{data.post.excerpt}
			</div>
			<div class="flex gap-4 xl:gap-10 flex-col xl:flex-row">
				<a href="/" class="btn variant-filled-primary btn-lg xl:btn-xl">Return to home</a>
				<a href="/blog" class="btn variant-filled-secondary btn-lg xl:btn-xl"> Return to blog </a>
			</div>
		</div>
		<div class="w-1/3 hidden xl:flex">
			<ImageCards images={[data.post.image, '/pics/logo2.png']} href="#" />
		</div>
	</PageHeader>
</Page>
