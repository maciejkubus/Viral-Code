<script lang="ts">
	import '../theme/app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import '@splidejs/svelte-splide/css';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import posts from '$lib/data/posts';
	import Link from '$lib/components/Link.svelte';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const latestPosts = posts.slice(0, 3);
</script>

<AppShell slotFooter="w-full">
	<svelte:fragment slot="header">
		<Header
			menuItems={[
				{ href: '/', title: 'Home' },
				{ href: '/offer', title: 'Offer' },
				{ href: '/portfolio', title: 'Portfolio' },
				{ href: '/blog', title: 'Blog' },
				{ href: '/about-us', title: 'About us' },
				{ href: '/contact', title: 'Contact' }
			]}
		>
			<Link href="/" slot="title">
				<h1 class="font-heading-token text-4xl font-extrablack">Viral Code</h1>
			</Link>
			<div class="flex gap-4 text-xl" slot="socials">
				<Link
					href="https://www.facebook.com/maciek.kubus.7/"
					target="_blank"
					container="hover:scale-110 hover:-rotate-2"
				>
					<i class="fab fa-facebook-square" />
				</Link>
				<Link
					href="https://www.instagram.com/maciekkubus/"
					target="_blank"
					container="hover:scale-110 hover:-rotate-2"
				>
					<i class="fab fa-instagram" />
				</Link>
				<Link
					href="https://github.com/maciejkubus/"
					target="_blank"
					container="hover:scale-110 hover:-rotate-2"
				>
					<i class="fab fa-github" />
				</Link>
			</div>
		</Header>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<Footer>
			<div slot="col-1" class="space-y-4">
				<h2 class="font-heading-token text-4xl font-black">Viral Code</h2>
				<p class="text-xl">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, minus?
				</p>
				<div class="flex gap-4 text-xl">
					<Link
						href="https://www.facebook.com/maciek.kubus.7/"
						target="_blank"
						container="hover:scale-110 hover:-rotate-2"
					>
						<i class="fab fa-facebook-square" />
					</Link>
					<Link
						href="https://www.instagram.com/maciekkubus/"
						target="_blank"
						container="hover:scale-110 hover:-rotate-2"
					>
						<i class="fab fa-instagram" />
					</Link>
					<Link
						href="https://github.com/maciejkubus/"
						target="_blank"
						container="hover:scale-110 hover:-rotate-2"
					>
						<i class="fab fa-github" />
					</Link>
				</div>
			</div>
			<div slot="col-2" class="text-xl flex flex-col gap-2">
				<h3 class="text-3xl font-heading-token font-bold pb-2">Location</h3>
				<p>
					Mokra 21,<br />
					95-020 Janówka
				</p>
				<p>
					Lniana 2 m. 21,<br />
					91-158 Łódź
				</p>
			</div>
			<div slot="col-3" class="text-xl flex flex-col gap-2">
				<h3 class="text-3xl font-heading-token font-bold pb-2">Links</h3>
				<Link href="/contact">Kontakt</Link>
				<Link href="/offer">Oferta</Link>
				<Link href="/portfolio">Portfolio</Link>
				<Link href="/privacy-policy">Privacy Policy</Link>
			</div>
			<div slot="col-4" class="text-xl flex flex-col gap-2">
				<h3 class="text-3xl font-heading-token font-bold pb-2">Posts</h3>
				{#each latestPosts as post}
					<Link href="/blog/{post.slug}">{post.title}</Link>
				{/each}
			</div>

			<div slot="bottom">Copyright (c) Maciej Kubus 2023</div>
		</Footer>
	</svelte:fragment>
</AppShell>
