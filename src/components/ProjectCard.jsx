import React from 'react';
import { useTranslation } from "react-i18next";

const ProjectCard = (props) => {
    const { t } = useTranslation();
    return (
        <article className="project">
            <hr />
            <img src={`/assets/img/${props.imgShowCase}`} aria-hidden="true" alt={t("altImg")} className="project__showcase" />
            <h3 className="project__title">{t(props.title)}</h3>
            <p className="project__desc">{t(props.desc)}</p>
            <div className="project__link-container">
                <div className="project__link-wrapper">
                    <img src={`/assets/icons/${props.githubLogo}`} alt="github logo" aria-hidden="true" className="project__link-icon" />
                    <a href={props.githubLink} target='_blank'  className="project__link">{t("codigo")}</a>
                </div>
                <div className="project__link-wrapper">
                    <img src={`/assets/icons/${props.iconGoToPage}`} alt="icono representativo" aria-hidden="true" className="project__link-icon" />
                    <a href={props.pageLink} target='_blank'  className="project__link">Live Site</a>
                </div>
            </div>
            <div className="project__techs">
                <strong>{t("lenguajes")}</strong>
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
            <hr />
        </article>
    )
}

export default ProjectCard;