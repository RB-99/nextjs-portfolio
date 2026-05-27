
import '@/app/ui/components/sidebar/sidebar.css'

import Link from 'next/link';

import { IoPersonOutline } from "react-icons/io5";
import { TbUserQuestion } from "react-icons/tb";
import { CiViewList } from "react-icons/ci";
import { TbMailQuestion } from "react-icons/tb";
import { FaXing } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { GrDocumentTest } from "react-icons/gr";
import { FaRegFilePdf } from "react-icons/fa6";
import { LiaOrcid } from "react-icons/lia";
import { SiAcm } from "react-icons/si";
import { FaRegLightbulb } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { useState } from 'react';
import { usePathname } from "next/navigation";

import SidebarSearch from './sidebar-search';
import SidebarSkillMatrix from './sidebar-skill-matrix';
import SidebarSkill from './sidebar-skill';
import { User } from './animated-icons/User';
import { FileStack } from './animated-icons/FileStack';
import { AtSign } from './animated-icons/AtSign';
import { Braces } from './animated-icons/Braces';
import SidebarContent from './sidebar-button';

import { navigation } from '@/app/lib/navigation';
import Footer from '../footer';

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className='sidebar'>
            <a className='sidebar-header' href={pathname === '/' ? '#' : '/'}>Robin Buhlmann</a>
            <div className='flex-1 overflow-y-scroll'>
                <nav aria-label="Sidebar" className='sidebar-nav'>
                    {navigation.map(s => (
                        <div key={s.id} className='mb-0 pb-0'>
                            <hr className={`border-zinc-500 mx-auto h-px w-full`} />
                            <SidebarContent openDefault={s.id === 'about'} text={s.label} icon={s.icon} content={s.content} />
                        </div>
                    ))}
                    <hr className={`border-zinc-500 mx-auto h-px w-full`} />
                </nav>
            </div>
            <Footer />
        </aside>
    );
}
