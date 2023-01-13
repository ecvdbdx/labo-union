<<<<<<< HEAD
<<<<<<< HEAD
<script lang="ts">
	import type { ActionData } from './$types';
<<<<<<< HEAD
	import { enhance } from '$app/forms';

	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';

	export let form: ActionData;
</script>

<div class="container sign-up">
	<form method="POST" use:enhance>
		<Input
			value={form?.email ?? ''}
			name="email"
			type="email"
			required
			placeholder="john.doe@mail-ecv.com"
			error={form?.email_error}>Email*</Input
		>
		<Input
			value={form?.password ?? ''}
			name="password"
			required
			type="password"
			error={form?.password_error}>Mot de passe*</Input
		>
		<Input
			value={''}
			name="confirmedPassword"
			type="password"
			required
			error={form?.confirmedPassword_error}>Confirmer votre mot de passe*</Input
		>
=======
<script>
	import Input from '../../lib/components/forms/Input.svelte';
	import Button from '../../lib/components/Button.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';
=======
<script lang="ts">
	import type { ActionData } from './$types';
>>>>>>> 8f79a83 (feat: handle signup form errors (wip))

=======
>>>>>>> c8a9396 (feat: externalise form validators and check email)
	import { enhance } from '$app/forms';

	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';
	import Link from '$lib/components/Link.svelte';

	export let form: ActionData;
</script>

<div class="container sign-up">
	<Link href="/">Retour</Link>

	<form method="POST" use:enhance>
		<Input
			value={form?.email ?? ''}
			name="email"
			type="email"
			required
			placeholder="john.doe@mail-ecv.com"
			error={form?.email_error}>Email</Input
		>
		<Input
			value={form?.password ?? ''}
			name="password"
			required
			type="password"
			error={form?.password_error}>Mot de passe</Input
		>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
		<Input value="" name="password" type="password" placeholder="">Mot de passe</Input>
>>>>>>> 2a5a1f6 (feat: init supabase auth)
=======
		<Input value="" name="password" type="password" error={passwordError}>Mot de passe</Input>
>>>>>>> 8f79a83 (feat: handle signup form errors (wip))
=======
>>>>>>> 53f712a (feat: handle form error and email / password validation)
=======
		<Input value={''} name="confirmedPassword" type="password" error={form?.confirmedPassword_error}
			>Confirmer votre mot de passe</Input
=======
		<Input
			value={''}
			name="confirmedPassword"
			type="password"
			required
			error={form?.confirmedPassword_error}>Confirmer votre mot de passe</Input
>>>>>>> 44c6eae (feat: add required attribute to input)
		>
>>>>>>> c8a9396 (feat: externalise form validators and check email)
		<Checkbox
			name="termAndConditions"
			reverse
			label="J’accepte les Conditions d’utilisation et la Politique de confidentialité"
			value={false}
		/>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
		{#if form?.termAndConditions_error}
			<p class="error">{form?.termAndConditions_error}</p>
		{/if}

		<Button>Créer un compte</Button>

		{#if form?.success}
			<p class="success">Votre compte a bien été créé !</p>
		{/if}
<<<<<<< HEAD
	</form>
</div>

<style lang="sass">

	.sign-up
		margin-top: 5vh
		width: 100%

		form
			margin-top: 1rem
		
		.error
			color: $error
		
		.success
			color: $success

</style>
=======
		<Button>Créer un compte</Button>
	</form>
</div>
>>>>>>> 2a5a1f6 (feat: init supabase auth)
=======
		{#if form?.termAndConditions}
			<p class="error">{termAndConditionsError}</p>
=======
		{#if form?.termAndConditions_error}
			<p class="error">{form?.termAndConditions_error}</p>
>>>>>>> 53f712a (feat: handle form error and email / password validation)
		{/if}

		<Button>Créer un compte</Button>
=======
>>>>>>> c206b2d (feat: add success message)
	</form>
</div>

<style lang="sass">

	.sign-up
		margin-top: 5vh

		form
			margin-top: 1rem
		
		.error
			color: $error
		
		.success
			color: $success

</style>
>>>>>>> 8f79a83 (feat: handle signup form errors (wip))
