import { fetchMinerals } from "utils/scripts/fetchMaterials";
import { Materials } from "@components/Materials/Materials";

export async function getServerSideProps() {
    const minerals = await fetchMinerals();

    return {
        props: {
            minerals,
        },
    };
}

export default function MineralsPage({ minerals }) {
    return <Materials data={minerals} />;
}
