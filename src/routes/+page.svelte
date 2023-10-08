<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Container from '$lib/components/Container.svelte';
	import Counter from '$lib/components/Counter.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ImageCards from '$lib/components/ImageCards.svelte';
	import ImageText from '$lib/components/ImageText.svelte';
	import Page from '$lib/components/Page.svelte';
	import Person from '$lib/components/Person.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import QouteSlide from '$lib/components/QouteSlide.svelte';
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
	</PageHeader>
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
	<Container>
		<div class="xl:w-1/2 flex flex-col gap-8">
			<h2 class="font-heading-token text-7xl">Why us?</h2>
			<p class="text-lg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam quae debitis
				voluptatibus veniam? Eaque magnam minus porro ex sed id hic impedit sunt, quas ea qui totam
				natus voluptates!
			</p>
			<ul class="text-lg list-disc pl-6 space-y-4">
				<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
				<li>Lorem ipsum, dolor sit amet consectetur.</li>
				<li>Lorem ipsum, dolor sit amet adipisicing elit.</li>
				<li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
				<li>Lorem ipsum, dolor sit amet.</li>
				<li>Lorem ipsum, consectetur adipisicing elit.</li>
			</ul>
		</div>
		<div class="xl:w-1/2">
			<ImageText text="7 years of experience">
				<img
					src="/pics/sex.jpg"
					alt="sex"
					class="group-hover:rotate-3 transition-all duration-500 ease-in-out"
				/>
			</ImageText>
		</div>
	</Container>
	<Container bg="variant-filled-tertiary">
		<svelte:fragment slot="title">We are strong together.</svelte:fragment>
		<Counter count={200}>Made websites</Counter>
		<Counter count={30}>Made shops</Counter>
		<Counter count={150}>Happy clients</Counter>
		<Counter count={333}>Personal achievments</Counter>
	</Container>
	<Container
		bg="variant-filled-tertiary"
		paddingX="px-0"
		size="w-full"
		titlePadding="pb-32"
		paddingY="py-0"
	>
		<svelte:fragment slot="title">
			<div class="px-16 xl:px-2">They trusted us:</div>
		</svelte:fragment>
		<div class="w-full flex flex-row flex-wrap">
			{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] as num}
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
		<svelte:fragment slot="title">
			<span class="text-white"> There is loud about us </span>
		</svelte:fragment>
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
		<PostCard href="/pics/amy/amy-1.jpg">
			<img
				src="/pics/amy/amy-1.jpg"
				alt="Amy 1"
				slot="image"
				class="w-full h-full aspect-square object-cover object-center"
			/>
			<svelte:fragment slot="date">4 Jun</svelte:fragment>
			<svelte:fragment slot="title">How to choose colors?</svelte:fragment>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, dolorum nulla quam
				dolor ipsam ducimus. Mollitia molestiae voluptas vel labore?
			</p>
			<svelte:fragment slot="author">Maciej Kubus</svelte:fragment>
		</PostCard>
		<PostCard href="/pics/amy/amy-2.jpg">
			<img
				src="/pics/amy/amy-2.jpg"
				alt="Amy 2"
				slot="image"
				class="w-full h-full aspect-square object-cover object-center"
			/>
			<svelte:fragment slot="date">14 Jun</svelte:fragment>
			<svelte:fragment slot="title">Why you should use svelte?</svelte:fragment>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, dolorum nulla quam
				dolor ipsam ducimus. Mollitia molestiae voluptas vel labore?
			</p>
			<svelte:fragment slot="author">Maciej Kubus</svelte:fragment>
		</PostCard>
		<PostCard href="/pics/amy/amy-3.jpg">
			<img
				src="/pics/amy/amy-3.jpg"
				alt="Amy 3"
				slot="image"
				class="w-full h-full aspect-square object-cover object-center"
			/>
			<svelte:fragment slot="date">5 May</svelte:fragment>
			<svelte:fragment slot="title">Abstract precisions is needed.</svelte:fragment>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, dolorum nulla quam
				dolor ipsam ducimus. Mollitia molestiae voluptas vel labore?
			</p>
			<svelte:fragment slot="author">Maciej Kubus</svelte:fragment>
		</PostCard>
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
</Page>
