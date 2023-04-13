import { useTranslation } from "react-i18next";
import Link from "next/link";

export const Contact = () => {
    const { t } = useTranslation("contact");
    const offices = [
        {
            name: "Slovenia",
            address: "Podpeč 46",
            street: "Sl-1352 Preserje",
            state: "Slovenia",
            phone: "+386 1 363 32 56",
        },
        {
            name: "Slovenia",
            address: "Prodaja Podpeč",
            street: "Podpeč 46",
            state: "Sl-1352 Preserje",
            phone: "+386 1 363 10 45",
        },
        {
            name: "Slovenia",
            address: "Prodaja Cezlak",
            street: "Cezlak 15",
            state: "Sl-2137 Oplotnica",
            phone: "+386 2 801 91 03",
        },
    ];

    return (
        <div className="contact-div">
            <div className="background">
                <h1>{t("title")}</h1>
            </div>
            <form action="mailto:mineral@mineral.si">
                <div className="inputs">
                    <input type="text" placeholder={String(t("form.input1"))} />
                    <input type="text" placeholder={String(t("form.input2"))} />
                </div>
                <textarea
                    cols={30}
                    rows={10}
                    placeholder={String(t("form.input3"))}
                ></textarea>
                <button type="submit">{String(t("form.button"))}</button>
            </form>
            <div className="offices">
                <h1>{t("offices.title")}</h1>
                <p>{t("offices.description")}</p>
                <div className="cards">
                    {offices.map((office, index) => (
                        <div className="card" key={index}>
                            <h1>{office.name}</h1>
                            <p>{office.address}</p>
                            <p>{office.street}</p>
                            <p>{office.state}</p>
                            <Link href={`tel:${office.phone}`}>
                                {office.phone}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.7498296595195!2d14.41865085815234!3d45.97318376945048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ad4b0d8d96521%3A0xff926dd989ddde55!2zUG9kcGXEjSA0NiwgMTM1MiBQcmVzZXJqZSwg0KHQu9C-0LLQtdC90LjRmNCw!5e0!3m2!1ssr!2srs!4v1676542528235!5m2!1ssr!2srs"></iframe>
            </div>
        </div>
    );
};
