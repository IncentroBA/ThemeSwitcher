import { createElement } from "react";

export function preview({ readMode }) {
    return <div className="theme-switcher-preview">Theme Switcher: {readMode === true ? "Read" : "Edit"} mode</div>;
}

export function getPreviewCss() {
    return require("./ui/ThemeSwitcher.css");
}
