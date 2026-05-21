import fs from 'node:fs';
import path from 'node:path'

export type FrontMatter = {
    title:      string;
    preview:    string;
    image:      string;
    stack:      string[];
    slug:       string;
    date:       Date;
    ongoing:    boolean;
};

export async function getProjectFrontMatter() {
    let frontmatter: FrontMatter[] = [];
    const dir = path.join(process.cwd(), 'public', 'project');

    fs.readdirSync(dir)
        .filter((file) => path.extname(file) === '.json')
        .forEach((file) => {
            const data = fs.readFileSync(path.join(dir, file), { encoding: 'utf8' });
            frontmatter.push(JSON.parse(data));
        });

    return frontmatter;
}

export async function getProjectMainMatter(slug: string) {
    const dir = path.join(process.cwd(), 'public', 'project');
    return fs.readFileSync(path.join(dir, slug + '.mdx'), { encoding: 'utf8' });
}
