import NextImage from "next/image";
import Link from "next/link";

const sanityIoImageLoader = ({ src, width, quality }) => {
    return `https://cdn.sanity.io/${src}?w=${width}&q=${quality || 75}`;
};

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
                                loader={sanityIoImageLoader}
                            />
                            <h1>{materialGroup.name.toUpperCase()}</h1>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
