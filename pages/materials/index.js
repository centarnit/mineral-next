import { Materials } from "@components/Materials/Materials";

export default function MaterialsPage({ data }) {
    return <Materials data={data} />;
}

export async function getStaticProps() {
    const res = await fetch(
        "https://mineral-backend.centarnit.live/material_group"
    );
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
}
