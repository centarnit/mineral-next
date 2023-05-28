import { MaterialItemFull } from "@components/Materials/MaterialsUtils/MaterialsItemFull";
import { fetchMinerals } from "utils/scripts/fetchMaterials";

export async function getServerSidePaths() {
    const minerals = await fetchMinerals();

    // Create an array of paths for each combination of variation and item
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

export async function getServerSideProps({ params }) {
    // Fetch the minerals data (replace with your actual implementation)
    const minerals = await fetchMinerals();

    // Find the specific mineral based on the provided variation parameter
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
