import "./ui/ThemeSwitcher.css";
import { useEffect, useState } from "react";

export function ThemeSwitcher({ optionDark, optionLight, optionSystem, readMode }) {
    const systemOptionEnabled = Boolean(optionSystem?.value);
    const [theme, setTheme] = useState(() => {
        const currentTheme = localStorage.getItem("currentTheme");
        return currentTheme ? currentTheme : "system";
    });

    const activeTheme = theme === "system" && !systemOptionEnabled ? "light" : theme;

    useEffect(() => {
        localStorage.setItem("currentTheme", theme);

        const applyTheme = resolvedTheme => {
            document.documentElement.style.setProperty("--theme", resolvedTheme);
            document.documentElement.style.setProperty("color-scheme", resolvedTheme);
        };

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        applyTheme(activeTheme === "system" ? (mediaQuery.matches ? "dark" : "light") : activeTheme);

        if (activeTheme !== "system") {
            return;
        }

        const handleSystemThemeChange = event => {
            applyTheme(event.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleSystemThemeChange);
        return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
    }, [theme, activeTheme]);

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
                        value={activeTheme}
                    >
                        {systemOptionEnabled && <option value="system">{optionSystem.value}</option>}
                        <option value="light">{optionLight.value}</option>
                        <option value="dark">{optionDark.value}</option>
                    </select>
                </fieldset>
            </form>
        );
    } else {
        return null;
    }
}
