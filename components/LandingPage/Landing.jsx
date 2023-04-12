import { useTranslation } from "react-i18next";

export const Landing = () => {
    const { t } = useTranslation("landing_page");
    return (
        <div className="landing">
            <div className="landing-content">
                <h1>
                    {t("title")}{" "}
                    <span className="highlight">{t("highlight")}</span>
                </h1>
                <p>{t("description")}</p>
                <a href="about">{t("landing_button")}</a>
            </div>
        </div>
    );
};
