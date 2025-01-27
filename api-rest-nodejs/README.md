# API REST NodeJS

## 1. App Structure

### Introduction

### Knowning [Fastify](https://fastify.dev/)

### Understanding the [Typescript](https://www.typescriptlang.org/)

Create the pagckage.json:

```sh
npm init -y
```

Install the Typescript development dependencies:

```sh
npm i -D typescript
```

Create the tsconfig.json:

```sh
npx tsc --init
# same as ./node_modules/.bin/tsc --init
```

Convert the code from Javascript to Typescript:

```sh
npx tsc src/index.ts
```

Run the converted Javascript code with Node:

```sh
node src/index.js
```

### Creating the App

Install the dependencies:

```sh
npm i fastify
npm i -D @types/node
```

Convert the code from Javascript to Typescript:

```sh
npx tsc src/server.ts
```

Run the converted Javascript code with Node:

```sh
node src/server.js
```

Test HTTP from browser or from [HTTPie](https://httpie.io/):

```sh
brew install httpie
```

Automate the conversion from .js to .ts and the run:

```sh
npm i -D tsx
```

Run the tsx instead of tsc (ONLY for Development):

```sh
npx tsx src/server.ts
```

Show the run expended time:

```sh
time tsx src/server.ts
# vs
npx tsc src/server.ts
time node src/server.js
```

Save this command "tsx src/server.ts" as a "dev" script and run with the shortcut:

```sh
npm run dev
```

### ESLint Config

Install the dependencies:

```sh
npm i -D eslint @rocketseat/eslint-config
```

Create the ".eslintrc.json" file:

```sh
touch .eslintrc.json
```

Install the VS Code extension:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Open the Preferences: Open User Settings (JSON) with CTRL+Shift+P.

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

## 2. Database

### Database Access Strategy

- SQL x No SQL:
  - [x] SQL
  - [ ] No SQL (Mongo, Redis)
- Database:
  - [x] SQLite3
  - [ ] MySQL / MariaDB
  - [ ] MySQL2
  - [ ] PostgreSQL
  - [ ] PG Native
  - [ ] CockroachDB
  - [ ] Amazon Redshift
  - [ ] OracleDB
  - [ ] MSSQL
- Connection type:
  - [ ] Native Drivers ([mysql2](https://github.com/sidorares/node-mysql2/))
  - [x] Query Builders ([Knex.js](https://knexjs.org/))
  - [ ] ORM ([Prisma](https://www.prisma.io/), [Drizzle](https://orm.drizzle.team/))

### Knex Settings

Install the dependencies:

```sh
npm i knex
npm i sqlite3 -D
```

### Create the First Migration

```sh
npm run knex -- migrate:make create-documents
```

### Create the Transactions Table

Apply the migrations:

```sh
npm run knex -- migrate:latest
```

Undo the last migration:

```sh
npm run knex -- migrate:rollback
```

Create a migration:

```sh
npm run knex -- migrate:make add-session-id-to-transactions
```

### Run Query with Knex

### Environment Variables

Install the VS Code extension:

- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

Install the dependencies:

```sh
npm i dotenv
```

### Handle Environment Variables with Zod

- alternatives to [Zod](https://zod.dev/), [Joi](https://joi.dev/), [Yup](https://github.com/jquense/yup)

Install the dependencies:

```sh
npm i zod
```

## 3. Creating the Routes

### App Requirements

#### FR - Functional Requirements

- [x] The user must be able to create a new transaction;
- [x] The user must be able to view his account summary;
- [x] The user must be able to list all the past transactions;
- [x] The user must be able to view an unique transaction;

#### BR - Business Rules

- [x] The transactions can be from the credit type that will add to the total or debit type that will subtract from total;
- [x] Must be able to identify the user from the requisitions;
- [x] The user must be able to view only the transactions that he created;

#### NFR - Non Functional Requirements

- [ ] TBD

### Fastify Plugins

- Separate the routes in other files.

### Create Transactions

### Knex Types

### Listing Transactions

### Transactions Summary

### Using Cookies in Fastify

Install the dependencies:

```sh
npm i @fastify/cookie
```

### Cookie Existence Validation

### Global Hook Setup

## 4. Automated Tests

### Understanding Automated Tests

### Create the first test

- [ ] [Jest](https://jestjs.io/)
- [x] [Vitest](https://vitest.dev/)

Install the dependencies:

```sh
npm i vitest -D
```

Run the tests:

```sh
npx vitest
```

### Testing the Transaction Creation

Install the dependencies:

```sh
npm i supertest -D
npm i -D @types/supertest
```

### Categorizing the Tests

### Testing the Transactions Listing

### Config the Tests database

### Finishing the App Tests

## 5. Preparing the App to deploy

### Preparing to deploy

Build the project:

```sh
npx tsc
```

Install the tsup:

```sh
npm i tsup -D
```

Build with tsup:

```sh
tsup src
# or
tsup src --out-dir build
```

Run the built server:

```sh
node build/server.js
```

Github CLI:

```sh
gh auth
git init
git add .
git commit -m "Initial commit"
gh repo create
gh repo view -w
```

### App deploy at Render

- [Render.com](https://render.com/)
- [Fly.io](https://fly.io/)
- [Railway](https://railway.app/)

Install the Postgres dependencies:

```sh
npm i pg
```

Build command for Render.com:

```sh
npm i && npm run knex --migrate:latest && npm run build
```
