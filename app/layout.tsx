import '@/app/ui/global.css';

import PortfolioHeader from '@/app/ui/components/header';
import Sidebar from './ui/components/sidebar/sidebar';

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className='flex min-h-screen'>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
