import { useTranslation } from "react-i18next";

export const Events = () => {
    const { t } = useTranslation("landing_page");
    return (
        <div className="events">
            <div className="heading">
                <h1>{t("landing_news.title")}</h1>
            </div>
            <p>{t("landing_news.description")}</p>

            <div className="items">
                {[1, 2, 3].map((item, index) => (
                    <div className={`item item-${index + 1}`}>
                        <div className="image"></div>
                        <div className="text">
                            <p>{t(`landing_news.items.item${item}.type`)}</p>
                            <h1>{t(`landing_news.items.item${item}.title`)}</h1>
                            <p>
                                {t(
                                    `landing_news.items.item${item}.description`
                                )}
                            </p>
                            <button>{t(`landing_news.items.button`)}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
