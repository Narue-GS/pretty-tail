import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from "@/lib/registry"
import { TipsContext, TipsProvider } from '@/hooks/useTips'
import { ThemeProvider } from '@/hooks/useTheme'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <TipsProvider>
            <StyledComponentsRegistry>
              {children}
            </StyledComponentsRegistry>
          </TipsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
