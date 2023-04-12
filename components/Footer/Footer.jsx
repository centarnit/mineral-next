import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconMail,
    IconMapPin,
    IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation("footer");
    return (
        <div className="footer">
            <div className="input">
                <div className="heading">
                    <h1>{t("sign_up")}</h1>
                </div>
                <form
                    className="sign-up"
                    action="mailto:office@mineral.si?subject=Request%20for%20news%20letter&body=Dear%2C%0D%0A%0D%0AI%20would%20like%20to%20receive%20your%20newest%20news%20letter."
                >
                    <input type="text" placeholder="Email: " />
                    <button type="submit">{t("button")}</button>
                </form>
            </div>

            <div className="info">
                <div className="contact">
                    <h1>{t("heading1")}</h1>
                    <div className="item">
                        <IconPhone className="icon" />
                        <Link href="tel:+386 1 363 32 58">
                            +386 1 363 32 58
                        </Link>
                    </div>
                    <div className="item">
                        <IconMail className="icon" />
                        <Link href="mailto:mineral@mineral.si">
                            mineral@mineral.si
                        </Link>
                    </div>
                    <div className="item">
                        <IconMapPin className="icon" />
                        <a>Podpeč 46/ Slovenija</a>
                    </div>
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
                </div>
            </div>
        </div>
    );
};
