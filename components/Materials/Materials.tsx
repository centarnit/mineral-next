import Link from "next/link";
export const Materials = (props: { data: any }) => {
    console.log(props.data);
    return (
        <div className="materials">
            <div className="materials-content">
                {/* {props.data.map((materialGroup: any) => {
                    return (
                        <Link href={`/materials/${materialGroup.name}`}>
                            <img
                                src={`https://mineral-backend.centarnit.live/material_group/image/${materialGroup.name}`}
                                loading="lazy"
                            />
                            <h1>{materialGroup.name.toUpperCase()}</h1>
                        </Link>
                    );
                })} */}
            </div>
        </div>
    );
};
