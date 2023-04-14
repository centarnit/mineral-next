import { MaterialItemFull } from "@components/Materials/MaterialsUtils/MaterialsItemFull";

export default function MaterialsItem({ data }) {
    if (!data) {
        return <div>Loading...</div>;
    }
    console.log(data);
    return <MaterialItemFull data={data} />;
}

export async function getStaticPaths() {
    const res = await fetch(
        "https://mineral-backend.centarnit.live/material_group/"
    );

    const data = res.json();

    if (!Array.isArray(data)) {
        return { paths: [], fallback: false };
    }
    const paths = data.map((material) => ({
        params: { variation: material.name, item: material.name },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(
        `https://mineral-backend.centarnit.live/material_group/`
    );
    const data = (await res.json())
        .filter((item) => item.name === params?.variation)[0]
        .items.filter((item) => item.name === params?.item)[0];

    return {
        props: {
            data: data,
            params,
        },
    };
}
