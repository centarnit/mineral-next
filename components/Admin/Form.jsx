import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from "@mantine/core";
import axios from "axios";
import { useState } from "react";

export function Form(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleClick = () => {
        axios
            .post(
                "http://localhost:8000/auth/login",
                new URLSearchParams({
                    grant_type: "",
                    username: username,
                    password: password,
                    scope: "",
                    client_id: "",
                    client_secret: "",
                })
            )
            .then((response) => {
                props.setState(true);
                window.sessionStorage.setItem(
                    "token",
                    response.data.access_token
                );
            });
    };

    return (
        <Container size={420} my={40}>
            <Title
                align="center"
                sx={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    fontWeight: 900,
                })}
            >
                Welcome back!
            </Title>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput
                    label="Username"
                    placeholder="you@mantine.dev"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    required
                    mt="md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button fullWidth mt="xl" onClick={handleClick} color="dark">
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}
