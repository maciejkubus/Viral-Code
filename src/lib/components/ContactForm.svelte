<script lang="ts">
	import InputControl from './InputControl.svelte';

	let email = '';
	let message = '';
	let rodo = false;
	let sent = false;

	const submit = () => {
		if (sent) return;

		sent = true;

		fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({
				email,
				message
			})
		});
	};
</script>

<form on:submit|preventDefault={submit} class="flex flex-col gap-8">
	<h3 class="font-heading-token text-6xl">Send a message</h3>
	<div class="flex flex-col gap-4">
		<InputControl>
			<span slot="label">E-mail</span>
			<input
				type="email"
				bind:value={email}
				placeholder="E-mail"
				class="w-full variant-filled-surface rounded border-0 outline-none"
				required
			/>
		</InputControl>
		<InputControl>
			<span slot="label">Message</span>
			<textarea
				class="w-full variant-filled-surface rounded border-0 outline-none"
				bind:value={message}
				placeholder="Message"
				rows="8"
				required
			/>
		</InputControl>
		<div class="flex items-center gap-4">
			<input type="checkbox" required bind:value={rodo} name="rodo" id="rodo" disabled={sent} />
			<label for="rodo">
				I accept
				<a href="/privacy-policy" class="hover:text-primary-500">privacy policy</a>.
			</label>
		</div>
		<div class="flex justify-end items-center h-16">
			{#if sent}
				<p class="text-lg">Message sent.</p>
			{:else}
				<button type="submit" class="btn btn-lg variant-filled-primary"> Send </button>
			{/if}
		</div>
	</div>
</form>
