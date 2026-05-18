import ProjectCard from './project-card';
import { FrontMatter } from '@/utils/project-utils';

export default async function ProjectGrid({ projects }: { projects: FrontMatter[] }) {
    return (
        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4'>
            {projects.map((p) => ( <ProjectCard key={p.preview} project={p} /> ))}
        </div>
    );
};
