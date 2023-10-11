<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ImageCards from '$lib/components/ImageCards.svelte';
	import Page from '$lib/components/Page.svelte';
	import Container from '$lib/components/Container.svelte';
	import portfolios from '$lib/data/portfolios';
	import Card from '$lib/components/Card.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<Page>
	<PageHeader>
		<div class="flex flex-col gap-12 xl:w-2/3">
			<h1
				class="font-heading-token text-8xl xl:text-9xl font-extrablack text-secondary-500 -rotate-1"
			>
				Viral Code
			</h1>
			<p class="font-heading-token text-6xl xl:text-8xl font-black text-tertiary-500">
				Here are our achievments
			</p>
		</div>
		<div class="w-1/3 hidden xl:flex">
			<ImageCards images={['/pics/logo.png', '/pics/logo2.png']} href="#" />
		</div>
	</PageHeader>
	<Container bg="bg-tertiary-500">
		<div class="grid grid-cols-1 xl:grid-cols-2 gap-20">
			{#each portfolios as portfolio}
				<div class="">
					<Card href="/portfolio/{portfolio.slug}" variant="variant-filled-secondary">
						<svelte:fragment slot="subtitle">Project</svelte:fragment>
						<svelte:fragment slot="title">{portfolio.title}</svelte:fragment>
						<svelte:fragment slot="content">
							<div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil cupiditate
								blanditiis numquam temporibus quo vero veniam minima odit totam sunt magni nam, hic
								recusandae accusamus beatae sed tenetur. Inventore?
							</div>
							<div class="pt-8 text-2xl flex gap-4">
								<Link
									href={portfolio.href}
									stopPropagation={true}
									target="_blank"
									container="block hover:text-primary-500 hover:scale-125 hover:-rotate-2 transition-all duration-200 ease-in-out"
								>
									<i class="fas fa-external-link-alt" />
								</Link>
								<Link
									href={portfolio.github}
									stopPropagation={true}
									target="_blank"
									container="block hover:text-primary-500 hover:scale-125 hover:-rotate-2 transition-all duration-200 ease-in-out"
								>
									<i class="fab fa-github" />
								</Link>
							</div>
						</svelte:fragment>
					</Card>
				</div>
			{/each}
		</div>
	</Container>
</Page>
