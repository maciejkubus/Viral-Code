<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ImageCards from '$lib/components/ImageCards.svelte';
	import Page from '$lib/components/Page.svelte';
	import Container from '$lib/components/Container.svelte';
	import IconText from '$lib/components/IconText.svelte';
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
	<Container>
		<div class="w-1/3 flex flex-col gap-20">
			<IconText>
				<i class="fas fa-yin-yang" slot="icon" />
				<svelte:fragment slot="title">Tranquility</svelte:fragment>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facere inventore amet?</p>
			</IconText>
			<IconText>
				<i class="fas fa-wine-glass-alt" slot="icon" />
				<svelte:fragment slot="title">Wine bar</svelte:fragment>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facere inventore amet?</p>
			</IconText>
		</div>
		<div class="w-1/3 flex flex-col gap-20">
			<IconText>
				<i class="fas fa-wrench" slot="icon" />
				<svelte:fragment slot="title">Quick tools</svelte:fragment>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facere inventore amet?</p>
			</IconText>
			<IconText>
				<i class="fas fa-walking" slot="icon" />
				<svelte:fragment slot="title">Walks</svelte:fragment>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facere inventore amet?</p>
			</IconText>
		</div>
		<div class="w-1/3 flex flex-col gap-20">
			<IconText>
				<i class="fas fa-wallet" slot="icon" />
				<svelte:fragment slot="title">Money</svelte:fragment>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facere inventore amet?</p>
			</IconText>
			<IconText>
				<i class="fas fa-venus" slot="icon" />
				<svelte:fragment slot="title">Venus</svelte:fragment>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facere inventore amet?</p>
			</IconText>
		</div>
	</Container>
	<Container
		bg="variant-filled-tertiary"
		paddingX="px-0"
		size="w-full"
		titlePadding="pb-32"
		paddingY="py-0"
	>
		<div class="w-full flex flex-row flex-wrap">
			{#each [1, 2, 3, 4] as num}
				<a
					href="/pics/amy/amy-{num}.jpg"
					target="_blank"
					class="w-1/2 xl:w-1/4 aspect-square flex overflow-hidden group"
				>
					<img
						src="/pics/amy/amy-{num}.jpg"
						alt="partner {num}"
						class="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-6 transition-all duration-200 ease-in-out"
					/>
				</a>
			{/each}
		</div>
	</Container>
	<Container>
		<div class="w-1/3 flex flex-col gap-20">
			<IconText>
				<span slot="icon" class="font-bold">1.</span>
				<svelte:fragment slot="title">Mercury</svelte:fragment>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facere inventore amet?</p>
			</IconText>
			<IconText>
				<span slot="icon" class="font-bold">2.</span>
				<svelte:fragment slot="title">Venus</svelte:fragment>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facere inventore amet?</p>
			</IconText>
		</div>
		<div class="w-1/3 flex flex-col gap-20">
			<IconText>
				<span slot="icon" class="font-bold">3.</span>
				<svelte:fragment slot="title">Earth</svelte:fragment>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facere inventore amet?</p>
			</IconText>
			<IconText>
				<span slot="icon" class="font-bold">4.</span>
				<svelte:fragment slot="title">Mars</svelte:fragment>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facere inventore amet?</p>
			</IconText>
		</div>
		<div class="w-1/3 flex flex-col gap-20">
			<IconText>
				<span slot="icon" class="font-bold">5.</span>
				<svelte:fragment slot="title">Jupiter</svelte:fragment>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facere inventore amet?</p>
			</IconText>
			<IconText>
				<span slot="icon" class="font-bold">6.</span>
				<svelte:fragment slot="title">Saturn</svelte:fragment>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facere inventore amet?</p>
			</IconText>
		</div>
	</Container>
</Page>
