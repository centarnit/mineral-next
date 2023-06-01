import {
    Anchor,
    Breadcrumbs,
    Button,
    FileInput,
    Modal,
    TextInput,
    Textarea,
} from "@mantine/core";
import { IconPlus, IconX } from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";
import { CreateMaterialModal } from "../Utils/CreateMaterialModal";

const ItemsRow = (props) => {
    return (
        <div className="items-row">
            <div className="add">
                <IconPlus />
            </div>
            {props.items.map((item, index) => {
                return (
                    <div key={index}>
                        <h1></h1>
                    </div>
                );
            })}
        </div>
    );
};

export const CreateMaterial = () => {
    const API_URL = "https://mineral-si-backend.onrender.com/material_group";
    const [items, setItems] = useState([]);
    const [opened, setOpened] = useState(false);

    let data = new FormData();

    const breadcrumbs = [
        { title: "Panel", href: "/admin" },
        { title: "Create A Material", href: "/admin/material" },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

    return (
        <div className="dashboard-container">
            <Breadcrumbs separator=">>">{breadcrumbs}</Breadcrumbs>
            <CreateMaterialModal
                opened={opened}
                setOpened={setOpened}
                setItems={setItems}
                items={items}
            />

            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    try {
                        data.append(
                            "file",
                            event.currentTarget.image.files &&
                                event.currentTarget.image.files[0]
                        );

                        data.append(
                            "name",
                            event.currentTarget.Material_Name.value
                        );
                        data.append(
                            "description",
                            event.currentTarget.Description.value
                        );

                        data.append("items", []);

                        axios
                            .post(API_URL, data, {
                                headers: {
                                    Authorization: `Bearer ${window.sessionStorage.getItem(
                                        "token"
                                    )}`,
                                },
                            })
                            .then((response) => {
                                for (let x of items) {
                                    const typeData = new FormData();

                                    typeData.append("front_image", x.image);
                                    typeData.append("background", x.image);
                                    typeData.append("name", x.name);
                                    typeData.append(
                                        "description",
                                        x.description
                                    );
                                    typeData.append(
                                        "material_group",
                                        data.get("name")
                                    );
                                    typeData.append("images", []);

                                    axios.post(
                                        "https://mineral-si-backend.onrender.com/material_type",
                                        typeData,
                                        {
                                            headers: {
                                                Authorization: `Bearer ${window.sessionStorage.getItem(
                                                    "token"
                                                )}`,
                                            },
                                        }
                                    );
                                }
                            });
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
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
                <Textarea
                    placeholder="Description"
                    label="Description"
                    name="Description"
                    className="input"
                    withAsterisk
                    required
                />
                <h1>Material Items</h1>
                <div className="items">
                    <div
                        className="add"
                        onClick={() => {
                            setOpened(true);
                        }}
                    >
                        <IconPlus />
                    </div>
                    {items.map((item, index) => {
                        return (
                            <div
                                className="material-type-item"
                                key={index}
                                style={{
                                    backgroundImage: `url(${URL.createObjectURL(
                                        item.image
                                    )}`,
                                }}
                            >
                                <IconX
                                    onClick={() => {
                                        setItems(
                                            items.filter((_, i) => i !== index)
                                        );
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
                <Button className="button" color="dark" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};
