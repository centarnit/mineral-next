import { MaterialsGroup } from "@components/Materials/MaterialsUtils/MaterialsGroup";

export default function Materials({ data }) {
    if (!data) {
        return <div>Loading...</div>;
    }

    return <MaterialsGroup data={data} />;
}

export async function getStaticPaths() {
    const res = await fetch(
        "https://mineral-backend.centarnit.live/material_group/"
    );
    const data = await res.json();
    if (!Array.isArray(data)) {
        return { paths: [], fallback: false };
    }
    const paths = data.map((material) => ({
        params: { variation: material.name },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(
        `https://mineral-backend.centarnit.live/material_group/${params?.variation}`
    );

    const data = await res.json();

    return {
        props: {
            data: data,
            params,
        },
    };
}
