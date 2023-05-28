import { fetchMinerals } from "utils/scripts/fetchMaterials";
import { Materials } from "@components/Materials/Materials";

export async function getStaticProps() {
    const minerals = await fetchMinerals();

    return {
        props: {
            minerals,
        },
        revalidate: 86400, // Set a revalidation period (in seconds) for incremental static regeneration
    };
}

export default function MineralsPage({ minerals }) {
    return <Materials data={minerals} />;
}
