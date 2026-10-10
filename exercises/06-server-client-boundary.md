# Mission 06 — Server / Client Border Patrol

Add interactive completion to the exercise list while keeping the page server-rendered where possible.

## TODO

1. Move the completion toggle and `useState` into `components/completion-toggle.tsx`.
2. Mark only that component with `"use client"`.
3. Keep the list and exercise data in the page (a Server Component).
4. Pass only serializable props across the boundary.
5. Write a three-sentence explanation of the boundary in the README.

## Check yourself

- Why would marking `app/page.tsx` client-side be broader than necessary?
- Which props cannot cross from a Server Component into a Client Component?
- What happens to the initial HTML before JavaScript loads?
