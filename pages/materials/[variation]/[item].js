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
    // const data = await res.json();

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
    const data = (await res.json()).filter(
        (item) => item.name === params?.variation // use optional chaining to avoid errors
    )[0];

    // filter out the item we want
    const item = data.items.filter(
        (item) => item.name === params?.item // use optional chaining to avoid errors
    )[0];

    return {
        props: {
            data: item,
            params,
        },
    };
}
