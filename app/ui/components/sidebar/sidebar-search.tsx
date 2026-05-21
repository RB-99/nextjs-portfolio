"use client"

import { useProjectFilter } from "@/app/context/project-filter-context";

import { CiSearch } from "react-icons/ci";

import '@/app/ui/components/sidebar/sidebar.css';
import SortSegmentedControl from "../sorting-toggle";
import { useState } from "react";

export default function SidebarSearch() {
    const { projectFilter, setTextFilter, setSorting } = useProjectFilter();
    const [ active, setActive ] = useState<boolean>(false);

    return (
        <div className={`mb-1 border-2 border-zinc-900 bg-zinc-800 w-full text-base font-semibold flex flex-row ${active ? 'h-10' : 'h-0'}`}>
            <CiSearch className={`h-6 m-auto ${active ? 'w-20 p-0 text-zinc-100' : 'w-10 pl-0 text-zinc-400'} transition-all duration-300`} />
            <input value={projectFilter.filter}
                type='text'
                placeholder='Search...'
                className={`bg-[transparent] border-none outline-none w-full text-lg focus:ring-0 ${active ? 'text-zinc-100' : 'text-zinc-400'}`}
                onChange={(e) => {setTextFilter(e.target.value); setActive(e.target.value !== '')}}
                onFocus={(e) => setActive(true)}
                onBlur={(e) => setActive(e.target.value !== '')}
            />
            <SortSegmentedControl sorting={projectFilter.sorting} setSorting={setSorting} />
        </div>
    );
}
