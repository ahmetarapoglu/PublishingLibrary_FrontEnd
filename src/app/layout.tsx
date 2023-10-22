import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { store } from '../../store';
import { Providers } from '../../store/provider';
import { ConfigProvider } from 'antd';
import AuthProvider from '../../components/auth/client-provider';
import { getServerSession } from "next-auth/next"
import { authOptions } from './api/auth/[...nextauth]/route';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookShop',
  description: 'BookShop',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          <Providers store={store}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#5b3f9a',
                  borderRadius: 4,
                },
                components: {
                  Table: {
                    headerBg: "#f5f8ff"
                  },
                  Layout: {
                    // siderBg: "#fff"
                  },
                  Dropdown: {
                  }
                },
              }}
            >
              {children}
            </ConfigProvider>
          </Providers>
        </AuthProvider>
      </body>
    </html >
  )
}