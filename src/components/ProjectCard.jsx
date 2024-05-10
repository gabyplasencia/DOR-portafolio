import React from 'react';
import { useTranslation } from "react-i18next";

const ProjectCard = (props) => {
    const { t } = useTranslation();
    return (
        <article className="project mb-8 lg:mb-1 p-5 lg:px-9 lg:py-12 flex flex-col items-center gap-6">
            <img src={`/assets/img/${props.imgShowCase}`} aria-hidden="true" alt={t("altImg")} className="project__showcase w-full lg:w-4/5" />
            <h3 className="project__title self-start text-3xl font-semibold">{t(props.title)}</h3>
            <p className="project__desc self-start text-lg">{t(props.desc)}</p>
            <div className="project__techs self-start flex flex-wrap">
                <div className="tech__wrapper">
                    {props.htmlLogo && <img src={`/assets/icons/${props.htmlLogo}`} aria-hidden="true" alt={props.htmlAlt} className="tech__icon" />}
                    {props.html && <p className="tech__name">{props.html}</p>}
                </div>
                <div className="tech__wrapper">
                    {props.cssLogo && <img src={`/assets/icons/${props.cssLogo}`} aria-hidden="true" alt={props.cssAlt} className="tech__icon" />}
                    {props.css && <p className="tech__name">{props.css}</p>}
                </div>
                <div className="tech__wrapper">
                    {props.splideLogo && <img src={`/assets/icons/${props.splideLogo}`} aria-hidden="true" alt={props.splideAlt} className="tech__icon" />}
                    {props.splide && <p className="tech__name">{props.splide}</p>}
                </div>
                <div className="tech__wrapper">
                    {props.gsapLogo && <img src={`/assets/icons/${props.gsapLogo}`} aria-hidden="true" alt={props.gsapAlt} className="tech__icon" />}
                    {props.gsap && <p className="tech__name">{props.gsap}</p>}
                </div>
                <div className="tech__wrapper">
                    {props.sassLogo && <img src={`/assets/icons/${props.sassLogo}`} aria-hidden="true" alt={props.sassAlt} className="tech__icon" />}
                    {props.sass && <p className="tech__name">{props.sass}</p>}
                </div>
                <div className="tech__wrapper">
                    {props.jsLogo && <img src={`/assets/icons/${props.jsLogo}`} aria-hidden="true" alt={props.jsAlt} className="tech__icon" />}
                    {props.js && <p className="tech__name">{props.js}</p>}
                </div>
                <div className="tech__wrapper">
                    {props.reactLogo && <img src={`/assets/icons/${props.reactLogo}`} aria-hidden="true" alt={props.reactAlt} className="tech__icon" />}
                    {props.react && <p className="tech__name">{props.react}</p>}
                </div>
                <div className="tech__wrapper">
                    {props.figmaLogo && <img src={`/assets/icons/${props.figmaLogo}`} aria-hidden="true" alt={props.figmaAlt} className="tech__icon" />}
                    {props.figma && <p className="tech__name">{props.figma}</p>}
                </div>
            </div>
            <div className="project__link-container flex gap-6 text-lg">
                    <div className="wrapper_underline">
                        <div className="project__link-wrapper flex items-center gap-1">
                            <svg  alt="logo github" aria-hidden="true" className="project__link-icon" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25 0C38.8075 0 50 11.4748 50 25.6323C50 36.9548 42.845 46.5598 32.9175 49.9523C31.65 50.2048 31.2 49.4044 31.2 48.7219C31.2 47.8769 31.23 45.117 31.23 41.687C31.23 39.297 30.43 37.7371 29.5325 36.9421C35.1 36.3071 40.95 34.1394 40.95 24.2944C40.95 21.4944 39.98 19.2095 38.375 17.4145C38.635 16.767 39.4925 14.1599 38.13 10.6299C38.13 10.6299 36.035 9.94305 31.2625 13.258C29.265 12.6905 27.125 12.405 25 12.395C22.875 12.405 20.7375 12.6905 18.7425 13.258C13.965 9.94305 11.865 10.6299 11.865 10.6299C10.5075 14.1599 11.365 16.767 11.6225 17.4145C10.025 19.2095 9.04751 21.4944 9.04751 24.2944C9.04751 34.1144 14.885 36.3154 20.4375 36.9629C19.7225 37.6029 19.075 38.7319 18.85 40.3894C17.425 41.0444 13.805 42.178 11.575 38.2605C11.575 38.2605 10.2525 35.7976 7.7425 35.6176C7.7425 35.6176 5.305 35.5853 7.5725 37.1753C7.5725 37.1753 9.21 37.9628 10.3475 40.9252C10.3475 40.9252 11.815 45.5001 18.77 43.9501C18.7825 46.0926 18.805 48.1119 18.805 48.7219C18.805 49.3994 18.345 50.1923 17.0975 49.9548C7.16249 46.5673 0 36.9573 0 25.6323C0 11.4748 11.195 0 25 0Z"/>
                            </svg>
                            <a href={props.githubLink} target='_blank'  className="project__link">{t("codigo")}
                            </a>
                        </div>
                        <div className="underline"></div>
                    </div>
                    <div className="wrapper_underline">
                        <div className="project__link-wrapper flex items-center gap-1">
                            <svg alt="icono representativo" aria-hidden="true" className="project__link-icon" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg">
                                <path id="live-icon" d="M58.125 32.7273H56.25V6.13636C56.25 4.5089 55.6574 2.94809 54.6025 1.7973C53.5476 0.646508 52.1168 0 50.625 0L9.375 0C7.88316 0 6.45242 0.646508 5.39752 1.7973C4.34263 2.94809 3.75 4.5089 3.75 6.13636V32.7273H1.875C1.37772 32.7273 0.900806 32.9428 0.549175 33.3264C0.197544 33.71 0 34.2302 0 34.7727L0 38.8636C0 40.4911 0.592632 42.0519 1.64752 43.2027C2.70242 44.3535 4.13316 45 5.625 45H54.375C55.8668 45 57.2976 44.3535 58.3525 43.2027C59.4074 42.0519 60 40.4911 60 38.8636V34.7727C60 34.2302 59.8025 33.71 59.4508 33.3264C59.0992 32.9428 58.6223 32.7273 58.125 32.7273ZM54.375 40.9091H5.625C5.12772 40.9091 4.65081 40.6936 4.29917 40.31C3.94754 39.9264 3.75 39.4061 3.75 38.8636V36.8182H20.625C21.1223 36.8182 21.5992 36.6027 21.9508 36.2191C22.3025 35.8355 22.5 35.3152 22.5 34.7727C22.5 34.2302 22.3025 33.71 21.9508 33.3264C21.5992 32.9428 21.1223 32.7273 20.625 32.7273H7.5V6.13636C7.5 5.59388 7.69754 5.07361 8.04918 4.69001C8.40081 4.30641 8.87772 4.09091 9.375 4.09091H50.625C51.1223 4.09091 51.5992 4.30641 51.9508 4.69001C52.3025 5.07361 52.5 5.59388 52.5 6.13636V32.7273H39.375C38.8777 32.7273 38.4008 32.9428 38.0492 33.3264C37.6975 33.71 37.5 34.2302 37.5 34.7727C37.5 35.3152 37.6975 35.8355 38.0492 36.2191C38.4008 36.6027 38.8777 36.8182 39.375 36.8182H56.25V38.8636C56.25 39.4061 56.0525 39.9264 55.7008 40.31C55.3492 40.6936 54.8723 40.9091 54.375 40.9091ZM33.75 34.7727C33.75 35.3152 33.5525 35.8355 33.2008 36.2191C32.8492 36.6027 32.3723 36.8182 31.875 36.8182H28.125C27.6277 36.8182 27.1508 36.6027 26.7992 36.2191C26.4475 35.8355 26.25 35.3152 26.25 34.7727C26.25 34.2302 26.4475 33.71 26.7992 33.3264C27.1508 32.9428 27.6277 32.7273 28.125 32.7273H31.875C32.3723 32.7273 32.8492 32.9428 33.2008 33.3264C33.5525 33.71 33.75 34.2302 33.75 34.7727ZM39.375 21.3136L41.8125 23.9318C41.9808 24.1275 42.1842 24.2834 42.4099 24.3901C42.6356 24.4967 42.879 24.5517 43.125 24.5517C43.371 24.5517 43.6144 24.4967 43.8401 24.3901C44.0658 24.2834 44.2692 24.1275 44.4375 23.9318C44.6169 23.7482 44.7598 23.5264 44.8575 23.2801C44.9553 23.0339 45.0057 22.7683 45.0057 22.5C45.0057 22.2316 44.9553 21.9661 44.8575 21.7199C44.7598 21.4736 44.6169 21.2518 44.4375 21.0682L42.0375 18.4091L44.4375 15.75C44.6739 15.5544 44.8663 15.3026 45 15.0136C45.0182 14.9192 45.0182 14.8217 45 14.7273C45.0177 14.5779 45.0177 14.4267 45 14.2773C45 14.2773 45 14.0318 45 13.9091C45.0159 13.787 45.0159 13.663 45 13.5409C45 13.5409 45 13.2955 44.775 13.1727C44.55 13.05 44.775 13.1727 44.775 12.9273L44.475 12.6818L43.7625 12.2727L32.5125 8.18182H31.1625H30.825L30.5625 8.42727L30.3375 8.71364L30 9.45C29.9598 9.56881 29.9598 9.69937 30 9.81818C29.9815 9.9538 29.9815 10.0917 30 10.2273C29.9815 10.3629 29.9815 10.5007 30 10.6364C29.9825 10.7171 29.9825 10.8011 30 10.8818L33.75 23.1545C33.851 23.4317 34.0043 23.6826 34.2 23.8909H34.3875C34.7091 24.2722 35.1514 24.5061 35.625 24.5455C35.8234 24.5846 36.0266 24.5846 36.225 24.5455H36.5625L36.8625 24.3L39.375 21.3136ZM36.45 18.6955L34.8375 13.4591L39.6375 15.2182L36.45 18.6955Z" stroke="white" stroke-width="0.00256"/>
                            </svg>
                            <a href={props.pageLink} target='_blank' className="project__link">Live Site
                            </a>
                        </div>
                        <div className="underline"></div>
                    </div>


            </div>
        </article>
    )
}

export default ProjectCard;