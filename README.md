This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Data storage based on PostgreSQL, and opearates with drizzle. For usage DB without installing and configuring on local machine - use the docker. In the root of the project defined file docker-compose.yml. \
For starting db instance run the command:
`docker-compose up -d` \
Stop the db with command:
`docker-compose down` \
If DB url after starting the db instance different the configured in the files - update the env. variable value with your url.
**Stop and remove all data (fresh start):**

```bash
docker-compose down -v
```

For drizzle needs settings for db seed and connection, for manual setting env variable
run the command: export DATABASE_URL="URL_GET_AFTER_COMMAND_DOCKER-COMPOSE"

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Development Workflow

When making changes to the database schema (`src/lib/db/schema.ts`):

1. **Update the schema file** with your changes

# When you change schema.ts:

`npm run db:push` # Applies changes directly 2. **Push changes to database:**

```bash
npm run db:push
```

3. **Restart your dev server** to see changes

### Viewing Database Data

To browse and edit data with a visual interface:

```bash
npm run db:studio
```
