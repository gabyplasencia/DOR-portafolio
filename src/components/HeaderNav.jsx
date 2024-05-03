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
    <header className="headerNav flex items-center w-vw md:justify-between md:px-9 md:py-5">
        <img src="/assets/icons/logo-gp.svg" alt={t("Logo")} aria-hidden="true" className="logo invisible md:visible md:h-11"/>
        <nav role="navigation">
            <ul className="nav flex items-center md:gap-10 md:pb-5">
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
