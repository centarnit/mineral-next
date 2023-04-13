import { useTranslation } from "react-i18next";

export const Reference = () => {
    const { t } = useTranslation("reference");
    return (
        <div className="reference">
            <div className="background">
                <h1>{t("title")}</h1>
            </div>
            <div className="reference-container">
                <div className="buildings">
                    <h1>{t("items.item1")}</h1>
                    <div className="items">
                        <div className="item-1"></div>
                        <div className="item-2"></div>
                        <div className="item-3"></div>
                        <div className="item-4"></div>
                    </div>
                </div>
                <div className="hotel">
                    <h1>{t("items.item2")}</h1>
                    <div className="items">
                        <div className="item-1"></div>
                        <div className="item-2"></div>
                        <div className="item-3"></div>
                        <div className="item-4"></div>
                    </div>
                </div>
                <div className="vila">
                    <h1>{t("items.item3")}</h1>
                    <div className="items">
                        <div className="item-1"></div>
                        <div className="item-2"></div>
                        <div className="item-3"></div>
                        <div className="item-4"></div>
                        <div className="item-5"></div>
                    </div>
                </div>
                <div className="spomenik">
                    <h1>{t("items.item4")}</h1>
                    <div className="items">
                        <div className="item-1"></div>
                        <div className="item-2"></div>
                        <div className="item-3"></div>
                        <div className="item-4"></div>
                    </div>
                </div>
                <div className="hotel-2">
                    <h1>{t("items.item5")}</h1>
                    <div className="items">
                        <div className="item-1"></div>
                        <div className="item-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
