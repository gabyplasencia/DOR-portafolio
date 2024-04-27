import React from "react";
import { useTranslation } from "react-i18next";

const HeaderNav = () => {
    const { t, i18n } = useTranslation();
    const lngs = {
      pt: {name: "Português"},
      es: {name: "Español"},
    }
    const onChangeLang = (e) => {
      const lang_code = e.target.value;
      i18n.changeLanguage(lang_code);
      };
    return (
    <header className="headerNav">
        <img src="/assets/icons/logo-gp.svg" alt={t("Logo")} aria-hidden="true" className="logo"/>
        <nav role="navigation">
            <ul className="nav">
                <li className="nav__item">
                <a href="#hero" aria-label={t("ariaHomeLink")}>{t("inicio")}</a>
                </li>
                <li className="nav__item">
                    <a href="#proyectos" aria-label={t("ariaProyectosLink")}>{t("proyectos")}</a>
                </li>
                <li className="nav__item">
                    <a href="#contactame" aria-label={t("ariaFormularioLink")}>{t("contactame")}</a>
                </li>
            </ul>
        </nav>
        <select className="lan-select" defaultValue={i18n.language} onChange={onChangeLang}>{
            Object.keys(lngs).map((lng) => (
                <option type="submit" key={lng} value={lng}>{lngs[lng].name}</option>
            ))}
        </select>
    </header>
    )}
export default HeaderNav
