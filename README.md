# Boilerplates Backends

A repository in which you will find different repetitions to be able to start projects quickly and reliably.

## Backends Availables

- [NestJS](#nestjs)

# Nestjs

Clone the project

```bash
  git clone https://github.com/vbullsey/boilerplate-backend
```

Go to the project directory

```bash
  cd boilerplate-backend
```

Go to Framework to use

```bash
  cd NestJS-Prisma-PSQL
```

Install dependencies

```bash
  npm install
```

Use .env.example like example and set your configuration

```bash
    DATABASE_URL=

    "postgresql://{username}:{password}@{hostname}:{host}/{dbname}?schema=public"

    POSTGRES_DB=
    POSTGRES_USER=
    POSTGRES_PASSWORD=
```

Set your configuration on docker-compose.yml and run the project

```bash
    npm run start:dev
```
