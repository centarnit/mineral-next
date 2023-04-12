import Link from "next/link";
import { useRouter } from "next/router";

const Item = (props: { data: any; group: string }) => {
    return (
        <Link
            href={`/materials/${props.group}/${props.data.name}`}
            className="materials-group-item"
        >
            <img src={props.data.front_image} />
            <h1>{props.data.name}</h1>
        </Link>
    );
};

export const MaterialsGroup = () => {
    return (
        <div id="materials-group">
            {/* <div className="info">
                <div className="text">
                    <h1>
                        {materialGroup.name[0].toUpperCase() +
                            materialGroup.name.slice(1)}
                    </h1>
                    <p>{materialGroup.description}</p>
                </div>
            </div>
            <div className="items">
                {materialGroup.items.map((item: any) => {
                    return <Item data={item} group={materialGroup.name} />;
                })}
            </div> */}
        </div>
    );
};
