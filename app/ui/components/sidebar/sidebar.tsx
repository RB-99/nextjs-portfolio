"use client"

import Link from 'next/link';

import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
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
import { CiSearch } from "react-icons/ci";

import SidebarButton from './sidebar-button';
import SidebarSeparator from './sidebar-separator';

import '@/app/ui/components/sidebar/sidebar.css'
import { useState } from 'react';
import SidebarSearch from './sidebar-search';

const sections = [
    { id: "about", icon: (<CiViewList className='sidebar-icon' />), label: "About Me", content:
        "I'm a software engineer currently based around Frankfurt am Main, Germany. This website provides an overview of my current and past projects, both hobby projects and projects developed during my Bachelor's and Master's degrees."
    },
    { id: "skills", icon: (<FaRegLightbulb className='sidebar-icon' />), label: "Skills", content: ""
    },
    {
        id: "documents", icon: (<GrDocumentTest className='sidebar-icon' />), label: "Documents", content: (<div>
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
    { id: "contact", icon: (<IoPersonOutline className='sidebar-icon' />), label: "Contact",
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

export default function Sidebar() {
    const [section, setSection] = useState<string | null>("about");

    return (
        <aside className='sidebar'>
            <div className='sidebar-header'>Robin Buhlmann</div>
            <div className='flex-grow'>
                <nav aria-label="Sidebar" className='sidebar-nav'>
                    <SidebarSearch />
                    <hr className={`sidebar-hr border-2`} />
                    {sections.map(s => (
                        <div key={s.id} className='mb-0 pb-0'>
                            <button className={`sidebar-link flex w-full text-center ${section === s.id ? "border-t" : "border-0"}`} type='button' onClick={() => section === s.id ? setSection(null) : setSection(s.id)}>
                                {s.icon} <p>{s.label}</p>
                            </button>
                            <div className={`sidebar-content overflow-hidden transition-[max-height] ease-linear ${section === s.id ? "max-h-screen duration-300 pb-4 pt-4 border-b" : "max-h-0 duration-0 pb-0 border-0"}`}>
                                <div className='px-3 text-justify'>{s.content}</div>
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
            <div className='sidebar-footer flex-col justify-center'>
                <div className="mt-auto border-t border-zinc-800 p-4 text-xs text-zinc-500 space-y-1">
                    <div className='flex justify-center'>Robin Buhlmann</div>
                    <div className='flex justify-center'>v0.1.0 - PRE_CONTENT</div>
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
