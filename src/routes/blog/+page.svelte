<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ImageCards from '$lib/components/ImageCards.svelte';
	import Page from '$lib/components/Page.svelte';
	import Container from '$lib/components/Container.svelte';
	import Card from '$lib/components/Card.svelte';
	import posts from '$lib/data/posts';
	import PostCard from '$lib/components/PostCard.svelte';
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
	<Container
		bg="bg-tertiary-500"
		layout="flex flex-col-reverse xl:flex-row justify-center gap-20 w-full"
	>
		<div class="xl:w-full grid grid-cols-1 xl:grid-cols-2 gap-20">
			{#each posts as post}
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
		</div>
		<div class="xl:w-1/4 text-black flex flex-col gap-4">
			<img
				src="/pics/logo.png"
				alt="logo"
				class="w-full aspect-square object-cover object-center border-8 border-secondary-500 rounded bg-white"
			/>
			<h3 class="font-heading-token text-4xl font-black">Viral Code</h3>
			<p class="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, enim!</p>
			<h3 class="font-heading-token text-3xl font-bold">Categories</h3>
			<ul class="text-2xl space-y-1">
				<li><a href="/blog" class="hover:text-primary-500">Education</a></li>
				<li><a href="/blog" class="hover:text-primary-500">Entartaiment</a></li>
				<li><a href="/blog" class="hover:text-primary-500">Fun</a></li>
				<li><a href="/blog" class="hover:text-primary-500">Galaxies</a></li>
				<li><a href="/blog" class="hover:text-primary-500">Video</a></li>
			</ul>
			<h3 class="font-heading-token text-3xl font-bold">Tags</h3>
			<div class="flex flex-wrap gap-4">
				{#each [{ name: 'Red', color: ' variant-filled-primary' }, { name: 'Blue', color: ' variant-filled-secondary' }, { name: 'Black', color: ' variant-filled-surface' }, { name: 'Green', color: ' variant-filled-success' }, { name: 'Error', color: ' variant-filled-error' }] as tag}
					<a
						class="text-2xl px-4 py-2 {tag.color} rounded hover:scale-110 hover:-rotate-2 transition-all duration-200 ease-in-out"
						href="/blog"
					>
						{tag.name}
					</a>
				{/each}
			</div>
		</div>
	</Container>
</Page>
