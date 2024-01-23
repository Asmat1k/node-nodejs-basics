import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const copy = async () => {
    const inner = 'I am fresh and young';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    if (fs.existsSync(`${__dirname}/files_copy`) || !fs.existsSync(`${__dirname}/files`)) {
        throw Error('FS operation failed');
    } else {
        (await fs).cpSync(`${__dirname}/files`, `${__dirname}/files_copy`, { recursive: true })
    }

};

await copy();