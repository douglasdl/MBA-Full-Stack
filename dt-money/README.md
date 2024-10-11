# DT-Money2

Create the project:
```sh
npm create vite@latest
```

Start the Project:
```sh
npm run dev
```

Start the Fake API:
```sh
npx json-server server.json --host 192.168.10.112 -p 3333 -w -d 500
```

Install the dependencies:
```sh
npm i styled-components
npm i phosphor-react
npm i @radix-ui/react-dialog
npm i @radix-ui/react-radio-group
npm i react-hook-form
npm i zod
npm i @hookform/resolvers
```

Install the development dependencies:
```sh
npm i @types/styled-components -D
npm i json-server -D
```

## Fonts:

- [Google Fonts](https://fonts.google.com/specimen/Roboto)

## Figma [layout](https://www.figma.com/file/b4wyt35ucnvrRNIYUgQOeI/DT-Money?type=design&node-id=0-1&t=PI8QbbHvEietFlGN-0)

## 1. Visual Extructure

 - Introduction
 - [Figma DT-Money](https://www.figma.com/file/b4wyt35ucnvrRNIYUgQOeI/DT-Money?type=design&node-id=0-1&t=PI8QbbHvEietFlGN-0)
 - Project Setup
 - Component: Header
 - Component: Summary
 - Tranasactions Table
 - Component: SearchForm
 - Creating an accessible modal
   - [Aria Kit](https://github.com/ariakit/ariakit)
   - [Headless UI](https://headlessui.com/)
   - [Chakra UI](https://chakra-ui.com/)
   - [Radix UI](https://www.radix-ui.com/)
 - New transaction modal
 - Input and output buttons
 - Creating an accessible radio button

## 2. Connecting with the API

- Setting up [JSON Server](https://github.com/typicode/json-server)
 Console log the current date:
```sh
new Date().toISOString()
```

- Performing HTTP request
- Creating transaction context
- Calculating transaction summary
- Formatting values
- Creating a hook for the summary
- Applying React Hook Form
- Controlled components
- Fetching transactions
- Configuring Axios
- Creating a new transaction
- Fixing linting errors

## 3. 3 Performance

- Using React DevTools
- Applying Context Selectors
- Applying useCallback
- Applying memo
- Applying useMemo