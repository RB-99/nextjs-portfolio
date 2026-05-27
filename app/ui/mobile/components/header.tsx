import { useState } from 'react';

import '@/app/ui/components/sidebar/sidebar.css'
import { navigation } from '@/app/lib/navigation';
import { FaList } from 'react-icons/fa6';

export default function PortfolioHeader() {
    // this should probably be it's own state provider that also affects the sidebar-states, so resizing with open sections is seamless... but header only accepts 1 open at a time while sidebar can have multiple open tabs...
    const [section, setSection] = useState<string>(navigation[0].id);
    const [smMenuOpen, setSmMenuOpen] = useState<boolean>(false);

    return (
        <div className='sticky top-0 left-0 right-0 z-40 lg:hidden'>
            <div className='flex flex-wrap md:w-auto items-center justify-center border-0 bg-zinc-900 text-zinc-50'>
                <h1 className='font-semibold whitespace-nowrap px-2 pl-4'>Robin Buhlmann</h1>

                <div className='hidden md:block flex-1' />

                {/* MD Navigation */}
                <div className='flex w-fit justify-end h-14 pr-1'>
                    {navigation.map(s => (
                        <button
                            key={s.id}
                            className={`flex items-center justify-center gap-2 h-full w-fit px-3 bg-linear-to-b ${section === s.id ? 'from-zinc-700 to-zinc-800' : ''} cursor-pointer whitespace-nowrap`}
                            onClick={() => setSection(section === s.id ? '' : s.id)}>
                            {s.icon}<p className='hidden md:block sm:block'>{s.label}</p>
                        </button>
                    ))}
                </div>

                {/* SM Navigation */}
                {/*
                <div className='flex md:hidden lg:hidden w-full justify-end h-14 pr-1'>
                    <button className={'flex items-center justify-center w-14 h-14 cursor-pointer'} onClick={() => setSmMenuOpen(!smMenuOpen)}><FaList className={'w-9 h-9'} /></button>
                </div>
                */}
            </div>

            {/* MD Navigation Info */}
            <div className='block backdrop-blur-sm'>
                {navigation.map(s => (
                    <div key={s.id} className={`bg-zinc-800 text-zinc-50 grid overflow-hidden border-0 transition-all duration-300 justify-center ${section === s.id ? "grid-rows-[1fr] opacity-90" : "grid-rows-[0fr] opacity-90"}`}>
                        <div className='rounded-b-lg px-10 py-3 text-justify overflow-hidden flex'>
                            {s.content}
                        </div>
                    </div>
                ))}
            </div>

            {/* SM Navigation Info */}
            {/*
            <div className={`${smMenuOpen ? 'block' : 'hidden'} bg-zinc-800 h-10 w-10`}>

            </div>
            */}
        </div>
    );
}
