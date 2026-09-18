## ThemeSwitcher

A switch button to toggle between the current theme and a alternative theme, for instance dark mode.

## Features

Read mode `(boolean)` to have a widget to read on every page, but to set via Dropdown on a specific page.

## Usage

### Add the ThemeSwitcher widget for user selection

Place one instance of the widget on a dedicated settings page with `Read mode (boolean)` set to false (default). This
will show a dropdown where users can select their preferred theme.

### System option (optional)

The `System option title` input (`optionSystem`) is optional.

- Fill it to include a System option in the dropdown. When selected, the widget follows the OS color scheme
  (`prefers-color-scheme`) and updates automatically when the OS theme changes.
- Leave it blank to hide the System option. Users can then only switch manually between Light and Dark. The widget will
  not follow OS settings.

### Add the ThemeSwitcher widget for applying the theme

Place another instance of the widget with Read mode set to true. This widget only reads the current theme setting. A
common practice is to place it in your layout so it’s applied across all pages.

### Define your CSS

The ThemeSwitcher sets a resolved `--theme` value (`light` or `dark`) as an inline custom property on the `<html>`
element. When System is selected, OS preference is resolved first, so `--theme` is never left as `system`. It also sets
the native `color-scheme` property so browser UI (scrollbars, form controls) follows the theme.

The exact implementation of light and dark styles depends on your project setup.

**Note:** This widget only provides the controls for theme switching. It does not include a ready-to-use theme
implementation (yet). This ensures maximum flexibility for customization, but means it won’t act as a plug-and-play
solution out of the box.

A typical approach is a style query on `--theme`. For example with Sass:

```scss
@mixin dark-mode {
    @container style(--theme: dark) {
        @content;
    }
}

.card {
    background: white;

    @include dark-mode {
        background: black;
    }
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
