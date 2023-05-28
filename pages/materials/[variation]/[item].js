import { MaterialItemFull } from "@components/Materials/MaterialsUtils/MaterialsItemFull";
import { fetchMinerals } from "utils/scripts/fetchMaterials";

export async function getStaticPaths() {
    const minerals = await fetchMinerals();

    const paths =
        minerals &&
        minerals.flatMap((mineral) =>
            mineral.items.map((item) => ({
                params: {
                    variation: mineral.name,
                    item: item.name,
                },
            }))
        );

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

    const type = mineral.items.find((item) => item.name === params.item);

    return {
        props: {
            type,
        },
    };
}

export default function MineralTypePage({ type }) {
    return <MaterialItemFull data={type} />;
}
