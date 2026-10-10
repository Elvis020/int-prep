# Mission 05 — Route Runner

Create a dynamic route for an exercise detail page.

## Target

`app/exercises/[id]/page.tsx`

## TODO

1. Import `exercises` from `lib/exercises.ts`.
2. Read the dynamic `id` parameter.
3. Find the matching exercise.
4. Call Next.js `notFound()` for an unknown ID.
5. Create `app/exercises/[id]/loading.tsx` with a useful loading message.

## Check yourself

- Does `/exercises/01` work?
- Does `/exercises/999` show a not-found response?
- Can you explain why the parameter is a string?
