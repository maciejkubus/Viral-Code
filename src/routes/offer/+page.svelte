<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ImageCards from '$lib/components/ImageCards.svelte';
	import Page from '$lib/components/Page.svelte';
	import Container from '$lib/components/Container.svelte';
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
				Take a look on what we offer
			</p>
			<div class="flex gap-4 xl:gap-10 flex-col xl:flex-row">
				<a href="/about-us" class="btn variant-filled-primary btn-lg xl:btn-xl">Get to know us</a>
				<a href="/contact" class="btn variant-filled-secondary btn-lg xl:btn-xl">Contact us</a>
			</div>
		</div>
		<div class="w-1/3 hidden xl:flex">
			<ImageCards images={['/pics/logo.png', '/pics/logo2.png']} href="#" />
		</div>
	</PageHeader>
	<Container bg="bg-tertiary-500" layout="flex flex-col xl:flex-row justify-center gap-20 w-full">
		<svelte:fragment slot="title">How we work</svelte:fragment>
		<div class="w-1/2 text-black">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem, explicabo consequuntur ea
			mollitia maiores asperiores reiciendis repellendus a magnam, maxime suscipit saepe nostrum
			nemo! Illo, sit corporis? Voluptatibus, sit. Eligendi cum cumque nostrum aut quibusdam
			corporis? Obcaecati, excepturi corporis!
		</div>
		<div class="w-1/2 text-black">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quis vitae voluptas, optio
			distinctio expedita ad nemo dignissimos, nisi consectetur beatae doloribus quibusdam enim
			autem labore ducimus quasi et numquam illo id quas repellendus. Eius repudiandae ad tenetur.
		</div>
	</Container>
</Page>
