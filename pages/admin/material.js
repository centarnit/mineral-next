import { CreateMaterial } from "@components/Admin/Pages/CreateMaterial";

export default function AdminMaterialPage() {
    if (
        typeof window !== "undefined" &&
        window.sessionStorage.getItem("token")
    ) {
        return <CreateMaterial />;
    } else {
        if (typeof window !== "undefined") {
            window.location.assign("/admin");
        }
    }
}
