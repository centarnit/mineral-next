import "../../utils/styles/pages/quarry.scss";
import { useTranslation } from "react-i18next";

const Item = (props: {
    className?: string;
    title: string;
    description: string;
}) => {
    return (
        <div className={props.className}>
            <div className="placeholder">
                <div className="background"></div>
            </div>
            <div className="placeholder">
                <div className="info">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export const Quarry = () => {
    const { t } = useTranslation("quarry");
    return (
        <div className="quarry">
            <div className="background">
                <h1>{t("title")}</h1>
            </div>
            <div className="items">
                <Item
                    className="item"
                    title="Cezlak"
                    description={t("items.item1.description")}
                />
                <Item
                    className="item item-reverse"
                    title="Lesno Brdo"
                    description={t("items.item2.description")}
                />
                <Item
                    className="item"
                    title="Drenov Grič"
                    description={t("items.item3.description")}
                />
            </div>
            <div className="image">
                <h1>Podpeč</h1>
            </div>
        </div>
    );
};
