import "./ui/ThemeSwitcher.css";
import { createElement, useEffect, useState } from "react";

export function ThemeSwitcher({ readMode }) {
    const [theme, setTheme] = useState(() => {
        const currentTheme = localStorage.getItem("currentTheme");
        return currentTheme ? currentTheme : "system";
    });

    useEffect(() => {
        localStorage.setItem("currentTheme", theme);
        let newTheme = theme;
        if (newTheme === "system") {
            newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }

        if (newTheme === "dark") {
            document.documentElement.style.setProperty("--theme", newTheme);
        } else {
            document.documentElement.style.removeProperty("--theme");
        }
    }, [theme]);

    const handleThemeChange = event => {
        const newTheme = event.target.value;

        // Use the View Transitions API if available
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                setTheme(newTheme);
            });
        } else {
            setTheme(newTheme);
        }
    };

    if (readMode === false) {
        return (
            <form className="widget-theme-switcher form-group">
                <fieldset>
                    <label htmlFor="theme-select" className="sr-only">
                        Choose a theme
                    </label>
                    <select
                        className="form-control"
                        id="theme-select"
                        name="theme"
                        onChange={handleThemeChange}
                        value={theme}
                    >
                        <option value="system">System</option>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </fieldset>
            </form>
        );
    } else {
        return null;
    }
}
