import { useTranslation } from "react-i18next";

export const About = () => {
    const { t } = useTranslation("about");
    return (
        <div className="about">
            <div className="background">
                <h1>{t("title")}</h1>
            </div>
            <div className="items">
                <div className="info">
                    <p>{t("text")}</p>
                </div>
                <div className="image"></div>
            </div>
        </div>
    );
};
