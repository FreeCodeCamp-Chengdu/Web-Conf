#! /usr/bin/env node

const { extname, basename, join } = require('path'),
    {
        promises: { readdir, writeFile }
    } = require('fs');

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
