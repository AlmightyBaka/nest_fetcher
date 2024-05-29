## Description

A [Nest](https://github.com/nestjs/nest) app that fetches resources from an URL every 5 minutes and saves them to PostgreSQL.

## Environment variables

`PORT` - port to run the app on (defaults to 3000)

`FETCH_URL` - URL to fetch data from

`DATABASE_URL` - URL to PostgreSQL database instance

## Docker

```bash
docker compose up
```

Or, to run locally:

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Assumptions

- Timezones are not being handled
- Tests are for the weak (шутка, тесты важны)
- No app or deploy hardening
