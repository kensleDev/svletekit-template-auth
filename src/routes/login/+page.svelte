<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import type { Provider } from '@supabase/supabase-js';

	export let data;

	const submitSocialLogin: SubmitFunction = async ({ action, cancel }) => {
		const provider = action.searchParams.get('provider') as Provider;

		if (provider) {
			const res = await data.supabase.auth.signInWithOAuth({
				provider: provider
			});

			console.log({ res });
			cancel();
		}
	};
</script>

<main>
	<h1>Login</h1>
	<form action="?/login" method="POST" class="auth-form">
		<label for=""> Email </label>
		<input type="text" name="email" />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button type="submit" class="btn btn-primary">Login</button>
	</form>

	<form class="socials" method="POST" use:enhance={submitSocialLogin}>
		<!-- <button formaction="?/login&provider=github" class="btn btn-ghost">Github</button>
		<button formaction="?/login&provider=discord" class="btn btn-ghost">Discord</button> -->
		<button formaction="?/login&provider=google" class="btn">Google</button>
	</form>
</main>
