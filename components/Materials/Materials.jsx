import NextImage from "next/image";
import Link from "next/link";

export const Materials = (props) => {
    return (
        <div className="materials">
            <div className="materials-content">
                {props.data.map((materialGroup) => {
                    return (
                        <Link href={`/materials/${materialGroup.name}`}>
                            <NextImage
                                src={`https://mineral-backend.centarnit.live/material_group/image/${materialGroup.name}`}
                                width={100}
                                height={100}
                            />
                            <h1>{materialGroup.name.toUpperCase()}</h1>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
