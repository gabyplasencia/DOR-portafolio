import React from 'react';
import { useState } from 'react';
import { useTranslation } from "react-i18next";

const ContactForm = () => {
    const { t } = useTranslation(); 

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const nameHandler = (evento) => {
    setName(evento.target.value);
    };
    const emailHandler = (evento) => {
    setEmail(evento.target.value);
    };
    const messageHandler = (evento) => {
        setMessage(evento.target.value);
    };

    const send= () => {
        alert(`${t("hola")} ${name}. ${t("enviado")}: ${message}. ${t("contacto")} ${email}`)
    }

    return (
        <section className="contactame" id="contactame" >
            <h2 className="section__title">{t("contactame")}</h2>
            <form className="contact__form" method="/" onSubmit={send}>
                <label htmlFor="name">{t("nombre")}</label>
                <input type="text" id="name" name="name" value={name} placeholder={t("placeholderNombre")} required onChange={nameHandler}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} placeholder="maria@email.com" required onChange={emailHandler}/>

                <label htmlFor="message">{t("mensaje")}</label>
                <textarea id="message" name="message" value={message} placeholder={t("placeholderMensaje")} required onChange={messageHandler}></textarea>

                <button type="submit" className="contact__btn">{t("enviar")}</button>
            </form>
        </section>
    )
}

export default ContactForm;