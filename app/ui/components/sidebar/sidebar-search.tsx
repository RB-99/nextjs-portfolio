import { CiSearch } from "react-icons/ci";

export default function SidebarSearch() {
    return (
        <div className='mb-4 mt-3'>
            <div className='rounded-md border-2 border-zinc-500 mt-2 w-full h-10 flex flex-row'>
                <CiSearch className='h-8 pl-1 my-auto w-fit' />
                <input type='text' placeholder='Search Portfolio...' className='bg-[transparent] border-none outline-none w-full'></input>
            </div>
        </div>

    );
}
