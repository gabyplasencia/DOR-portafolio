import React from 'react';
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section id="hero" className="container hero grid grid-cols-1">
            <div className="hero__left-wrapper py-4 md:py-9">
                <h1 className="hero__title font-medium tracking-wide mb-2 text-5xl">{t("saludo")}</h1>
                <span className="hero__subtitle tracking-wider text-2xl">{t("soy")}</span>
                <div className="hero__links-container flex items-center gap-4 mt-1 mb-4">
                    <div className="hero__link-wrapper">
                        <a href="https://github.com/gabyplasencia" target='_blank' aria-label={t("ariaGithub")} className="hero__link">
                            <svg  alt="logo github" aria-hidden="true" className="hero__link-icon" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25 0C38.8075 0 50 11.4748 50 25.6323C50 36.9548 42.845 46.5598 32.9175 49.9523C31.65 50.2048 31.2 49.4044 31.2 48.7219C31.2 47.8769 31.23 45.117 31.23 41.687C31.23 39.297 30.43 37.7371 29.5325 36.9421C35.1 36.3071 40.95 34.1394 40.95 24.2944C40.95 21.4944 39.98 19.2095 38.375 17.4145C38.635 16.767 39.4925 14.1599 38.13 10.6299C38.13 10.6299 36.035 9.94305 31.2625 13.258C29.265 12.6905 27.125 12.405 25 12.395C22.875 12.405 20.7375 12.6905 18.7425 13.258C13.965 9.94305 11.865 10.6299 11.865 10.6299C10.5075 14.1599 11.365 16.767 11.6225 17.4145C10.025 19.2095 9.04751 21.4944 9.04751 24.2944C9.04751 34.1144 14.885 36.3154 20.4375 36.9629C19.7225 37.6029 19.075 38.7319 18.85 40.3894C17.425 41.0444 13.805 42.178 11.575 38.2605C11.575 38.2605 10.2525 35.7976 7.7425 35.6176C7.7425 35.6176 5.305 35.5853 7.5725 37.1753C7.5725 37.1753 9.21 37.9628 10.3475 40.9252C10.3475 40.9252 11.815 45.5001 18.77 43.9501C18.7825 46.0926 18.805 48.1119 18.805 48.7219C18.805 49.3994 18.345 50.1923 17.0975 49.9548C7.16249 46.5673 0 36.9573 0 25.6323C0 11.4748 11.195 0 25 0Z"/>
                            </svg>
                        </a>
                    </div>
                    <div className="hero__link-wrapper">
                        <a href="https://www.linkedin.com/in/gabyplasencia/" target='_blank' aria-label={t("ariaLinkedin")} className="hero__link">
                            <svg alt="logo linkedin" aria-hidden="true" className="hero__link-icon"  viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M40.9035 40.9005H33.7845V29.7615C33.7845 27.105 33.7395 23.688 30.0855 23.688C26.382 23.688 25.8165 26.583 25.8165 29.571V40.9005H18.705V17.994H25.53V21.126H25.6275C26.577 19.3245 28.899 17.4255 32.3625 17.4255C39.5715 17.4255 40.9035 22.1685 40.9035 28.338V40.9005ZM10.6785 14.865C8.391 14.865 6.5475 13.0155 6.5475 10.7355C6.5475 8.457 8.391 6.6075 10.6785 6.6075C12.9555 6.6075 14.805 8.457 14.805 10.7355C14.805 13.0155 12.9555 14.865 10.6785 14.865ZM14.2395 40.9005H7.113V17.994H14.2395V40.9005ZM46.0005 0H2.001C0.8955 0 0 0.8955 0 1.9995V45.999C0 47.1045 0.8955 48 2.001 48H46.0005C47.1045 48 48 47.1045 48 45.999V1.9995C48 0.8955 47.1045 0 46.0005 0Z"/>
                            </svg>
                        </a>
                    </div>
                    <div className="hero__link-wrapper">
                        <a href="/combine-cvs.pdf" aria-label={t("ariaCV")} target='_blank' className="hero__link">CV</a>
                    </div>
                </div>
                <p className="hero__desc text-lg leading-7">{t("presentacion")}</p>
            </div>

            <div className="divisor justify-self-center"></div>

            <div className="hero__right-wrapper tech justify-self-end text-center py-4 md:py-9">
                <strong className="tech__title text-2xl tracking-wider">&#x3c;Stacks &#x2f;&#62;</strong>

                <div className="tech__container flex flex-wrap gap-8 items-center justify-center text-neutral-600 md:gap-12">
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
                        <img src="/assets/icons/logo-react.svg" alt="logo react" aria-hidden="true" className="tech__icon" />
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
            </div>
        </section>
    )
}

export default Hero;