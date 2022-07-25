# Playbook

![banner](.github/cover.png?raw=true)

## What's the Playbook?

This plugin allows designers to view key states such as empty states, error states across iOS, Android and Web. Then generate the selected screen onto the canvas.

This plugin is a work in progress.

## Todo:

-   Add dynamic `content` based on users `pattern` selection
-   Update `image` and `content` on change
-   Send `pattern` and `platform` to the backend `controller.ts`
-   Basically make all the backend stuff with Figma API's

## Development (ignore)

-   Run `yarn` to install dependencies.
-   Run `yarn build:watch` to start webpack in watch mode.
-   Open `Figma` -> `Plugins` -> `Development` -> `New Plugin...` and choose `manifest.json` file from this repo.

## Build

-   Run `yarn build` to build a production version.
