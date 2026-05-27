import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function MobileInfoButton() {
    const [open, setOpen] = useState<boolean>(false);

    return (<div className="">
        <button onClick={() => setOpen(!open)} className="fixed bottom-0 right-0 z-50 lg:hidden w-20 h-20 bg-zinc-900 rounded-tl-2xl">
            <FaBars className="text-zinc-50 pl-5 w-15 h-15"/>
        </button>
    </div>);
}
