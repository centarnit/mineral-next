import Link from "next/link";
import { Breadcrumbs } from "@mantine/core";
import { IconEdit, IconNews, IconPlus, IconUpload } from "@tabler/icons-react";

const ActionCard = (props) => {
    return (
        <Link className="action-icon" href={props.path}>
            {props.icon}
            <h2>{props.title}</h2>
        </Link>
    );
};

export const Dashboard = () => {
    const breadcrumbs = [{ title: "Panel", href: "/admin" }].map(
        (item, index) => (
            <Link href={item.href} key={index}>
                {item.title}
            </Link>
        )
    );
    return (
        <div className="dashboard-container">
            <Breadcrumbs className="breadcrumbs">{breadcrumbs}</Breadcrumbs>
            <div id="dashboard">
                <ActionCard
                    icon={<IconUpload />}
                    path="admin/material"
                    title="Create a Material"
                />
                <ActionCard
                    icon={<IconEdit />}
                    path="admin/material_type"
                    title="Edit a Material"
                />
                <ActionCard
                    icon={<IconNews />}
                    path="admin/news"
                    title="Write an article"
                />
            </div>
        </div>
    );
};
