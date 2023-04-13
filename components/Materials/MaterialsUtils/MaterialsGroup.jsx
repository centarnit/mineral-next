import Link from "next/link";
import NextImage from "next/image";

const Item = (props) => {
    return (
        <Link
            href={`/materials/${props.group}/${props.data.name}`}
            className="materials-group-item"
        >
            <NextImage
                src={props.data.front_image}
                width={500}
                height={500}
                loading="lazy"
            />
            <h1>{props.data.name}</h1>
        </Link>
    );
};

export const MaterialsGroup = (props) => {
    console.log(props);
    return (
        <div id="materials-group">
            <div className="info">
                <div className="text">
                    <h1>
                        {props.data.name[0].toUpperCase() +
                            props.data.name.slice(1)}
                    </h1>
                    <p>{props.data.description}</p>
                </div>
            </div>
            <div className="items">
                {props.data.items.map((item) => {
                    return <Item data={item} group={props.data.name} />;
                })}
            </div>
        </div>
    );
};
