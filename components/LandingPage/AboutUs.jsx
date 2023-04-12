import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const AboutUs = () => {
    const { t } = useTranslation("landing_page");

    return (
        <div className="about-home">
            <div className="about-text">
                <h1>{t("landing_about.title")}</h1>
                <p>{t("landing_about.description")}</p>
                <Link href="/about">
                    <button>
                        {t("landing_about.button")}
                        <IconChevronRight className="chevron" size={30} />
                    </button>
                </Link>
            </div>
            <div className="about-images">
                {[1, 2, 3, 4].map((item) => (
                    <div className={`item item-${item}`}></div>
                ))}
            </div>
        </div>
    );
};
