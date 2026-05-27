import Link from 'next/link';
import { FaGithub, FaRegFilePdf, FaXing } from 'react-icons/fa6';
import { SiAcm } from 'react-icons/si';
import { TbMailQuestion } from 'react-icons/tb';
import { LiaOrcid } from 'react-icons/lia';
import { User } from '../ui/components/sidebar/animated-icons/User';
import { Braces } from '../ui/components/sidebar/animated-icons/Braces';
import SidebarSkillMatrix from '../ui/components/sidebar/sidebar-skill-matrix';
import SidebarSkill from '../ui/components/sidebar/sidebar-skill';
import { FileStack } from '../ui/components/sidebar/animated-icons/FileStack';
import { AtSign } from '../ui/components/sidebar/animated-icons/AtSign';

export const navigation = [
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
                <SidebarSkill skill="C++" />
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
            <hr className='sidebar-hr m-3' />
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
