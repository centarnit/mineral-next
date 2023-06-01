import Link from "next/link";

export const Locations = () => {
    const data = [
        {
            title: "Slovenia",
            name: "Popdpeč 46",
            address: "Sl-1352 Preserje",
            state: "Slovenia",
            phone: "+386 1 363 32 58",
        },
        {
            title: "Slovenia",
            name: "Prodaja Popdpeč",
            address: "Popdpeč 46",
            state: "Sl-1352 Preserje",
            phone: "+386 1 363 10 45",
        },
        {
            title: "Slovenia",
            name: "Prodaja Cezlak",
            address: "Cezlak 15",
            state: "Sl-2317 Oplotnica",
            phone: "+386 2 801 91 03",
        },
    ];
    return (
        <div className="locations">
            <div className="heading">
                <h1>{t("landing_locations.title")}</h1>
            </div>
            <div className="items">
                {data.map((item) => (
                    <div className="item">
                        <h1>{item.title}</h1>
                        <p>{item.name}</p>
                        <p>{item.address}</p>
                        <p>{item.state}</p>
                        <Link href={`tel: ${item.phone}`}>
                            Tel: {item.phone}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
