# Project: Annuaire

The yearbook project for students of ECV Digital 2022-2023.

Early stage.

## Install

Copy the file `.env.template` and rename it in `.env`.
Get the Supabase API URL of the project and replace the variable `PUBLIC_SUPABASE_URL`.
Get the project API key on Supabase and replace the variable `PUBLIC_SUPABASE_ANON_KEY`.
Go to someone who knows the project to get these informations.

## Developing

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

