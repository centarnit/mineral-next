import { useTranslation } from "react-i18next";

export const Offers = () => {
    const { t } = useTranslation("landing_page");
    const data = [
        {
            id: 1,
            title: t("landing_offers.item1.title"),
            description: t("landing_offers.item1.description"),
            classname: "item-1",
        },
        {
            id: 2,
            title: t("landing_offers.item2.title"),
            description: t("landing_offers.item2.description"),
            classname: "item-2",
        },
        {
            id: 3,
            title: t("landing_offers.item3.title"),
            description: t("landing_offers.item3.description"),
            classname: "item-3",
        },
    ];
    return (
        <div className="offers">
            <div className="heading">
                <h1>What we offer</h1>
            </div>
            <div className="offers-container">
                {data.map((item, index) => (
                    <div
                        className={
                            index % 2 !== 0
                                ? `item ${item.classname} item-reverse`
                                : `item ${item.classname}`
                        }
                    >
                        <div className="image"></div>
                        <div className="text">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
