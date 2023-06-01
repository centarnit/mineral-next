import { colGroupProperties } from "@fluentui/react";
import { Button, FileInput, Modal, TextInput, Textarea } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

const ItemsRow = (props) => {
    return (
        <div className="items-row">
            <div className="heading">
                <h2>{props.title}</h2>
                <div
                    className="add"
                    onClick={() => {
                        props.setCurrentItem(props.currentItem);
                        console.log(props.currentItem);
                        document
                            .querySelector(".modal")
                            .classList.add("extended");
                    }}
                >
                    <IconPlus />
                </div>
            </div>
            <div className="items">
                {props.state.map((item, index) => {
                    return (
                        <div key={index} className="item">
                            <h6>{item.id}</h6>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const CreateMaterialModal = (props) => {
    const [blockItems, setBlockItems] = useState([]);
    const [slabItems, setSlabItems] = useState([]);
    const [currentItem, setCurrentItem] = useState(false);

    return (
        <Modal
            className="modal"
            title="Add an item"
            opened={props.opened}
            onClose={() => {
                props.setOpened(false);
            }}
            size="md"
        >
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    props.setItems([
                        ...props.items,
                        {
                            name: event.currentTarget.Material_Name.value,
                            description: event.currentTarget.Description.value,
                            image: event.currentTarget.image.files[0],
                        },
                    ]);
                }}
            >
                <div className="row">
                    <TextInput
                        label="Name"
                        name="Material_Name"
                        required
                        placeholder="Name"
                        className="input"
                        onChange={(event) => {
                            console.log(event.currentTarget.value);
                        }}
                    />
                    <FileInput
                        label="Image"
                        name="image"
                        required
                        placeholder="Choose image"
                        className="input"
                        onChange={(event) => {
                            console.log(event.currentTarget.files[0]);
                        }}
                    />
                </div>
                <Textarea
                    placeholder="Description"
                    label="Description"
                    name="Description"
                    className="input"
                    withAsterisk
                    required
                />
                <ItemsRow
                    state={blockItems}
                    setState={setBlockItems}
                    title="Blocks"
                    setCurrentItem={setCurrentItem}
                    currentItem={false}
                />
                <ItemsRow
                    state={slabItems}
                    setState={setSlabItems}
                    title="Slabs"
                    setCurrentItem={setCurrentItem}
                    currentItem={true}
                />
                <div className="button">
                    <Button
                        type="submit"
                        className="button"
                        color="dark"
                        onClick={() => {
                            props.setOpened(false);
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </form>
            <form id="material-helper-form">
                <TextInput
                    label="Block ID"
                    name="Material_Type_ID"
                    required
                    placeholder="Block ID"
                    className="input"
                    onChange={(event) => {
                        console.log(event.currentTarget.value);
                    }}
                />
                <TextInput
                    label="Finish"
                    name="Material_Type_Finish"
                    required
                    placeholder="Finish"
                    className="input"
                    onChange={(event) => {
                        console.log(event.currentTarget.value);
                    }}
                />

                <TextInput
                    label="LPH"
                    name="Material_Type_LPH"
                    required
                    placeholder="LPH"
                    className="input"
                    onChange={(event) => {
                        console.log(event.currentTarget.value);
                    }}
                />
                <TextInput
                    label="PCS"
                    name="Material_Type_PCS"
                    required
                    placeholder="PCS"
                    className="input"
                    onChange={(event) => {
                        console.log(event.currentTarget.value);
                    }}
                />
                <TextInput
                    label="QTY"
                    name="Material_Type_QTY"
                    required
                    placeholder="QTY"
                    className="input"
                    onChange={(event) => {
                        console.log(event.currentTarget.value);
                    }}
                />
                <TextInput
                    label="UM"
                    name="Material_Type_UM"
                    required
                    placeholder="UM"
                    className="input"
                    onChange={(event) => {
                        console.log(event.currentTarget.value);
                    }}
                />
                <TextInput
                    label="Weight"
                    name="Material_Type_Weight"
                    required
                    placeholder="Weight"
                    className="input"
                    onChange={(event) => {
                        console.log(event.currentTarget.value);
                    }}
                />
                <div className="buttons">
                    <Button
                        className="button"
                        color="dark"
                        onClick={() => {
                            const data = {
                                id: document.querySelector(
                                    "#material-helper-form"
                                ).Material_Type_ID.value,
                                finish: document.querySelector(
                                    "#material-helper-form"
                                ).Material_Type_Finish.value,
                                lph: document.querySelector(
                                    "#material-helper-form"
                                ).Material_Type_LPH.value,
                                pcs: document.querySelector(
                                    "#material-helper-form"
                                ).Material_Type_PCS.value,
                                qty: document.querySelector(
                                    "#material-helper-form"
                                ).Material_Type_QTY.value,
                                um: document.querySelector(
                                    "#material-helper-form"
                                ).Material_Type_UM.value,
                                weight: document.querySelector(
                                    "#material-helper-form"
                                ).Material_Type_Weight.value,
                            };
                            if (currentItem === false) {
                                setBlockItems([...blockItems, data]);
                            } else {
                                setSlabItems([...slabItems, data]);
                            }
                            document
                                .querySelector(".modal")
                                .classList.remove("extended");
                        }}
                    >
                        Add
                    </Button>
                    <Button
                        type="submit"
                        className="button"
                        color="dark"
                        onClick={() => {
                            document
                                .querySelector(".modal")
                                .classList.remove("extended");
                        }}
                    >
                        Close
                    </Button>
                </div>
            </form>
        </Modal>
    );
};
