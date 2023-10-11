<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ImageCards from '$lib/components/ImageCards.svelte';
	import Page from '$lib/components/Page.svelte';
	import type { IPortfolioItem } from '$lib/interfacess/portfolio-item.interface';
	import Link from '$lib/components/Link.svelte';

	export let data;
</script>

<Page>
	<PageHeader>
		<div class="flex flex-col gap-12 xl:w-2/3">
			<h1
				class="font-heading-token text-8xl xl:text-9xl font-extrablack text-secondary-500 -rotate-1"
			>
				{data.portfolio.title}
			</h1>
			<div class="font-heading-token text-6xl xl:text-8xl font-black text-tertiary-500 flex gap-12">
				<Link
					href={data.portfolio.href}
					stopPropagation={true}
					target="_blank"
					container="block hover:text-primary-500 hover:scale-125 hover:-rotate-2 transition-all duration-200 ease-in-out"
				>
					<i class="fas fa-external-link-alt" />
				</Link>
				<Link
					href={data.portfolio.github}
					stopPropagation={true}
					target="_blank"
					container="block hover:text-primary-500 hover:scale-125 hover:-rotate-2 transition-all duration-200 ease-in-out"
				>
					<i class="fab fa-github" />
				</Link>
			</div>
			<div class="flex gap-4 xl:gap-10 flex-col xl:flex-row">
				<Link href="/" container="btn variant-filled-primary btn-lg xl:btn-xl">Return to home</Link>
				<Link href="/portfolio" container="btn variant-filled-secondary btn-lg xl:btn-xl">
					Return to porfolios
				</Link>
			</div>
		</div>
		<div class="w-1/3 hidden xl:flex">
			<ImageCards images={['/pics/logo.png', '/pics/logo2.png']} href="#" />
		</div>
	</PageHeader>
</Page>
