This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

For drizzle needs settings for db seed and connection, for manual setting env variable
run the command: export DATABASE_URL="URL_GET_AFTER_COMMAND_DOCKER-COMPOSE"

Data storage based on PostgreSQL, and opeares with drizzle. For usage DB without installing and configuring on local machine - use the docker. In the root of the project defined file docker-compose.yml. \
For starting db instance run the command:
`docker-compose up -d` \
Stop the db with command:
`docker-compose down` \
If DB url after starting the db instance different the configured in the files - update the env. variable value with your url.
