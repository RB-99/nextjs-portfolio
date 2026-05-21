import { motion } from "motion/react";
import { useState } from "react";

import '@/app/ui/styles/colors.css';
import '@/app/ui/components/sidebar/sidebar.css';

export default function SidebarContent({ openDefault, text, icon, content }: { openDefault: boolean, text: string, icon: React.ReactElement, content: React.ReactElement }) {
    const [open, setOpen] = useState<boolean>(openDefault);

    return (
        <div>
            <motion.button initial="normal" whileTap="animate" animate="normal" className='sidebar-button cursor-pointer flex w-full text-center px-3 h-12 mt-2 mb-2 left-0 items-center my-auto bg-surface-gradient' type='button' onClick={() => setOpen(!open)}>
                {icon} <p className='m-auto ml-3 flex items-center h-full text-base font-semibold'>{text}</p>
            </motion.button>

            {/* https://theosoti.com/blog/height-transition/ */}
            <div className={`sidebar-content grid overflow-hidden transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className='px-3 py-3 text-justify overflow-hidden'>{content}</div>
            </div>
        </div>
    );
}
