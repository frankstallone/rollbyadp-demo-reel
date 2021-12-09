# Roll by ADP demo widget

# Install
`npm i`

## Watch
`npm start`

## Build
`npm run build`

### Off ADP Network?

There's not internal ADP resources used here. If you are off ADP's network comment out the two lines in `.npmrc`. 

## Assets

Videos, imagery or any static assets should live in the `src/assets` folder.

## Fonts

Specter lives in the `src/fonts` folder and has a `specter.css` file that is `import`ed into the app in `src/scripts/index.ts`.

## Tailwind

We're using Tailwind with our design tokens as a preset. That gives us access to all of our colors. The Specter font works with the `font-display` class. 