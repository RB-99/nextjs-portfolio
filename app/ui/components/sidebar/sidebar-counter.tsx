import { useState } from "react";

export default function SidebarCounter() {
    const [counter, setCounter] = useState<number>(0);

    return (
        <span className='m-4 flex border bg-zinc-800 border-zinc-500 rounded-lg'>
            <p className='w-full'>{counter}</p>
            <button className='w-fit px-2 border border-zinc-500 hover:bg-zinc-300' onClick={(e) => {setCounter(counter + 1)}}>Increase</button>
        </span>
    )
}
