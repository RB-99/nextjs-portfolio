export default function SidebarButton({ text, icon }: { text: string, icon: React.ReactElement }) {
    return (
        <div>
            <button className='sidebar-link flex w-full text-center mt-2 mb-2' type='button'>
                {icon}{text}
            </button>
        </div>
    );
}
