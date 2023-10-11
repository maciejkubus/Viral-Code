<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ImageCards from '$lib/components/ImageCards.svelte';
	import Page from '$lib/components/Page.svelte';
	import Container from '$lib/components/Container.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<Page>
	<PageHeader>
		<div class="flex flex-col gap-12 xl:w-2/3">
			<h1
				class="font-heading-token text-8xl xl:text-9xl font-extrablack text-secondary-500 -rotate-1"
			>
				Viral Code
			</h1>
			<p class="font-heading-token text-6xl xl:text-8xl font-black text-tertiary-500">Contact</p>
		</div>
		<div class="w-1/3 hidden xl:flex">
			<ImageCards images={['/pics/logo.png', '/pics/logo2.png']} href="#" />
		</div>
	</PageHeader>
	<Container
		layout="flex flex-col xl:flex-row justify-center gap-20 w-full"
		bg="variant-filled-tertiary"
	>
		<div class="w-full xl:w-1/2 flex flex-col gap-8 text-xl">
			<h3 class="font-heading-token text-6xl">Connect with us</h3>
			<p class="">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quas magni sequi beatae,
				voluptatibus nostrum! Quidem consectetur quo delectus quod.
			</p>
			<a href="tel:+48570277237" class="flex gap-4 items-center hover:text-primary-500">
				<i class="fas fa-phone-alt" />
				<div>+48 570 277 237</div>
			</a>
			<a href="mailto:maciekkubus@gmail.com" class="flex gap-4 items-center hover:text-primary-500">
				<i class="fas fa-envelope" />
				<div>maciekkubus@gmail.com</div>
			</a>
			<a
				href="https://maps.app.goo.gl/7J9CBX6zMiTXj9Ug9"
				class="flex gap-4 items-center hover:text-primary-500"
			>
				<i class="fas fa-map-marker-alt" />
				<div>Janówka, Mokra 21</div>
			</a>
		</div>
		<div class="w-full xl:w-1/2">
			<ContactForm />
		</div>
	</Container>
	<Container paddingX="" paddingY="" size="w-full">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.9847489135386!2d19.688092500000003!3d51.733314299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bd2d04c795269%3A0x9752a12c312bb790!2sMokra%2021%2C%2095-020%20Jan%C3%B3wka!5e0!3m2!1sen!2spl!4v1696860849919!5m2!1sen!2spl"
			class="w-full"
			height="450"
			style="border:0;"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="map"
		/>
	</Container>
</Page>
