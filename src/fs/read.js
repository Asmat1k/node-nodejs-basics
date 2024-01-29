import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    try {
        const data = fs.readFileSync(`${__dirname}/files/fileToRead.txt`, 'utf-8');
        console.log(data);
    } catch {
        throw new Error('FS operation failed');
    }


};

await read();