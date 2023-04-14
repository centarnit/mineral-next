const SpecificationsData = [
    "Wheight for unit of volume",
    "Water absorption",
    "Compressive strength",
    "Compressive strength after freezing",
    "Strength to bending",
    "Thermal linear expansion coefficient",
    "Min fall height",
];

const SpecificationTable = (props) => {
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
                            {Object.values(value).map((value) => {
                                return <td>{value}</td>;
                            })}
                        </tr>
                    );
                })}
        </table>
    );
};

export const MaterialItemFull = (props) => {
    console.log(props);
    return (
        <div className="material-item-full">
            <div className="background">
                <h1>{props.data.name.toUpperCase()}</h1>
            </div>
            <div className="stock">
                <div className="blocks">
                    <h1>Blocks {props.data.name}</h1>
                    <SpecificationTable data={props.data.blocks} />
                </div>
            </div>
            <div className="specifications">
                <div className="specifications-data">
                    {props.data.specifications &&
                        Object.values(props.data.specifications).map(
                            (value, index) => {
                                return (
                                    <div className="specification" key={index}>
                                        <h1>{SpecificationsData[index]}</h1>
                                        <p>{value}</p>
                                    </div>
                                );
                            }
                        )}
                </div>
            </div>
        </div>
    );
};
