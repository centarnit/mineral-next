// import { MaterialItemFull } from "@components/Materials/MaterialsUtils/MaterialsItemFull";

export default function MaterialsItem({ data }) {
    // return <MaterialItemFull data={data} />;
    return <div>MaterialItem</div>;
}

// export async function getStaticPaths() {
//     const res = await fetch(
//         "https://mineral-backend.centarnit.live/material_group"
//     );
//     const data = await res.json();

//     const paths = data.reduce((acc, material) => {
//         const variations = material.items.map((item) => ({
//             params: {
//                 variation: material.name,
//                 item: item.name,
//             },
//         }));
//         return [...acc, ...variations];
//     }, []);

//     return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//     const { variation, item } = params;

//     const res = await fetch(
//         `https://mineral-backend.centarnit.live/material_group/`
//     );
//     const data = await res.json();

//     const materialGroup = data.find((group) => group.name === variation);

//     const materialItem = materialGroup.items.find((i) => i.name === item);

//     return {
//         props: {
//             data: materialItem,
//         },
//     };
// }
