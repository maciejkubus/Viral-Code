<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Container from '$lib/components/Container.svelte';
	import Counter from '$lib/components/Counter.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ImageCards from '$lib/components/ImageCards.svelte';
	import ImageText from '$lib/components/ImageText.svelte';
	import Page from '$lib/components/Page.svelte';
	import Person from '$lib/components/Person.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import posts from '$lib/data/posts';
	import Link from '$lib/components/Link.svelte';
	import Animation from '$lib/components/Animation.svelte';
	import TextAnimation from '$lib/components/TextAnimation.svelte';

	const latestPosts = posts.slice(0, 3);
</script>

<Page>
	<PageHeader>
		<div class="flex flex-col gap-12 xl:w-2/3">
			<h1
				class="font-heading-token text-8xl xl:text-9xl font-extrablack text-secondary-500 -rotate-1"
			>
				<TextAnimation text="Viral Code" />
			</h1>
			<Animation
				container="w-full"
				from="translate-y-16 opacity-0"
				to="translate-y-0 opacity-100"
				inView={false}
				delay={3000}
			>
				<p class="font-heading-token text-6xl xl:text-8xl font-black text-tertiary-500">
					Best website building team.
				</p>
			</Animation>
			<div class="flex gap-4 xl:gap-10 flex-col xl:flex-row">
				<Animation
					from="translate-y-16 opacity-0"
					to="translate-y-0 opacity-100"
					delay={3400}
					inView={false}
				>
					<Link href="/about-us" container="btn variant-filled-primary btn-lg xl:btn-xl">
						Get to know us
					</Link>
				</Animation>
				<Animation
					from="translate-y-16 opacity-0"
					to="translate-y-0 opacity-100"
					delay={3600}
					inView={false}
				>
					<Link href="/contact" container="btn variant-filled-secondary btn-lg xl:btn-xl">
						Contact us
					</Link>
				</Animation>
			</div>
		</div>
		<div class="w-1/3 hidden xl:flex">
			<Animation
				container="w-full"
				from="scale-0"
				to="scale-100"
				duration="duration-500"
				delay={4000}
				inView={false}
			>
				<ImageCards images={['/pics/logo.png', '/pics/logo2.png']} href="#" />
			</Animation>
		</div>
	</PageHeader>
	<Container
		layout="flex flex-col xl:flex-row justify-center items-stretch gap-20 w-full"
		bg="bg-tertiary-500"
		paddingY="pb-32 pt-16"
	>
		<svelte:fragment slot="title">
			<Animation from="translate-y-16 opacity-0" to="translate-y-0 opacity-100" delay={100}>
				Who we are?
			</Animation>
		</svelte:fragment>
		<Animation
			from="translate-y-16 opacity-0 -rotate-12"
			to="translate-y-0 opacity-100 rotate-0"
			duration="duration-500"
			delay={300}
		>
			<Card href="/about-us">
				<svelte:fragment slot="subtitle">Website building</svelte:fragment>
				<svelte:fragment slot="title">Team</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil cupiditate
					blanditiis numquam temporibus quo vero veniam minima odit totam sunt magni nam, hic
					recusandae accusamus beatae sed tenetur. Inventore?
				</svelte:fragment>
			</Card>
		</Animation>
		<Animation
			from="translate-y-16 opacity-0 -rotate-12"
			to="translate-y-0 opacity-100 rotate-0"
			duration="duration-500"
			delay={600}
		>
			<Card variant="variant-filled-secondary" href="/about-us">
				<svelte:fragment slot="subtitle">Best graphic</svelte:fragment>
				<svelte:fragment slot="title">Projects</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil cupiditate
					blanditiis numquam temporibus quo vero veniam minima odit totam sunt magni nam, hic
					recusandae accusamus beatae sed tenetur. Inventore?
				</svelte:fragment>
			</Card>
		</Animation>
		<Animation
			from="translate-y-16 opacity-0 -rotate-12"
			to="translate-y-0 opacity-100 rotate-0"
			duration="duration-500"
			delay={900}
		>
			<Card variant="variant-filled-success" href="/about-us">
				<svelte:fragment slot="subtitle">Amazing programming</svelte:fragment>
				<svelte:fragment slot="title">Skills</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil cupiditate
					blanditiis numquam temporibus quo vero veniam minima odit totam sunt magni nam, hic
					recusandae accusamus beatae sed tenetur. Inventore?
				</svelte:fragment>
			</Card>
		</Animation>
	</Container>
	<Container>
		<div class="xl:w-1/2 flex flex-col gap-8">
			<h2 class="font-heading-token text-7xl">
				<Animation
					from="translate-y-16 opacity-0 -rotate-3"
					to="translate-y-0 opacity-100 rotate-0"
					duration="duration-500"
					delay={200}
				>
					Why us?
				</Animation>
			</h2>
			<p class="text-lg">
				<Animation
					from="translate-y-16 opacity-0 -rotate-3"
					to="translate-y-0 opacity-100 rotate-0"
					duration="duration-500"
					delay={400}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam quae debitis
					voluptatibus veniam? Eaque magnam minus porro ex sed id hic impedit sunt, quas ea qui
					totam natus voluptates!
				</Animation>
			</p>
			<Animation
				from="translate-y-16 opacity-0 -rotate-3"
				to="translate-y-0 opacity-100 rotate-0"
				duration="duration-500"
				delay={600}
			>
				<ul class="text-lg list-disc pl-6 space-y-4">
					<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
					<li>Lorem ipsum, dolor sit amet consectetur.</li>
					<li>Lorem ipsum, dolor sit amet adipisicing elit.</li>
					<li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
					<li>Lorem ipsum, dolor sit amet.</li>
					<li>Lorem ipsum, consectetur adipisicing elit.</li>
				</ul>
			</Animation>
		</div>
		<div class="xl:w-1/2">
			<Animation
				from="translate-y-16 scale-0 opacity-0 -rotate-12"
				to="translate-y-0 scale-100 opacity-100 rotate-0"
				duration="duration-500"
				delay={1000}
			>
				<ImageText text="7 years of experience" animationDelay={1200}>
					<img
						src="/pics/sex.jpg"
						alt="sex"
						class="group-hover:rotate-3 transition-all duration-500 ease-in-out"
					/>
				</ImageText>
			</Animation>
		</div>
	</Container>
	<Container bg="variant-filled-tertiary">
		<svelte:fragment slot="title">
			<Animation
				from="translate-y-16 scale-0 opacity-0 -rotate-12"
				to="translate-y-0 scale-100 opacity-100 rotate-0"
				duration="duration-500"
				delay={200}
			>
				We are strong together.
			</Animation>
		</svelte:fragment>
		<Animation
			from="translate-y-16 scale-0 opacity-0 -rotate-12"
			to="translate-y-0 scale-100 opacity-100 rotate-0"
			duration="duration-500"
			delay={200}
		>
			<Counter count={200}>Made websites</Counter>
		</Animation>
		<Animation
			from="translate-y-16 scale-0 opacity-0 -rotate-12"
			to="translate-y-0 scale-100 opacity-100 rotate-0"
			duration="duration-500"
			delay={400}
		>
			<Counter count={30}>Made shops</Counter>
		</Animation>
		<Animation
			from="translate-y-16 scale-0 opacity-0 -rotate-12"
			to="translate-y-0 scale-100 opacity-100 rotate-0"
			duration="duration-500"
			delay={600}
		>
			<Counter count={150}>Happy clients</Counter>
		</Animation>
		<Animation
			from="translate-y-16 scale-0 opacity-0 -rotate-12"
			to="translate-y-0 scale-100 opacity-100 rotate-0"
			duration="duration-500"
			delay={800}
		>
			<Counter count={333}>Personal achievments</Counter>
		</Animation>
	</Container>
	<Container
		bg="variant-filled-tertiary"
		paddingX="px-0"
		size="w-full"
		titlePadding="pb-32"
		paddingY="py-0"
	>
		<div class="w-full flex flex-row flex-wrap">
			{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] as num, index}
				<Animation
					container="w-1/2 xl:w-1/4"
					from="translate-y-16 opacity-0"
					to="translate-y-0 opacity-100"
					delay={(index % 4) * 100}
				>
					<Link
						href="/pics/amy/amy-{num}.jpg"
						target="_blank"
						container=" aspect-square flex overflow-hidden group"
					>
						<img
							src="/pics/amy/amy-{num}.jpg"
							alt="partner {num}"
							class="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-6 transition-all duration-200 ease-in-out"
						/>
					</Link>
				</Animation>
			{/each}
		</div>
	</Container>
	<Container>
		<svelte:fragment slot="title">
			<span class="text-white"> There is loud about us </span>
		</svelte:fragment>
	</Container>
	<Container bg="bg-tertiary-500">
		<svelte:fragment slot="title">
			<Animation
				from="translate-y-16 scale-0 opacity-0"
				to="translate-y-0 scale-100 opacity-100"
				duration="duration-500"
				delay={200}
			>
				Latest posts
			</Animation>
		</svelte:fragment>
		{#each latestPosts as post, index}
			<Animation
				from="translate-y-16 scale-0 opacity-0 -rotate-6"
				to="translate-y-0 scale-100 opacity-100 rotate-0"
				duration="duration-500"
				delay={300 * index}
			>
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
			</Animation>
		{/each}
	</Container>
	<Container size="w-full">
		<svelte:fragment slot="title">
			<span class="text-white">Our team</span>
		</svelte:fragment>
		<div class="w-full xl:w-1/5">
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
		<div class="w-full xl:w-1/5">
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
		<div class="w-full xl:w-1/5">
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
</Page>
