import { useRouter } from "next/router";

interface Block {
    blockId: string;
    finish: string;
    lph: string;
    pcs: string;
    qty: string;
    um: string;
    weight: string;
}

const SpecificationsData = [
    "Wheight for unit of volume",
    "Water absorption",
    "Compressive strength",
    "Compressive strength after freezing",
    "Strength to bending",
    "Thermal linear expansion coefficient",
    "Min fall height",
];

const SpecificationTable = (props: { data: Block[] }) => {
    return (
        <table className="block-table">
            <tr>
                <td>Block ID</td>
                <td>Finish</td>
                <td>LPH</td>
                <td>PCS</td>
                <td>QTY</td>
                <td>UM</td>
                <td>Weight</td>
            </tr>
            {props.data &&
                Object.values(props.data).map((value) => {
                    return (
                        <tr>
                            {Object.values(value).map((value: any) => {
                                return <td>{value}</td>;
                            })}
                        </tr>
                    );
                })}
        </table>
    );
};

export const MaterialItemFull = () => {
    const { materialType }: any = useRouter().query;

    return (
        <div className="material-item-full">
            {/* <div className="background">
                <h1>{materialTypeData.name.toUpperCase()}</h1>
            </div>
            <div className="stock">
                <div className="blocks">
                    <h1>Blocks {materialTypeData.name}</h1>
                    <SpecificationTable data={materialTypeData.blocks} />
                </div>
            </div>
            <div className="specifications">
                <div className="specifications-data">
                    {materialTypeData.specifications &&
                        Object.values(materialTypeData.specifications).map(
                            (value: any, index: number) => {
                                return (
                                    <div className="specification">
                                        <h1>{SpecificationsData[index]}</h1>
                                        <p>{value}</p>
                                    </div>
                                );
                            }
                        )}
                </div>
            </div> */}
        </div>
    );
};
