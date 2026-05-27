import { FaNodeJs } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

import { VERSION } from "@/app/version";

export default function Footer() {
    return (
        <div className='sidebar-footer flex-col sticky justify-center'>
            <div className='mt-auto border-t border-zinc-800 p-4 text-xs text-zinc-500 space-y-1'>
                <div className='flex justify-center'>Robin Buhlmann, {VERSION.date.toLocaleDateString('de-DE')}</div>
                <div className='flex justify-center'>v{VERSION.major}.{VERSION.minor}.{VERSION.patch}{VERSION.name ? ` - ${VERSION.name}` : ''}</div>
                <div className='flex justify-center'>Created using&nbsp;<TbBrandNextjs className='w-4 h-4 mt-0.5' /><FaNodeJs className='w-4 h-4 mt-0.5' /></div>
            </div>
        </div>
    );
}
