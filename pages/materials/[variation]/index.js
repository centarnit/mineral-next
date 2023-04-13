import { MaterialsGroup } from "@components/Materials/MaterialsUtils/MaterialsGroup";

export default function Materials({ data, params }) {
    return <MaterialsGroup data={data} />;
}

export async function getStaticPaths() {
    const res = await fetch(
        "https://mineral-backend.centarnit.live/material_group/"
    );
    const data = await res.json();

    const paths = data.map((material) => ({
        params: { variation: material.name },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(
        `https://mineral-backend.centarnit.live/material_group/`
    );
    const data = (await res.json()).filter(
        (item) => item.name === params.variation
    )[0];

    return {
        props: {
            data,
            params,
        },
    };
}
