import Link from 'next/link';
import Image from 'next/image';

import { Project } from '@/app/lib/types';
import { FrontMatter } from '@/utils/project-utils';
import SkeletonCardImage from './image-skeleton';
import { useProjectFilter } from '@/app/context/project-filter-context';

import '@/app/ui/components/project-card.css'

export default function ProjectCard({ project }: { project: FrontMatter }) {
    const { projectFilter, setTextFilter } = useProjectFilter();

    return (
        <div className='project-card'>
            <Link href={`/project/${project.slug}`} className='group'>
                <div className='flex-1 relative h-44 md:h-48 lg:h-60 xl:h-80 w-full overflow-hidden'>
                    <SkeletonCardImage src={project.image} alt={project.title}></SkeletonCardImage>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                    <div className="absolute top-0 left-0 p-4 w-full">
                        <div className="flex flex-wrap gap-2 mb-2">
                            {
                                project.ongoing
                                    ? (<span className='text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 text-white font-semibold backdrop-blur-md'>Ongoing</span>)
                                    : (<span className='text-xs px-2 py-1 rounded-full bg-zinc-400 text-white font-semibold backdrop-blur-md'>{new Date(project.date).toLocaleDateString()}</span>)
                            }
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                        <div className="flex flex-wrap gap-2 mb-2">
                            {project.stack?.map((tag) => (
                                <span key={tag}
                                    className='text-xs px-2 py-1 rounded-r-full bg-white/20 text-white backdrop-blur-md hover:bg-zinc-400'
                                    onClick={(e) => {
                                        if (!projectFilter.filter.toLocaleLowerCase().includes('tag:' + tag.toLowerCase())) {
                                            setTextFilter((projectFilter.filter !== '' ? projectFilter.filter + ' ' : projectFilter.filter) + 'tag:' + tag);
                                        }
                                        e.stopPropagation();
                                        e.preventDefault();
                                    }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='px-4 py-2'>
                    <h1>{project.title}</h1>
                    <p className='mt-2'>{project.preview}</p>
                </div>
            </Link>
        </div>
    );
};

//<Image src={project.image} alt={project.title} fill className='object-cover transition-transform duration-1000 group-hover:scale-105'/>
