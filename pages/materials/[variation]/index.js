import { MaterialsGroup } from "@components/Materials/MaterialsUtils/MaterialsGroup";
import { fetchMinerals } from "utils/scripts/fetchMaterials";

export async function getStaticPaths() {
    const minerals = await fetchMinerals();

    const paths = minerals.map((mineral) => ({
        params: {
            variation: mineral.name.toLowerCase(),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const minerals = await fetchMinerals();

    const mineral = minerals.find(
        (mineral) => mineral.name === params.variation
    );

    return {
        props: {
            mineral,
        },
    };
}

export default function MineralTypePage({ mineral }) {
    return <MaterialsGroup data={mineral} />;
}
