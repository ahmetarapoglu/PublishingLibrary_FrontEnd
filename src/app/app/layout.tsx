"use client"
import { useRouter } from "next/navigation"
import LayoutPage from "../../../components/Layout/page"
import { path } from "../../../service/path"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    // const token = window?.localStorage.getItem("token")
    // if (!token) router.push(path.login)
    return (
        <LayoutPage>
            {children}
        </LayoutPage>
    )
}