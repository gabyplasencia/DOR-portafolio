import React from 'react';
import ProjectCard from "./ProjectCard";
import data from "../cardsData/datacard";
import { useTranslation } from "react-i18next";

const Projects = () => { 
    const { t } = useTranslation();                   

    const cards = data.map(item => {
        return (
            <ProjectCard 
                altImg={item.altImg}
                desc={item.desc}
                imgShowCase={item.imgShowCase}
                title={item.title}
                htmlLogo={item.htmlLogo}
                htmlAlt={item.htmlAlt}
                html={item.html}
                cssLogo={item.cssLogo}
                cssAlt={item.cssAlt}
                css={item.css}
                sassLogo={item.sassLogo}
                sassAlt={item.sassAlt}
                sass={item.sass}
                jsLogo={item.jsLogo}
                jsAlt={item.jsAlt}
                js={item.js}
                reactLogo={item.reactLogo}
                reactAlt={item.reactAlt}
                react={item.react}
                gsapLogo={item.gsapLogo}
                gsapAlt={item.gsapAlt}
                gsap={item.gsap}
                splideLogo={item.splideLogo}
                splideAlt={item.splideAlt}
                splide={item.splide}
                githubLogo={item.githubLogo}
                githubAlt={item.githubAlt}
                githubLink={item.githubLink}
                figmaLogo={item.figmaLogo}
                figmaAlt={item.figmaAlt}
                figmaLink={item.figmaLink}
                iconGoToPage={item.iconGoToPage}
                pageLink={item.pageLink}
            />
        )
    })

    return (
        <section id="proyectos" className="container projects">
            <h2 className="section__title">{t("seccionProyectosTitulo")}</h2>

            <div className="projects__wrapper">
            {cards}
            </div>
        </section>
    )
}

export default Projects;