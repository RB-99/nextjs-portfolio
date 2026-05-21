
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

export default function Sidebar() {
    const pathname = usePathname();

    const sections = [
        {
            id: "about", icon: (<User />), label: "About Me", content: (<div>
                    <p>I'm a full-stack software engineer based in Frankfurt am Main, Germany, working primarily with Java, JavaScript, C++, and C#.</p>
                    <p>At the moment, I'm developing this portfolio site as well as a Game Boy emulator as a personal project.</p>
                    <p>I'm especially interested in emulation, rendering systems, and geology.</p>
            </div>)
        },
        {
            id: "skills", icon: (<Braces />), label: "Skills", content: (<div className='flex flex-col'>
                <p className='font-semibold flex justify-center pb-2 pt-1'>Languages</p>
                <SidebarSkillMatrix>
                    <SidebarSkill skill="C++"/>
                    <SidebarSkill skill="C#" />
                    <SidebarSkill skill="Java" />
                    <SidebarSkill skill="JavaScript" />
                    <SidebarSkill skill="TypeScript" />
                </SidebarSkillMatrix>
                <p className='font-semibold flex justify-center pb-2 pt-3'>Miscellaneous</p>
                <SidebarSkillMatrix>
                    <SidebarSkill skill="Next.js" />
                    <SidebarSkill skill="SpringBoot" />
                    <SidebarSkill skill="Unity" />
                </SidebarSkillMatrix>
                <hr className='sidebar-hr m-3'/>
                <p className='text-sm text-center'>You can click on skills here and on cards to filter unrelated projects!</p>
            </div>)
        },
        {
            id: "documents", icon: (<FileStack />), label: "Documents", content: (<div>
                <div className='flex items-center gap-2 pb-3'>
                    <FaRegFilePdf className='sidebar-icon-small' />
                    <Link className='' rel="noopener noreferrer" target="_blank" href='/documents/MA_Thesis_RobinBuhlmann.pdf'>Master's Thesis</Link>
                </div>
                <div className='flex items-center gap-2 pb-3'>
                    <FaRegFilePdf className='sidebar-icon-small' />
                    <Link className='' rel="noopener noreferrer" target="_blank" href='/documents/BA_Thesis_RobinBuhlmann.pdf'>Bachelor's Thesis</Link>
                </div>
                <div className='flex items-center gap-2'>
                    <SiAcm className='sidebar-icon-small' />
                    <Link className='' rel="noopener noreferrer" target="_blank" href='https://dl.acm.org/doi/10.1145/3613904.3642154'>ThermoMap Paper</Link>
                </div>
            </div>)
        },
        {
            id: "contact", icon: (<AtSign />), label: "Contact",
            content: (<div>
                <div className='flex items-center gap-2 pb-3'>
                    <TbMailQuestion className='sidebar-icon-small' />
                    <Link className='' href='mailto:robin@buhlmann.me'>robin@buhlmann.me</Link>
                </div>
                <div className='flex items-center gap-2 pb-3'>
                    <FaXing className='sidebar-icon-small' />
                    <Link className='' href='https://www.xing.com/profile/Robin_Buhlmann2/'>Robin_Buhlmann2</Link>
                </div>
                <div className='flex items-center gap-2 pb-3'>
                    <FaGithub className='sidebar-icon-small' />
                    <Link className='' href='https://github.com/RB-99'>RB-99</Link>
                </div>
                <div className='flex items-center gap-2'>
                    <LiaOrcid className='sidebar-icon-small' />
                    <Link className='' href='https://orcid.org/0009-0000-5460-5249'>0009-0000-5460-5249</Link>
                </div>
            </div>)
        }
    ];


    return (
        <aside className='sidebar h-screen flex flex-col'>
            <a className='sidebar-header' href={pathname === '/' ? '#' : '/'}>Robin Buhlmann</a>
            <div className='flex-1 overflow-y-scroll'>
                <nav aria-label="Sidebar" className='sidebar-nav'>
                    {sections.map(s => (
                        <div key={s.id} className='mb-0 pb-0'>
                            <hr className={`border-zinc-500 mx-auto h-px w-full`} />
                            <SidebarContent openDefault={s.id === 'about'} text={s.label} icon={s.icon} content={s.content} />
                        </div>
                    ))}
                    <hr className={`border-zinc-500 mx-auto h-px w-full`} />
                </nav>
            </div>
            <div className='sidebar-footer flex-col sticky justify-center'>
                <div className="mt-auto border-t border-zinc-800 p-4 text-xs text-zinc-500 space-y-1">
                    <div className='flex justify-center'>Robin Buhlmann, {new Date().toLocaleDateString()}</div>
                    <div className='flex justify-center'>v0.1.1 - PRE_CONTENT</div> {/* TODO: this should really not be set directly here but in some config... */}
                    <div className='flex justify-center'>Created using&nbsp;<TbBrandNextjs className='w-4 h-4 mt-0.5' /><FaNodeJs className='w-4 h-4 mt-0.5' /></div>
                </div>
            </div>
        </aside>
    );
}

/*
                <div className='flex justify-center sidebar-header'>Robin Buhlmann</div>
                <SidebarButton text="Home" icon={<IoHomeOutline />}/>
                <SidebarSeparator />
                                <div className='sidebar-footer'></div>
                <SidebarButton text="Projects" icon={<CiViewList />} />
                <div className='flex justify-center sidebar-header'>Contact</div>
                <div className='flex justify-center sidebar-footer'>About</div>
*/
