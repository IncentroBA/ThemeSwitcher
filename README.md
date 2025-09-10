## ThemeSwitcher

A switch button to toggle between the current theme and a alternative theme, for instance dark mode.

## Features

Read mode `(boolean)` to have a widget to read on every page, but to set via Dropdown on a specific page.

## Usage

Place one widget on a specific settings page with `Read mode (boolean)` set to false (default). This will present the
dropdown to be able to set the theme.

Place another widget with the boolean set to true. This widget will only read the current theme settings. It's handy to
place this widget in the layout so that it will be used on all pages.

In order to actually see CSS changes there need to be CSS variables defined and assigned for the light and dark theme.
The theme switcher basically sets a --theme CSS variable at the HTML level. The implementation can and probably will
differ for each project.

For light theme settings:

```css
:root {
    --color-scheme: light;
}
```

And for dark theme settings:

```css
html[style*="--theme: dark"] {
    --color-scheme: dark;
}
```

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
