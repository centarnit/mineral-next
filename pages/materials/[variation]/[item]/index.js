import { MaterialItemFull } from "@components/Materials/MaterialsUtils/MaterialsItemFull";

export default function Materials({ data }) {
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

    const paths = data.reduce((acc, material) => {
        const variations = material.items.map((item) => ({
            params: {
                variation: material.name,
                item: item.name,
            },
        }));
        return [...acc, ...variations];
    }, []);

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { variation, item } = params;

    const res = await fetch(
        `https://mineral-backend.centarnit.live/material_group/`
    );
    const data = await res.json();

    // find the material group with the same name as the variation param
    const materialGroup = data.find((group) => group.name === variation);

    // find the material item with the same name as the item param
    const materialItem = materialGroup.items.find((i) => i.name === item);

    return {
        props: {
            data: materialItem || null,
        },
    };
}
