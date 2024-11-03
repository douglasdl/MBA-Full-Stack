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
