# SvleteKit Vite Typescript SupaBase Unocss Primsa Starter

This template should get you up and running with a web app that allows users to login either via email, magic link or Oauth provider

- ⚡️ SvleteKit, Vite, pnpm, esbuild
- 💯 Typescript
- 👷 Eslint + Prettier
- 🎨 [UnoCSS](https://github.com/unocss/unocss) - Tailwind/Windi CSS + CSS icons, webfonts + more
- 🏠 [Supabase](https://supabase.com/) DB via Prisma
- 🤵 [Supabase](https://supabase.com/) for Auth

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

### Add Extra Functionality

[Unit Testing](https://testing-library.com/docs/svelte-testing-library/setup/) - Vitest, Jest

[E2E Testing With Playwright](https://www.okupter.com/blog/e2e-testing-with-sveltekit-and-playwright)

[E2E Testing with Cypress](https://docs.cypress.io/guides/component-testing/svelte/quickstart)

## Credits

[SvelteKit Auth Tutorial](https://www.youtube.com/watch?v=KfezTtt2GsA)
[Vitesse](https://github.com/antfu/vitesse)

## TODO

- Generate DB definitions for end2end typescript with Supabase
-
