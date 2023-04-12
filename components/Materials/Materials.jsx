import Image from "next/image";
import Link from "next/link";

export const Materials = (props) => {
    console.log(props.data);
    return (
        <div className="materials">
            <div className="materials-content">
                {props.data.map((materialGroup) => {
                    return (
                        <Link href={`/materials/${materialGroup.name}`}>
                            <Image
                                src={`https://mineral-backend.centarnit.live/material_group/image/${materialGroup.name}`}
                                width={500}
                                height={500}
                            />
                            <h1>{materialGroup.name.toUpperCase()}</h1>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
