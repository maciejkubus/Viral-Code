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
				Privacy Policy
			</p>
		</div>
		<div class="w-1/3 hidden xl:flex">
			<ImageCards images={['/pics/logo.png', '/pics/logo2.png']} href="#" />
		</div>
	</PageHeader>
	<Container>
		<div class="space-y-4 text-xl">
			{#each [1, 2, 3, 4, 5, 6] as num}
				<h3 class="font-heading-token text-6xl">{num}. Lorem Ipsum</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita placeat vero accusantium
					ullam harum deleniti quidem, id fugiat porro inventore totam? Modi molestiae at error
					culpa fugit et explicabo, numquam aliquid tempora placeat maiores ducimus veniam nam
					aliquam? Repellendus, nisi!
				</p>
				<p class="mb-20">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae officia repudiandae
					sapiente culpa natus. Iusto quisquam cupiditate suscipit, sit mollitia nisi ad optio
					doloremque, quae quibusdam animi tempore molestiae? Neque modi est dolorem, debitis unde
					asperiores aperiam temporibus commodi voluptatum vitae laborum iste quae praesentium optio
					mollitia deserunt adipisci eum dicta aliquid consequatur odit explicabo voluptas sit?
					Iure, cum blanditiis.
				</p>
			{/each}
		</div>
	</Container>
</Page>
