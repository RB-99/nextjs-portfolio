"use client"

import '@/app/ui/global.css';

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

import { Roboto } from 'next/font/google'
import type { AppProps } from 'next/app'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

import { IBM_Plex_Sans } from "next/font/google";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

import PortfolioHeader from '@/app/ui/mobile/components/header';
import Sidebar from './ui/components/sidebar/sidebar';

import { ProjectFilterProvider } from './context/project-filter-context';
import SidebarSearch from './ui/components/sidebar/sidebar-search';

import { usePathname } from "next/navigation";
import MobileInfoButton from './ui/mobile/components/info-button';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa6';
import Footer from './ui/components/footer';

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const pathname = usePathname();

  return (
    <html lang="en" className={roboto.className}>
      <head></head>
      <body>
        <ProjectFilterProvider>
        <PortfolioHeader />
          <div className='flex lg:min-h-screen w-screen'>
          <Sidebar />
            <div className='flex flex-col w-screen min-h-screen'>
              {/*pathname === '/'
                ? (<div className='flex sticky top-0 z-50 w-full'><SidebarSearch /></div>)
                : (<div />)*/}
              {children}
          </div>
        </div>
        <div className='lg:hidden'>
            <Footer />
        </div>

        </ProjectFilterProvider>
      </body>
    </html>
  );
}
