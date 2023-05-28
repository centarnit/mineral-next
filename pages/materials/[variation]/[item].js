import { MaterialItemFull } from "@components/Materials/MaterialsUtils/MaterialsItemFull";
import { fetchMinerals } from "utils/scripts/fetchMaterials";

export async function getStaticPaths() {
    const minerals = await fetchMinerals();

    const paths = [];
    minerals.forEach((mineral) => {
        mineral.variations.forEach((variation) => {
            mineral.items.forEach((item) => {
                paths.push({
                    params: {
                        variation: variation.toLowerCase(),
                        item: item.toLowerCase(),
                    },
                });
            });
        });
    });

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

    const type =
        mineral && mineral.items.find((item) => item.name === params.item);

    return {
        props: {
            type,
        },
    };
}

export default function MineralTypePage({ type }) {
    return <MaterialItemFull data={type} />;
}
