import Link from 'next/link';

export default function PortfolioHeader() {
    return (
        <div className='container mx-auto flex items-center border-b-2 px-6 py-2 h-20'>
            <div className='mr-20'>
                <h1 className='font-bold whitespace-nowrap'>Robin Buhlmann</h1>
            </div>
            <div className='grow'>
                <div className='flex items-center justify-center gap-3 md:gap-8'>
                    <Link href="projects">Projects</Link>
                    <Link href="about">About</Link>
                </div>
            </div>
            <Link className='float-right mx-20' href="contact">Contact</Link>
        </div>
    );
}
