import './globals.css'
import { Poppins } from 'next/font/google'
import TailwindMaterialProvider from '@/providers/tailwindMaterial'
import Header from '../components/Header'
import ToastProvider from '@/providers/toast'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'PR Sistemas',
  description: 'Agenda de contatos Processo Seletivo PR Sistemas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastProvider>
          <TailwindMaterialProvider>
            <Header />
            {children}
          </TailwindMaterialProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
