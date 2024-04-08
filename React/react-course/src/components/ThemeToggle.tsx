import {FC} from "react";
import {t} from "i18next";

interface Props {
    themeToggler: () => void
    theme:string
}

export const ThemeToggle: FC <Props> = ({themeToggler,theme}) => {
    return(
        <select value={theme} onChange={themeToggler}>
            <option value="light">{t("light")}</option>
            <option value="dark">{t("dark")}</option>
        </select>
    )
}