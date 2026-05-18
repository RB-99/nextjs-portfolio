"use client";

import Image from "next/image";
import { useState } from "react";

export default function SkeletonCardImage({ src, alt }: { src: string; alt: string; }) {
    const [loaded, setLoaded] = useState(false);
    // <Image src={project.image} alt={project.title} fill className='object-cover />

    return (
        <div className="h-full relative overflow-hidden bg-gray-300">
            {!loaded && (
                <div className="object-cover absolute inset-0 animate-pulse bg-gray-300" />
            )}

            <Image src={src} alt={alt} fill onLoad={() => setLoaded(true)} className={`h-full object-cover group-hover:scale-105 transition duration-75 ${loaded ? "opacity-100" : "opacity-0"}`}/>
        </div>
    );
}
