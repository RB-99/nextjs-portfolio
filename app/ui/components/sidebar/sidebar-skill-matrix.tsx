import '@/app/ui/components/sidebar/sidebar.css'



export default function SidebarSkillMatrix({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-wrap items-center justify-center gap-2'>
            {children}
        </div>
    );
}
