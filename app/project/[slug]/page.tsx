import path from 'node:path'

import Link from 'next/link';

import { getProjectFrontMatter, getProjectMainMatter } from '@/utils/project-utils';
import { MDXRemote } from "next-mdx-remote/rsc";

import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

import '@/app/project/[slug]/page.css'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = await getProjectMainMatter(slug);
    return (
        <div className='w-full flex flex-col h-screen'>
            <div className='flex-grow'>
                <MDXRemote source={project} />
            </div>
            <Link className='text-zinc-100 flex font-semibold w-full border-0 min-w-full sticky m-auto align-bottom h-10 bg-gradient-to-l from-zinc-800 to-zinc-900 hover:from-zinc-600 hover:to-zinc-800 opacity-0 animate-slideIn' href="/">
                <MdKeyboardDoubleArrowLeft className='ml-4 w-10 h-10'/><p className='flex justify-center pl-10 my-auto'>Return to Projects</p>
            </Link>
        </div>
    )
}

export async function generateStaticParams() {
    let frontmatter = await getProjectFrontMatter();
    return frontmatter
        .filter((p) => typeof p.slug === "string" && p.slug.length > 0)
        .map((p) => ({
            slug: p.slug,
        }));
}

export const dynamicParams = false;
