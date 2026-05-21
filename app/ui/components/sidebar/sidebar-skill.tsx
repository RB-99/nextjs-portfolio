import { useProjectFilter } from '@/app/context/project-filter-context';

import '@/app/ui/components/sidebar/sidebar.css'

export default function SidebarSkill({ skill }: { skill: string }) {
    const { projectFilter, setTextFilter } = useProjectFilter();
    const setTagFilter = (e: any) => {
        if (!projectFilter.filter.toLocaleLowerCase().includes('tag:' + skill.toLowerCase())) {
            setTextFilter((projectFilter.filter !== '' ? projectFilter.filter + ' ' : projectFilter.filter) + 'tag:' + skill);
        }
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <button className='skill text-nowrap' onClick={setTagFilter}>{skill}</button>
    );
}
