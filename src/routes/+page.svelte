<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import WelcomeUser from '$lib/auth/WelcomeUser.svelte';
	import { supabaseClient } from '$lib/auth/supabase';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main>
	<h1>SvelteKit & Supabase Auth</h1>
	<WelcomeUser {data} />
</main>
