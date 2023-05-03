<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	import { modal } from '$lib/stores/modal';
	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<form
	method="POST"
	action="?/createPortfolio"
	use:enhance={() => {
		modal.set(null);
	}}
>
	<Input name="title" type="text" required placeholder="Nom de votre projet">
		Donnez lui un nom
	</Input>

	<input name="thumbnail" type="file" accept=".jpg, .png, .jpeg, .webp" />

	<Input name="category" type="text" required placeholder="Ajoutez une description">
		Ajoutez une category
	</Input>

	<Input
		name="link"
		type="text"
		required
		placeholder="Lien de votre projet Behance, Github, Dribble etc..."
	>
		Ajoutez un lien
	</Input>

	<Button>Ajouter</Button>
</form>

{#if $page.form?.error}
	<div class="error">{$page.form.error}</div>
{/if}
