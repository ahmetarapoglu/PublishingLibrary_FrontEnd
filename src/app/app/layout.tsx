"use client"
import { useRouter } from "next/navigation"
import LayoutPage from "../../../components/Layout/page"
import { useSession } from "next-auth/react"
import { path } from "../../../service/path"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    const { data: session } = useSession();

    if (session == null) {
        router.push(path.login)
        return
    }

    return (
        <LayoutPage>
            {children}
        </LayoutPage>
    )
}