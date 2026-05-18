import Link from 'next/link';
import Image from 'next/image';

import { Project } from '@/app/lib/types';
import { FrontMatter } from '@/utils/project-utils';
import SkeletonCardImage from './image-skeleton';

export default function ProjectCard({ project }: { project: FrontMatter }) {
    return (
        <Link href={`/project/${project.slug}`} className='group'>
            <div className='h-full rounded-sm overflow-hidden border border-zinc-300 hover:border-zinc-400 shadow-sm hover:shadow-lg transition'>
                <div className='flex-1 relative h-44 md:h-48 lg:h-60 xl:h-80 w-full overflow-hidden'>
                    <SkeletonCardImage src={project.image} alt={project.title}></SkeletonCardImage>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                        <div className="flex flex-wrap gap-2 mb-2">
                            {project.stack?.map((tag) => (
                                <span key={tag} className='text-xs px-2 py-1 rounded-r-full bg-white/20 text-white backdrop-blur-md'>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>{project.title}</h2>
                    <p className='text-sm mt-2'>{project.preview}</p>
                </div>
            </div>
        </Link>
    );
};

//<Image src={project.image} alt={project.title} fill className='object-cover transition-transform duration-1000 group-hover:scale-105'/>
