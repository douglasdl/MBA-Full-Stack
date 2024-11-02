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
### ESLint Config 