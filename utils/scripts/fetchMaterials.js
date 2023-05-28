import axios from "axios";

export async function fetchMinerals() {
    try {
        const response = await axios.get(
            "https://mineral-si-backend.onrender.com/material_group/"
        );
        return response.data;
    } catch (error) {
        console.error("Failed to fetch minerals:", error);
        return [];
    }
}
