<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ImageCards from '$lib/components/ImageCards.svelte';
	import Page from '$lib/components/Page.svelte';
	import Container from '$lib/components/Container.svelte';
	import IconText from '$lib/components/IconText.svelte';
	import Person from '$lib/components/Person.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import posts from '$lib/data/posts';
	import Carousel from '$lib/components/Carousel.svelte';
	import QouteSlide from '$lib/components/QouteSlide.svelte';

	const latestPosts = posts.slice(0, 3);
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
				Get to know us better
			</p>
		</div>
		<div class="w-1/3 hidden xl:flex">
			<ImageCards images={['/pics/logo.png', '/pics/logo2.png']} href="#" />
		</div>
	</PageHeader>
	<Container bg="variant-filled-tertiary">
		<div class="flex flex-col gap-8 xl:w-1/2">
			<h3 class="font-heading-token text-6xl">Our elements together</h3>
			<p class="text-2xl">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ex! Recusandae perferendis
				dolorem blanditiis laboriosam asperiores, quibusdam beatae odit ipsa.
			</p>
			<p class="text-2xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aliquid eveniet? Earum quo
				dolores tenetur quam. Fugiat tempora laborum impedit delectus veniam deleniti dignissimos
				voluptatem iusto. Sunt aut laboriosam a!
			</p>
		</div>
		<div class="w-1/2 hidden xl:grid grid-cols-2 gap-4">
			<img
				src="/pics/amy/amy-1.jpg"
				alt="Amy 1"
				class="w-full aspect-square object-cover object-center"
			/>
			<img
				src="/pics/amy/amy-2.jpg"
				alt="Amy 2"
				class="w-full aspect-square object-cover object-center"
			/>
			<img
				src="/pics/amy/amy-3.jpg"
				alt="Amy 3"
				class="w-full aspect-square object-cover object-center"
			/>
			<img
				src="/pics/amy/amy-4.jpg"
				alt="Amy 4"
				class="w-full aspect-square object-cover object-center"
			/>
		</div>
	</Container>
	<Container>
		<IconText textSize="text-lg" container="flex-col items-center">
			<span slot="icon" class="font-bold"><i class="fas fa-tree" /></span>
			<div class="w-full text-center text-4xl" slot="title">Tree</div>
			<p class="text-center">Lorem, ipsum dolor sit amet consectetur.</p>
		</IconText>
		<IconText textSize="text-lg" container="flex-col items-center">
			<span slot="icon" class="font-bold"><i class="fas fa-trophy" /></span>
			<div class="w-full text-center text-4xl" slot="title">Trophy</div>
			<p class="text-center">Lorem, ipsum dolor sit amet consectetur.</p>
		</IconText>
		<IconText textSize="text-lg" container="flex-col items-center">
			<span slot="icon" class="font-bold"><i class="fas fa-tractor" /></span>
			<div class="w-full text-center text-4xl" slot="title">Tractor</div>
			<p class="text-center">Lorem, ipsum dolor sit amet consectetur.</p>
		</IconText>
		<IconText textSize="text-lg" container="flex-col items-center">
			<span slot="icon" class="font-bold"><i class="fas fa-table-tennis" /></span>
			<div class="w-full text-center text-4xl" slot="title">Tennis</div>
			<p class="text-center">Lorem, ipsum dolor sit amet consectetur.</p>
		</IconText>
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
	<Container size="w-full" paddingX="px-0">
		<svelte:fragment slot="title">
			<span class="text-white">Our team</span>
		</svelte:fragment>
		<div class="xl:w-1/5">
			<Person
				image="/pics/characters/1.jpg"
				href="http://maciejkubus.usermd.net/"
				target="_blank"
				accent="bg-primary-500"
			>
				<svelte:fragment slot="name">Aby Bibi</svelte:fragment>
				<svelte:fragment slot="position">Priestess</svelte:fragment>
			</Person>
		</div>
		<div class="xl:w-1/5">
			<Person
				image="/pics/characters/2.jpg"
				href="http://maciejkubus.usermd.net/"
				target="_blank"
				accent="bg-secondary-500"
			>
				<svelte:fragment slot="name">Henry Great</svelte:fragment>
				<svelte:fragment slot="position">Dark Mage</svelte:fragment>
			</Person>
		</div>
		<div class="xl:w-1/5">
			<Person
				image="/pics/characters/4.jpg"
				href="http://maciejkubus.usermd.net/"
				target="_blank"
				accent="bg-tertiary-500"
			>
				<svelte:fragment slot="name">Francois</svelte:fragment>
				<svelte:fragment slot="position">Knight</svelte:fragment>
			</Person>
		</div>
	</Container>
	<Container bg="variant-filled-tertiary">
		<div class="w-1/2 hidden xl:grid grid-cols-2 gap-4">
			<img
				src="/pics/amy/amy-1.jpg"
				alt="Amy 1"
				class="w-full aspect-square object-cover object-center"
			/>
			<img
				src="/pics/amy/amy-2.jpg"
				alt="Amy 2"
				class="w-full aspect-square object-cover object-center"
			/>
			<img
				src="/pics/amy/amy-3.jpg"
				alt="Amy 3"
				class="w-full aspect-square object-cover object-center"
			/>
			<img
				src="/pics/amy/amy-4.jpg"
				alt="Amy 4"
				class="w-full aspect-square object-cover object-center"
			/>
		</div>
		<div class="w-1/2">
			<h3 class="font-heading-token text-6xl mb-12">Our powers</h3>
			<div class="w-full grid grid-cols-2 gap-12">
				<IconText>
					<i class="fas fa-yin-yang" slot="icon" />
					<svelte:fragment slot="title">Tranquility</svelte:fragment>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
				</IconText>
				<IconText>
					<i class="fas fa-wine-glass-alt" slot="icon" />
					<svelte:fragment slot="title">Wine bar</svelte:fragment>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
				</IconText>
				<IconText>
					<i class="fas fa-wrench" slot="icon" />
					<svelte:fragment slot="title">Quick tools</svelte:fragment>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
				</IconText>
				<IconText>
					<i class="fas fa-walking" slot="icon" />
					<svelte:fragment slot="title">Walks</svelte:fragment>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
				</IconText>
			</div>
		</div>
	</Container>
	<Container>
		<Carousel>
			<QouteSlide>
				<svelte:fragment slot="name">Maciej Kubus</svelte:fragment>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ratione repellendus. Dolorem,
				voluptas. Delectus iure pariatur inventore vitae rem ullam. Debitis repudiandae, alias eos distinctio
				neque odit quas veniam tempore!
				<svelte:fragment slot="bottom">Owner - 2023</svelte:fragment>
			</QouteSlide>
			<QouteSlide>
				<svelte:fragment slot="name">Albert Hofferman</svelte:fragment>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ratione repellendus. Dolorem,
				voluptas. Delectus iure pariatur inventore vitae rem ullam. Debitis repudiandae, alias eos distinctio
				neque odit quas veniam tempore!
				<svelte:fragment slot="bottom">Researcher - 2023</svelte:fragment>
			</QouteSlide>
			<QouteSlide>
				<svelte:fragment slot="name">John Doe</svelte:fragment>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ratione repellendus. Dolorem,
				voluptas. Delectus iure pariatur inventore vitae rem ullam. Debitis repudiandae, alias eos distinctio
				neque odit quas veniam tempore!
				<svelte:fragment slot="bottom">Worker - 2023</svelte:fragment>
			</QouteSlide>
		</Carousel>
	</Container>
	<Container bg="bg-tertiary-500">
		<svelte:fragment slot="title">Latest posts</svelte:fragment>
		{#each latestPosts as post}
			<PostCard href="/blog/{post.slug}">
				<img
					src={post.image}
					alt={post.title}
					slot="image"
					class="w-full h-full aspect-square object-cover object-center"
				/>
				<svelte:fragment slot="date">{post.date}</svelte:fragment>
				<svelte:fragment slot="title">{post.title}</svelte:fragment>
				<p>
					{post.excerpt}
				</p>
				<svelte:fragment slot="author">{post.author}</svelte:fragment>
			</PostCard>
		{/each}
	</Container>
</Page>
