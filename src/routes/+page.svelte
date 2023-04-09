<script lang="ts">
	import WelcomeUser from '$lib/auth/WelcomeUser.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main>
	<h1>SvelteKit & Supabase Auth</h1>
	<WelcomeUser {data} />
</main>
