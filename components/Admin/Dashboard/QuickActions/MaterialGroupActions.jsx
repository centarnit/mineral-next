import { Button, FileInput, TextInput, Textarea } from "@mantine/core";
import axios from "axios";

export const MaterialGroupActions = () => {
    const API_URL = "http://localhost:8000/material_group";

    return (
        <div className="dashboard-container">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    // extract image, name, description from event.currentTarget
                    const data = new FormData();
                    data.append("image", event.currentTarget.image.files[0]);
                    data.append("name", event.currentTarget.name.value);
                    data.append(
                        "description",
                        event.currentTarget.description.value
                    );

                    axios.post(API_URL, data).then((response) => {
                        console.log(response);
                    });
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
                    name="name"
                    required
                    placeholder="Name"
                    className="input"
                    onChange={(event) => {
                        console.log(event.currentTarget.value);
                    }}
                />
                <Textarea
                    placeholder="Your comment"
                    label="Your comment"
                    className="input"
                    withAsterisk
                    required
                />
                <Button type="submit" className="button" color="dark">
                    Submit
                </Button>
            </form>
        </div>
    );
};
