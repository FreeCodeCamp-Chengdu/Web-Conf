#! /usr/bin/env -S npx tsx

import { readdir, writeFile } from 'fs/promises';
import { basename, extname, join } from 'path';

const folder = process.argv[2] || '.';

(async () => {
    const list = await readdir(folder);

    const code = list
        .map(file => {
            const name = basename(file, extname(file))
                .replace(/\W+/g, '_')
                .replace(/^\d/, '_$&');

            return `export { default as ${name} } from './${file}'`;
        })
        .join(';\n');

    console.log(code);

    return writeFile(join(folder, 'index.ts'), code);
})();
