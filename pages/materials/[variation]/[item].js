import { MaterialItemFull } from "@components/Materials/MaterialsUtils/MaterialsItemFull";

export default function MaterialItem({ data }) {
    if (!data) {
        return <div>Loading...</div>;
    }

    return <MaterialItemFull data={data} />;
}

export async function getStaticPaths() {
    const res = await fetch(
        "https://mineral-backend.centarnit.live/material_group"
    );
    const data = await res.json();

    const paths = data
        .map((materialGroup) => {
            return materialGroup.items.map((materialType) => {
                return {
                    params: {
                        variation: materialGroup.name,
                        item: materialType.name,
                    },
                };
            });
        })
        .flat();

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(
        `https://mineral-backend.centarnit.live/material_type/${params.variation}/${params.item}`
    );
    const data = await res.json();

    return { props: { data } };
}
