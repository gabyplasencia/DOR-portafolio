import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const HeaderNav = () => {
    const { t, i18n } = useTranslation();
    const lngs = {
      pt: {name: "Português"},
      es: {name: "Español"},
    }
    const [menuOpen, setMenuOpen] = useState(false);

    const onChangeLang = (e) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    const handleToggleClick = () => {
      setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    return (
        <header className="headerNav flex flex-wrap items-center w-vw p-4 md:justify-between md:px-9 md:py-2">
            <img src="/assets/icons/logo-gp.svg" alt={t("Logo")} aria-hidden="true" className="logo hidden md:block md:h-11"/>
            <button className={`nav-toggle block md:hidden ${menuOpen ? 'menu-open' : 'menu-close'}`} onClick={handleToggleClick}></button>
            <nav role="navigation" className={`main-navbar  ${menuOpen ? 'menu-open' : 'menu-close'}`}>
                <ul className="nav flex flex-col items-end pb-3 md:items-center md:gap-10 md:pb-1 md:flex-row">
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
            <select className="lan-select" defaultValue={i18n.language} onChange={onChangeLang}>
                {Object.keys(lngs).map((lng) => (
                    <option key={lng} value={lng}>{lngs[lng].name}</option>
                ))}
            </select>
        </header>
    );
};

export default HeaderNav;

