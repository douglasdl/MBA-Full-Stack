# Member Club

- [Notion](https://efficient-sloth-d85.notion.site/Desafio-pr-tico-Member-Club-d74427774cc84a4d979e72b6cca953c7)
- [Figma](https://www.figma.com/design/MK95fsV2Ds6N2XYO98uusZ/Cart%C3%A3o-fidelidade?node-id=0-1&t=mygJN6h9asT45TOe-0)
- [Export Styles to css variable](https://www.figma.com/community/plugin/1332412206147274506/export-styles-and-variables-to-css) - Figma Plugin.
- [JSON Server](https://github.com/typicode/json-server/tree/v0)
- [Google Fonts Oxygen](https://fonts.google.com/specimen/Oxygen)
- [Phosphor Icons](https://phosphoricons.com/)

## Technologies

- HTML
- CSS
- Programming Logic
- JavaScript
- Responsivety

## Features

- [ ] It must be possible to search for customer information using an ID;
- [ ] There must be validation to know if it is a valid and existing ID;
- [ ] An error alert should appear on the screen if it is an invalid ID;

## Successfully Show Client Data

- [ ] The customer's image must be displayed on the screen;
- [ ] The name of the customer must be displayed on the screen;
- [ ] The cutting history with quantity, date and time must be displayed on the screen;
- [ ] There must be a check on the loyalty card for each haircut the customer has;
- [ ] A progress with the number of cuts remaining for the prize must be displayed on the screen;
- [ ] A congratulations modal should appear on the screen with the message: “Congratulations! Your next cut is free!” if the customer has reached 10 cuts;

## Project

Install the dependencies:

```sh
npm init -y
npm i json-server@1.0.0-alpha.21
npm i dayjs@1.11.10
npm i -D webpack@5.89.0 webpack-cli@5.1.4
npm i -D webpack-dev-server@4.15.1
npm i -D html-webpack-plugin@5.6.0
npm i -D style-loader@3.3.3 css-loader@6.8.1
npm i -D copy-webpack-plugin@11.0.0
npm i -D babel-loader@9.1.3 @babel/core@7.23.7 @babel/preset-env@7.23.7
```

Run the server:

```sh
npm run server
```
