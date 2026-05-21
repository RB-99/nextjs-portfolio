"use client"

import { useProjectFilter } from '@/app/context/project-filter-context';
import ProjectCard from './project-card';
import { FrontMatter } from '@/utils/project-utils';

export default function ProjectGrid({ projects }: { projects: FrontMatter[] }) {
    const { projectFilter } = useProjectFilter();

    const checkFilter = (p: FrontMatter) => {
        const filter = projectFilter.filter.toLowerCase();
        const filterWithoutTags = filter.split(' ').filter((f) => !f.includes('tag:'));
        const filterStringWithoutTags = filterWithoutTags.join(' ');

        const checkTags = () => {
            const filters = filter.split(' ').map((f) => f.toLowerCase());
            const tags = p.stack.map((t) => 'tag:' + t.toLowerCase());

            for (const f of filters) {
                if (!f.includes('tag:')) {
                    continue;
                }

                if (!tags.includes(f)) {
                    return false;
                }
            }

            return true;
        };

        return filterWithoutTags.length === 0
            ? checkTags()
            : ((p.preview.toLowerCase().includes(filterStringWithoutTags) || p.title.toLowerCase().includes(filterStringWithoutTags)) && checkTags())
    };

    const sortArray = (p: FrontMatter[]) => {
        return [...p].sort((p0, p1) => {
            if (projectFilter.sorting === "alphabetical") {
                return p0.title
                    .toLowerCase()
                    .localeCompare(p1.title.toLowerCase());
            }

            return (
                new Date(p1.date).getTime() - new Date(p0.date).getTime()
            );
        });
    }

    return (
        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4'>
            {sortArray(projects)
                .filter(checkFilter)
                .map((p) => ( <ProjectCard key={p.preview} project={p} /> ))}
        </div>
    );
};
