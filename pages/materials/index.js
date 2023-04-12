import { Materials } from "@components/Materials/Materials";

export default function MaterialsPage({ data }) {
    return <Materials data={data} />;
}

// write getServersideProps
export async function getServerSideProps() {
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
