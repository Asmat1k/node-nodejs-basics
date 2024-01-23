import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const create = async () => {
    const inner = 'I am fresh and young';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    try  {
        (await fs).openSync(`${__dirname}/files/fresh.txt`, 'r');
        throw Error('FS operation failed');
    } catch {
        try {
            (await fs).writeFileSync(`src/fs/files/fresh.txt`, inner);
        } catch (error) {
             throw Error('writeFileSync failed: ', error);
        }
    }
};

await create();