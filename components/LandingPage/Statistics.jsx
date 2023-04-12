import { Carousel } from "@mantine/carousel";
import { useTranslation } from "react-i18next";

const ImageCarousel = (props) => {
    return (
        <Carousel
            sx={{ maxWidth: 600 }}
            mx="auto"
            withIndicators
            height={550}
            styles={{
                indicator: {
                    width: 20,
                    height: 4,
                    transition: "width 250ms ease",
                    position: "relative",
                    bottom: 0,

                    "&[data-active]": {
                        width: 50,
                    },
                },
            }}
            className="carousel-container"
        >
            {props.data.map((item) => (
                <Carousel.Slide className={`item-${item}`}></Carousel.Slide>
            ))}
        </Carousel>
    );
};

export const Statistics = () => {
    const { t } = useTranslation("landing_page");
    const items = ["1", "2", "3"];
    const data = [
        { number: 77, text: t("landing_statistics.item1.description") },
        { number: 2, text: t("landing_statistics.item2.description") },
        { number: 1800, text: t("landing_statistics.item3.description") },
        { number: 50, text: t("landing_statistics.item4.description") },
    ];
    return (
        <div className="statistics">
            <div className="background-1"></div>
            <div className="background-2">
                <div className="carousel">
                    <ImageCarousel data={items} />
                </div>
                <div className="statistics-data">
                    <h1>{t("landing_statistics.title")}</h1>
                    <p>{t("landing_statistics.description")}</p>
                    <div className="data">
                        {data.map((item) => (
                            <div className="item">
                                <h1>{item.number}</h1>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="background-3"></div>
        </div>
    );
};
