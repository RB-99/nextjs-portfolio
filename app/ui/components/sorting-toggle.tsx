"use client";

import { BsSortAlphaDown } from "react-icons/bs";
import { BsSortNumericDown } from "react-icons/bs";

type Sorting = "alphabetical" | "date";

type Props = {
    sorting: Sorting;
    setSorting: (value: Sorting) => void;
};

export default function SortSegmentedControl({
    sorting,
    setSorting,
}: Props) {
    return (
        <div className="flex border-zinc-500 rounded-l-sm p-0 w-fit">
            <button
                onClick={() => setSorting("date")}
                className={`px-3 py-1 text-sm transition-all hover:bg-zinc-500 ${sorting === "date"
                    ? "bg-zinc-500 shadow text-zinc-100"
                    : "text-zinc-600"
                    }`}
            >
                <BsSortNumericDown className='w-6 h-6' />
            </button>

            <button
                onClick={() => setSorting("alphabetical")}
                className={`px-3 py-1 text-sm transition-all hover:bg-zinc-500 ${sorting === "alphabetical"
                        ? "bg-zinc-500 shadow text-zinc-100"
                        : "text-zinc-600"
                    }`}
            >
                <BsSortAlphaDown className='w-6 h-6' />
            </button>
        </div>
    );
}
