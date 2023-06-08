import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconMenu2,
    IconPhone,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Link from "next/link";

const HeaderItems = (props) => {
    const { t } = useTranslation("header");

    const data = [
        {
            name: t("items_div.link1"),
            href: "/",
        },
        {
            name: t("items_div.link2"),
            href: "/materials",
        },
        {
            name: t("items_div.link3"),
            href: "/reference",
        },
        {
            name: t("items_div.link4"),
            href: "/quarry",
        },
        {
            name: t("items_div.link5"),
            href: "/about",
        },
        {
            name: t("items_div.link6"),
            href: "/contact",
        },
    ];

    return (
        <>
            {data.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.href}
                        onClick={() => props?.setState(false)}
                    >
                        <p>{item.name}</p>
                    </Link>
                );
            })}
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
                    <Link href="tel:+386 1 363 32 58">+386 1 363 32 58</Link>
                </div>
                <div className="social">
                    <div className="icons">
                        <Link
                            href="https://www.facebook.com/MineralPodpec/"                            target="_blank"
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
                    <HeaderItems setState={setOpened} />
                </div>
                <div className="hamburger" onClick={() => setOpened(!opened)}>
                    <IconMenu2 size={25} className="icon" />
                </div>
            </div>
            {opened === true && (
                <div className="dropdown">
                    <HeaderItems setState={setOpened} />
                </div>
            )}
        </div>
    );
};
