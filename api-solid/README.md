# App

GymPass style app.

## 1. Project Structure

### Introduction

### Requirements and Rules Definitions

#### FRs (Functional Requirements)

- [ ] Must be possible to register;
- [ ] Must be possible to authenticate;
- [ ] Must be possible to get a logged user profile;
- [ ] Must be possible to get number of check-ins done by the user;
- [ ] Must be possible to get the user check-ins history;
- [ ] Must be possible to search for near by gyms;
- [ ] Must be possible to search for gyms by name;
- [ ] Must be possible to do a user check-in in a gyms;
- [ ] Must be possible to validate a user check-in;
- [ ] Must be possible to register a gym;

#### BRs (Business Rules)

- [ ] The user must not be able to register with a duplicated e-mail;
- [ ] The user must not be able to do 2 or more check-ins in the same day;
- [ ] The user must not be able to do check-in with he/she is not (100m) or less from the gym;
- [ ] The check-in can only be validated by admins;
- [ ] The gym must be registered by admins only;

#### NFRs (Non-Functional Requirements)

- [ ] The user passwords must be crypted;
- [ ] The app data must be persisted in a PostgreSQL database;
- [ ] All the data lists must be paged in up to 20 items by page;
- [ ] The user must be identified by a JWT (JSON Web Token);

### Create the Node.js Project

Create the package.json:

```sh
npm init -y
```

Create the src and server.ts:

```sh
mkdir src
touch src/server.ts
touch src/app.ts
```

Install the dependencies:

```sh
npm i typescript @types/node tsx tsup -D
npm i fastify
```

Create the tsconfig.json:

```sh
npx tsc --init
```

### Using the NPM exact versions

### Loading environment variables

Install the dependencies:

```sh
npm i dotenv
npm i zod
```

### Configuring the ESLint

### Create the importation alias

## 2. Prisma ORM Integration

## 3. Design Patterns & Use Cases

## 4. Design Patterns & Tests

## 5. Use Cases Implementations

## 6. COntrollers & E2E Tests

## 7. Refresh Token & RBAC

## 8. Application CI/CD
