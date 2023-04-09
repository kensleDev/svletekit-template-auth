import { AuthApiError, type Provider } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

const OAUTH_PROVIDERS = ['google', 'discord', 'github'];

export const actions: Actions = {
	login: async ({ request, locals, url }) => {
		const provider = url.searchParams.get('provider') as Provider;

		if (provider) {
			if (!OAUTH_PROVIDERS.includes(provider)) {
				return fail(400, {
					error: 'Provider not supported.'
				});
			}
			const oauthRes = await locals.supabase.auth.signInWithOAuth({
				provider
			});

			if (oauthRes.error) {
				console.log(oauthRes.error);
				return fail(400, {
					message: 'Something went wrong.'
				});
			}

			console.log({ data: oauthRes.data });

			throw redirect(303, oauthRes.data.url);
		}

		const body = Object.fromEntries(await request.formData());

		if (body) {
			const { data, error: err } = await locals.supabase.auth.signInWithPassword({
				email: body.email as string,
				password: body.password as string
			});

			if (err) {
				if (err instanceof AuthApiError && err.status === 400) {
					return fail(400, {
						error: 'Invalid credentials'
					});
				}
				return fail(500, {
					message: 'Server error. Try again later.'
				});
			}

			throw redirect(303, '/');
		}
	}
};

// import { AuthApiError, type Provider } from '@supabase/supabase-js';
// import { fail, redirect } from '@sveltejs/kit';
// import type { Actions } from './$types';

// export const actions: Actions = {
// 	login: async ({ request, locals, url }) => {
// 		const provider = url.searchParams.get('provider') as Provider;

// 		if (provider) {
// 			const { data, error: err } = await locals.supabase.auth.signInWithOAuth({ provider });

// 			if (err) {
// 				console.log({ err });
// 				return fail(500, {
// 					message: 'Server error. Try again later.'
// 				});
// 			}

// 			throw redirect(303, data.url);
// 		}

// 		console.log('in here');
// 		const body = Object.fromEntries(await request.formData());

// 		const { data, error: err } = await locals.supabase.auth.signInWithPassword({
// 			email: body.email as string,
// 			password: body.password as string
// 		});

// 		if (err) {
// 			if (err instanceof AuthApiError && err.status === 400) {
// 				return fail(400, {
// 					error: 'Invalid credentials'
// 				});
// 			}
// 			return fail(500, {
// 				message: 'Server error. Try again later.'
// 			});
// 		}

// 		throw redirect(303, '/');
// 	}
// };
