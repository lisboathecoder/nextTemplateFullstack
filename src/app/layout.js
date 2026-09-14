import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Header from '@/components/Header.jsx';
import { Toaster } from 'react-hot-toast';

export const metadata = {
    title: 'FrontEnd Fullstack',
    description: 'Template de fullstack com Next.js 14, Ant Design e React Hot Toast.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body>
                <Header />
                <AntdRegistry>{children}</AntdRegistry>
                <Toaster />
            </body>
        </html>
    );
}
