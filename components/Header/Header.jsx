import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconMenu2,
    IconPhone,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Link from "next/link";

const HeaderItems = () => {
    const { t } = useTranslation("header");

    return (
        <>
            <Link href="/">{t("items_div.link1")}</Link>
            <Link href="/materials">{t("items_div.link2")}</Link>
            <Link href="/reference">{t("items_div.link3")}</Link>
            <Link href="/quarry">{t("items_div.link4")}</Link>
            <Link href="/about">{t("items_div.link5")}</Link>
            <Link href="/contact">{t("items_div.link6")}</Link>
        </>
    );
};

export const Header = () => {
    const { i18n } = useTranslation("header");
    const [opened, setOpened] = useState(false);

    const handleLanguageChange = (event) => {
        const language = event.target.value;
        i18n.changeLanguage(language);
    };

    return (
        <div className="header">
            <div className="contact">
                <div className="phone">
                    <IconPhone className="icon" />
                    <Link href="tel:+381646132794">+381 (0) 64 6132794</Link>
                </div>
                <div className="social">
                    <div className="icons">
                        <Link
                            href="https://www.facebook.com/MineralPodpec/"
                            target="_blank"
                        >
                            <IconBrandFacebook className="icon" stroke={1} />
                        </Link>
                        <Link
                            href="https://www.instagram.com/mineral.slovenia/"
                            target="_blank"
                        >
                            <IconBrandInstagram className="icon" stroke={1} />
                        </Link>
                    </div>
                    <div className="languages">
                        <select
                            onChange={handleLanguageChange}
                            value={i18n.language}
                        >
                            <option value="sl">SL</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="links">
                <div className="logo">
                    <Link className="icon" href="/"></Link>
                </div>
                <div className="items">
                    <HeaderItems />
                </div>
                <div className="hamburger" onClick={() => setOpened(!opened)}>
                    <IconMenu2 size={25} className="icon" />
                </div>
            </div>
            {opened === true && (
                <div className="dropdown">
                    <HeaderItems />
                </div>
            )}
        </div>
    );
};
