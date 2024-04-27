import React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation(); 

    const [visits, setVisits] = useState(0);
    //entra dos veces
    useEffect(() => {
      const currentVisits = parseInt(localStorage.getItem('visits')) || 0;
      setVisits(currentVisits);
      localStorage.setItem('visits', currentVisits + 1);
    }, []);

    return (
        <footer id="footer" role="complementary">
            <strong className="footer__myname">Gabriela Plasencia</strong>
            <div className="footer__links">
                <div className="links__wrapper">
                    <img src="/assets/icons/logo-github.svg" alt="Github logo" target='_blank' aria-label={t("ariaGithub")} className="link__icon" />
                    <img src="/assets/icons/logo-linkedin.svg" alt="Linkedin logo" target='_blank' aria-label={t("ariaLinkedin")} className="link__icon" />
                </div>
            </div>
            <p className="footer__visits">{t("visitada")} <span id="visits">{visits}</span> {t("veces")}</p>
        </footer>
    )
}

export default Footer;