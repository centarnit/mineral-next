import { useState } from "react";
import { Form } from "./Form";
import { Dashboard } from "./Dashboard/Dashboard";

export const Admin = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
            {(typeof window !== "undefined" &&
                window.sessionStorage.getItem("token")) ||
            loggedIn ? (
                <Dashboard />
            ) : (
                <Form setLoggedIn={setLoggedIn} />
            )}
        </>
    );
};
