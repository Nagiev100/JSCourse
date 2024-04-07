import React from "react";
import { useEffect } from "react";

export const useTheme = () => {
    const [theme, setTheme] = React.useState("light");

    useEffect(() => {
        const theme = localStorage.getItem("theme");

        if (theme) {
            setTheme(theme);
        }
    }, []);

    const setMode = (mode: string) => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    };

    const themeToggler = () => {
        theme === "light" ? setMode("dark") : setMode("light");
    };

    return { theme, themeToggler };
};