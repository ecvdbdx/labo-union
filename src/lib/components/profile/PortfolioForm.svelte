<script lang="ts">
	import { enhance } from '$app/forms';

	import Input from '$lib/components/forms/Input.svelte';
</script>

<form method="POST" action="?/createPortfolio" use:enhance>
	<Input name="name" type="text" required placeholder="Nom de votre projet">
		Donnez lui un nom
	</Input>

	<Input name="description" type="textarea" required placeholder="Ajoutez une description">
		Ajoutez une description
	</Input>

	<Input
		name="link"
		type="text"
		required
		placeholder="Lien de votre projet Behance, Github, Dribble etc..."
	>
		Ajoutez un lien
	</Input>
</form>
