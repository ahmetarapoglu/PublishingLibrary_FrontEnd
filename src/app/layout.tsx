import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LayoutPage from '../../components/Layout/page'
import { store } from '../../store';
import { Providers } from '../../store/provider';
import { ConfigProvider } from 'antd';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookShop',
  description: 'BookShop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
              },
            }}
          >
            <LayoutPage>
              {children}
            </LayoutPage>
          </ConfigProvider>
        </Providers>

      </body>
    </html >
  )
}
