import React from 'react';
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section id="hero" className="container hero">
            <h1 className="hero__title">{t("saludo")}</h1>
            <span className="hero__subtitle">{t("soy")}</span>
            <div className="hero__links-container">
                <div className="hero__link-wrapper">
                    <img src="/assets/icons/logo-github.svg" alt="logo github" aria-hidden="true" className="hero__link-icon" />
                    <a href="https://github.com/gabyplasencia" target='_blank' aria-label={t("ariaGithub")} className="hero__link">Github</a>
                </div>
                <div className="hero__link-wrapper">
                    <img src="/assets/icons/logo-linkedin.svg" alt="logo linkedin" aria-hidden="true" className="hero__link-icon" />
                    <a href="https://www.linkedin.com/in/gabyplasencia/" target='_blank' aria-label={t("ariaLinkedin")} className="hero__link">Linkedin</a>
                </div>
                <div className="hero__link-wrapper">
                    <a href="/combine-cvs.pdf" aria-label={t("ariaCV")} target='_blank' className="hero__link">CV</a>
                </div>
            </div>

            <p className="hero__desc">{t("presentacion")}</p>

            <div className="tech">
                <strong className="tech__title">Stacks</strong>
                <div className="tech__wrapper">
                    <img src="/assets/icons/logo-html.svg" alt="logo html" aria-hidden="true" className="tech__icon" />
                    <p className="tech__name">HTML</p>
                </div>
                <div className="tech__wrapper">
                    <img src="/assets/icons/logo-css.svg" alt="logo css" aria-hidden="true" className="tech__icon" />
                    <p className="tech__name">CSS</p>
                </div>
                <div className="tech__wrapper">
                    <img src="/assets/icons/logo-js.svg" alt="logo javascript" aria-hidden="true" className="tech__icon" />
                    <p className="tech__name">Javascript</p>
                </div>
                <div className="tech__wrapper">
                    <img src="/assets/icons/logo-sass.svg" alt="logo sass" aria-hidden="true" className="tech__icon" />
                    <p className="tech__name">SASS</p>
                </div>
                <div className="tech__wrapper">
                    <img src="/assets/icons/logo-sass.svg" alt="logo react" aria-hidden="true" className="tech__icon" />
                    <p className="tech__name">React</p>
                </div>
                <div className="tech__wrapper">
                    <img src="/assets/icons/logo-mysql.svg" alt="logo mysql" aria-hidden="true" className="tech__icon" />
                    <p className="tech__name">MySQL</p>
                </div>
                <div className="tech__wrapper">
                    <img src="/assets/icons/logo-gsap.svg" alt="logo gsap" aria-hidden="true" className="tech__icon" />
                    <p className="tech__name">GSAP</p>
                </div>
                <div className="tech__wrapper">
                    <img src="/assets/icons/logo-git.svg" alt="logo git" aria-hidden="true" className="tech__icon" />
                    <p className="tech__name">Git</p>
                </div>
                <div className="tech__wrapper">
                    <img src="/assets/icons/logo-figma.svg" alt="logo figma" aria-hidden="true" className="tech__icon" />
                    <p className="tech__name">Figma</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;