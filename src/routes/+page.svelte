<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Container from '$lib/components/Container.svelte';
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
	<Container
		layout="flex flex-col xl:flex-row justify-center items-stretch gap-20 w-full"
		bg="bg-tertiary-500"
		paddingY="pb-32 pt-16"
	>
		<svelte:fragment slot="title">Who we are?</svelte:fragment>
		<Card href="/about-us">
			<svelte:fragment slot="subtitle">Website building</svelte:fragment>
			<svelte:fragment slot="title">Team</svelte:fragment>
			<svelte:fragment slot="content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil cupiditate blanditiis
				numquam temporibus quo vero veniam minima odit totam sunt magni nam, hic recusandae
				accusamus beatae sed tenetur. Inventore?
			</svelte:fragment>
		</Card>
		<Card variant="variant-filled-secondary" href="/about-us">
			<svelte:fragment slot="subtitle">Best graphic</svelte:fragment>
			<svelte:fragment slot="title">Projects</svelte:fragment>
			<svelte:fragment slot="content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil cupiditate blanditiis
				numquam temporibus quo vero veniam minima odit totam sunt magni nam, hic recusandae
				accusamus beatae sed tenetur. Inventore?
			</svelte:fragment>
		</Card>
		<Card variant="variant-filled-success" href="/about-us">
			<svelte:fragment slot="subtitle">Amazing programming</svelte:fragment>
			<svelte:fragment slot="title">Skills</svelte:fragment>
			<svelte:fragment slot="content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil cupiditate blanditiis
				numquam temporibus quo vero veniam minima odit totam sunt magni nam, hic recusandae
				accusamus beatae sed tenetur. Inventore?
			</svelte:fragment>
		</Card>
	</Container>
</Page>
