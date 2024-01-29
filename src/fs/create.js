import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const create = async () => {
    let isError;
    const inner = 'I am fresh and young';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    try {
        isError = fs.openSync(`${__dirname}/files/fresh.txt`, 'r');
        if (isError) throw Error('FS operation failed');
    } catch {
        if (isError) throw Error('FS operation failed');
        try {
            fs.writeFileSync(`src/fs/files/fresh.txt`, inner);
        } catch (error) {
            throw Error('FS operation failed with code: ', error);
        }
    }
};

await create();