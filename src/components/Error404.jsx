import React from 'react';
import { useTranslation } from "react-i18next";

const Error404 = () => {
    const { t } = useTranslation();
    return (
        <section id="error">
            <p>{t("error")}</p>
        </section>
    )
}

export default Error404