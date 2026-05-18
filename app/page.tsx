import ProjectGrid from './ui/components/project-grid';
import { getProjectFrontMatter } from '@/utils/project-utils';
import PortfolioSidebar from './ui/components/sidebar/sidebar';

export default async function IndexPage() {
    const projects = await getProjectFrontMatter();

    return (
        <main className='flex-1 p-6'>
            <ProjectGrid projects={projects} />
        </main>
    );
};
