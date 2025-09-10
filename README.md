## ThemeSwitcher

A switch button to toggle between the current theme and a alternative theme, for instance dark mode.

## Features

Read mode `(boolean)` to have a widget to read on every page, but to set via Dropdown on a specific page.

## Usage

### Add the ThemeSwitcher widget for user selection

Place one instance of the widget on a dedicated settings page with `Read mode (boolean)` set to false (default). This
will show a dropdown where users can select their preferred theme.

### Add the ThemeSwitcher widget for applying the theme

Place another instance of the widget with Read mode set to true. This widget only reads the current theme setting. A
common practice is to place it in your layout so it’s applied across all pages.

### Define your CSS variables

To see visual changes, you’ll need to define CSS variables for both light and dark themes. The ThemeSwitcher sets a
global `--theme` variable on the `<html>` element. The exact implementation depends on your project setup.

**Note:** This widget only provides the controls for theme switching. It does not include a ready-to-use theme
implementation (yet). This ensures maximum flexibility for customization, but means it won’t act as a plug-and-play
solution out of the box.

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
