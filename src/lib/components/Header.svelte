<script lang="ts">
	import type { IMenuItem } from '$lib/interfacess/menu-item.interface';
	import Link from './Link.svelte';
	import Animation from '$lib/components/Animation.svelte';

	export let menuItems: IMenuItem[] = [];

	let open = false;

	const show = () => {
		open = true;
	};

	const hide = () => {
		open = false;
	};
</script>

{#if !open}
	<button
		class="flex xl:hidden justify-center items-center fixed z-50 right-8 top-8 text-3xl p-4 variant-filled-secondary w-16 h-16 rounded text-center shadow-xl"
		on:click={show}
	>
		<i class="fas fa-bars" />
	</button>
{/if}

<Animation
	container="w-full fixed z-50 variant-filled-secondary py-4 shadow-lg inset-0 xl:inset-auto {open
		? 'flex'
		: 'hidden'} xl:flex"
	from="xl:-translate-y-16 xl:opacity-0"
	to="translate-y-0 opacity-100"
	delay={4600}
	inView={false}
>
	<div
		class="w-full xl:w-site mx-auto px-2 pt-8 xl:pt-0 pb-16 xl:pb-0 min-h-screen xl:min-h-0 flex flex-col xl:flex-row justify-between items-center"
	>
		{#if open}
			<button class="w-full flex justify-end xl:hidden text-3xl pr-20" on:click={hide}>
				<i class="fas fa-times" />
			</button>
		{/if}
		<div class="">
			<slot name="title" />
		</div>
		<div class="flex gap-8 xl:gap-4 text-4xl xl:text-xl flex-col xl:flex-row text-center">
			{#each menuItems as menuItem}
				<Link
					href={menuItem.href}
					target={menuItem.target ? menuItem.target : '_self'}
					on:click={hide}
				>
					{menuItem.title}
				</Link>
			{/each}
		</div>
		<div>
			<slot name="socials" />
		</div>
	</div>
</Animation>
