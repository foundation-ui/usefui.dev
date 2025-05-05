# Foundation UI - Engine

Visit [@fui/engine](https://foundation-ui.netlify.app/).

## Technologies

- [Next.js](https://nextjs.org)
- [Drizzle](https://orm.drizzle.team)

## Learn More

## Contribute

## CI/CD

Handled by Netlify for now

## TODO

- [x] Add Editor
- [x] Add Lib Details folder and boilerplate components
- [x] Add CI (Netlify)
- [x] Set up database with SingleStore and data model
- [x] Update Schema to show library and JSON files
- [x] Manually insert samples
- [x] Render samples in the UI
- [x] Deploy to confirm the setup is up and running
- [x] Update Navigation Links
- [x] Cleanup Database and data fetching patterns
- [x] Generate Library
- [x] Library Page Details
- [x] Library CRUD Actions
- [x] Add Auth using Clerk
- [x] Restrict usage for non-auth users
- [x] General tidying-up

- [ ] Add Analytics
- [ ] Add Homepage
- [ ] Add Testing suites Github Actions to trigger it

## Notes

### (31/02/2025)

- Might be a good idea to explore how the same implementation could be done using another provider.
  S2 handles a lot of thing but it looks like the machinery is too big for what FUI_ENGINES project requires.

### (01/03/2025)

- Lot of features indeed, lots and rabbit holes also. Don't like that a lot but i'm going to roll with it for now.
  Let's follow that rule: If there are further more obstacles due to S2 itself, i'll switch provider.

### (08/03/2025)

- This choice of db provider still bugs me, not that the service isn't good or anything.
- Here are the providers i'm thinking about, ranked by preference: Vercel PG, Scaleway Dedibox, NextCloud, AWS RDS, Keep S2

### (22/04/2025)

- Going to move the infra to Supabase, it's open source and the free tier is quite generous, it also has a file storage feature and since i do not want to multiply third party services for this kind of stuff. I'll also take a look at NextCloud solutions in the future.
- As said in previous notes, S2 will stay until the end of the dev process. If it happen to be a mistake, i'll learn some stuff along the way.
