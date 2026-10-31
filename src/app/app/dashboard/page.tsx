"use client";

import {
    ArrowRightOutlined,
    BookOutlined,
    FileTextOutlined,
    ShoppingCartOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Col, Row, Space, Tag, Typography } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

const { Paragraph, Text, Title } = Typography;

interface AdminArea {
    description: string;
    href: string;
    icon: ReactNode;
    title: string;
}

const adminAreas: AdminArea[] = [
    {
        title: "Catalog",
        description: "Manage books, authors, categories, and available editions.",
        href: "/app/book",
        icon: <BookOutlined />,
    },
    {
        title: "Orders",
        description: "Review orders and keep fulfillment details up to date.",
        href: "/app/order",
        icon: <ShoppingCartOutlined />,
    },
    {
        title: "Invoices",
        description: "View invoices and monitor completed transactions.",
        href: "/app/invoice",
        icon: <FileTextOutlined />,
    },
    {
        title: "Users & branches",
        description: "Control user accounts and publishing branch records.",
        href: "/app/user",
        icon: <TeamOutlined />,
    },
];

const Page = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const displayName = session?.user?.name || session?.user?.email || "Administrator";

    return (
        <main className="admin-dashboard">
            <section className="admin-hero">
                <div>
                    <Tag color="purple">ADMIN WORKSPACE</Tag>
                    <Title level={1}>Welcome back, {displayName}</Title>
                    <Paragraph>
                        Keep your publishing library organized from one central workspace.
                    </Paragraph>
                    <Space wrap>
                        <Button type="primary" size="large" onClick={() => router.push("/app/book")}>
                            Manage books
                        </Button>
                        <Button size="large" onClick={() => router.push("/app/order")}>
                            View orders
                        </Button>
                    </Space>
                </div>
                <div className="admin-hero-mark" aria-hidden="true">
                    <BookOutlined />
                </div>
            </section>

            <section className="admin-section" aria-labelledby="management-heading">
                <div className="admin-section-heading">
                    <div>
                        <Text type="secondary">ADMINISTRATION</Text>
                        <Title id="management-heading" level={2}>Management areas</Title>
                    </div>
                    <Text type="secondary">Choose an area to get started</Text>
                </div>

                <Row gutter={[16, 16]}>
                    {adminAreas.map((area) => (
                        <Col xs={24} sm={12} xl={6} key={area.title}>
                            <Card
                                className="admin-area-card"
                                hoverable
                                onClick={() => router.push(area.href)}
                            >
                                <Avatar className="admin-area-icon" size={48} icon={area.icon} />
                                <Title level={3}>{area.title}</Title>
                                <Paragraph>{area.description}</Paragraph>
                                <Button type="link" className="admin-area-link">
                                    Open area <ArrowRightOutlined />
                                </Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            <Card className="admin-help-card">
                <div>
                    <Title level={3}>Need to add a new team member?</Title>
                    <Paragraph>
                        Create and manage administrator accounts from the users section.
                    </Paragraph>
                </div>
                <Button onClick={() => router.push("/app/user")}>Manage users</Button>
            </Card>
        </main>
    );
};

export default Page;
