# SvleteKit Vite Typescript SupaBase Unocss Primsa Starter

- ⚡️ SvleteKit, Vite, pnpm, esbuild
- 💯 Typescript
- 👷 Eslint + Prettier
- 🎨 [UnoCSS](https://github.com/unocss/unocss) - Tailwind/Windi CSS + CSS icons, webfonts + more
- 🏠 [Supabase](https://supabase.com/) DB via Prisma
- 🤵 [Supabase](https://supabase.com/) for Auth (magic link, email, oauth)

## Getting Started

- Use this template

```
npx degit kensleDev/svletekit-template-auth project-name
```

### Create Supabase Project

- Go to [Supabase](https://supabase.com/)
- Sign up for an account
- Create a new project, this will create a database

### Update URL config

- In Supabase go to -> Authentication
- Click on URL Configuration
- Change the Site URL and Redirect URL to your localhost port - default: http://localhost:5173

### Setup local project

- Install dependancies with `pnpm install`
- Create .env file - can copy .env_example

- Enter Supabase credentials to .env i.e.

```
DATABASE_URL="{supabase database connection string}"
PUBLIC_SUPABASE_URL="{project url - found on project page}"
PUBLIC_SUPABASE_ANON_KEY="{prject api key - found on project page}"
```

- Update Prisma schema and run migragte
- Run dev task

### Auth

Read the [Supabase Sveltekit docs](https://supabase.com/docs/guides/auth/auth-helpers/sveltekit) for more information on setup, protecting API routes, protecting actions and general info.

#### Protected routes

This repo doesn't come with any protected routes but it is setup to protect new routes that start with `dashboard`:

```
hooks.server.ts
...
	// protect requests to all routes that start with /dashboard
	if (event.url.pathname.startsWith('/dashboard')) {
		const session = await event.locals.getSession();
		if (!session) {
			// the user is not signed in
			throw redirect(303, '/');
		}
	}
...
```

#### OAuth

This repo is setup to use Email, Google, Discord and Github as auth providers.

By default only the google button will show, to enable Discord or Github uncomment the buttons in `src\routes\login\+page.svelte`

To remove an auth provider completly remove it from the array in `src\routes\login\+page.server.ts`

```
const OAUTH_PROVIDERS = ['google', 'discord', 'github'];
```

For a full walkthrough on how to setup OAuth providers see this [tutorial](https://www.youtube.com/watch?v=KfezTtt2GsA)

### Reading List

[Supabase Sveltekit Auth](https://supabase.com/docs/guides/auth/auth-helpers/sveltekit)

[UnoCSS](https://github.com/unocss/unocss)

### Add Extra Functionality

[Unit Testing](https://testing-library.com/docs/svelte-testing-library/setup/) - Vitest, Jest

[E2E Testing With Playwright](https://www.okupter.com/blog/e2e-testing-with-sveltekit-and-playwright)

[E2E Testing with Cypress](https://docs.cypress.io/guides/component-testing/svelte/quickstart)

## Credits

[SvelteKit Auth Tutorial](https://www.youtube.com/watch?v=KfezTtt2GsA)
[SvelteKit OAuth Tutorial](https://www.youtube.com/watch?v=KfezTtt2GsA)
[Vitesse](https://github.com/antfu/vitesse)

## TODO

- Generate DB definitions for end2end typescript with Supabase
