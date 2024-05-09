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
        <footer id="footer" role="complementary" className='footer flex flex-col items-center text-center py-4'>
            <strong className="footer__myname mb-2">Gabriela Plasencia</strong>
            <div className="footer__links flex gap-6 mb-9">
                    <a href="https://github.com/gabyplasencia" target='_blank' aria-label={t("ariaGithub")} className="footer__link">
                        <svg  alt="logo github" aria-hidden="true" className="footer__link-icon" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25 0C38.8075 0 50 11.4748 50 25.6323C50 36.9548 42.845 46.5598 32.9175 49.9523C31.65 50.2048 31.2 49.4044 31.2 48.7219C31.2 47.8769 31.23 45.117 31.23 41.687C31.23 39.297 30.43 37.7371 29.5325 36.9421C35.1 36.3071 40.95 34.1394 40.95 24.2944C40.95 21.4944 39.98 19.2095 38.375 17.4145C38.635 16.767 39.4925 14.1599 38.13 10.6299C38.13 10.6299 36.035 9.94305 31.2625 13.258C29.265 12.6905 27.125 12.405 25 12.395C22.875 12.405 20.7375 12.6905 18.7425 13.258C13.965 9.94305 11.865 10.6299 11.865 10.6299C10.5075 14.1599 11.365 16.767 11.6225 17.4145C10.025 19.2095 9.04751 21.4944 9.04751 24.2944C9.04751 34.1144 14.885 36.3154 20.4375 36.9629C19.7225 37.6029 19.075 38.7319 18.85 40.3894C17.425 41.0444 13.805 42.178 11.575 38.2605C11.575 38.2605 10.2525 35.7976 7.7425 35.6176C7.7425 35.6176 5.305 35.5853 7.5725 37.1753C7.5725 37.1753 9.21 37.9628 10.3475 40.9252C10.3475 40.9252 11.815 45.5001 18.77 43.9501C18.7825 46.0926 18.805 48.1119 18.805 48.7219C18.805 49.3994 18.345 50.1923 17.0975 49.9548C7.16249 46.5673 0 36.9573 0 25.6323C0 11.4748 11.195 0 25 0Z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/gabyplasencia/" target='_blank' aria-label={t("ariaLinkedin")} className="footer__link">
                        <svg alt="logo linkedin" aria-hidden="true" className="footer__link-icon"  viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.9035 40.9005H33.7845V29.7615C33.7845 27.105 33.7395 23.688 30.0855 23.688C26.382 23.688 25.8165 26.583 25.8165 29.571V40.9005H18.705V17.994H25.53V21.126H25.6275C26.577 19.3245 28.899 17.4255 32.3625 17.4255C39.5715 17.4255 40.9035 22.1685 40.9035 28.338V40.9005ZM10.6785 14.865C8.391 14.865 6.5475 13.0155 6.5475 10.7355C6.5475 8.457 8.391 6.6075 10.6785 6.6075C12.9555 6.6075 14.805 8.457 14.805 10.7355C14.805 13.0155 12.9555 14.865 10.6785 14.865ZM14.2395 40.9005H7.113V17.994H14.2395V40.9005ZM46.0005 0H2.001C0.8955 0 0 0.8955 0 1.9995V45.999C0 47.1045 0.8955 48 2.001 48H46.0005C47.1045 48 48 47.1045 48 45.999V1.9995C48 0.8955 47.1045 0 46.0005 0Z"/>
                        </svg>
                    </a>
            </div>
            <p className="footer__visits">{t("visitada")} <span id="visits">{visits}</span> {t("veces")}</p>
        </footer>
    )
}

export default Footer;