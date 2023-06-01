import { Anchor, Breadcrumbs } from "@mantine/core";
import { IconEdit, IconNews, IconPlus, IconUpload } from "@tabler/icons-react";

const ActionCard = (props) => {
    return (
        <a className="action-icon" href={props.path}>
            {props.icon}
            <h2>{props.title}</h2>
        </a>
    );
};

export const Dashboard = () => {
    const breadcrumbs = [{ title: "Panel", href: "/admin" }].map(
        (item, index) => (
            <Anchor href={item.href} key={index}>
                {item.title}
            </Anchor>
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
