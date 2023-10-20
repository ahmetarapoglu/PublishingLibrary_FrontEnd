"use client"
import LayoutPage from "../../../components/Layout/page"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <LayoutPage>
            {children}
        </LayoutPage>
    )
}