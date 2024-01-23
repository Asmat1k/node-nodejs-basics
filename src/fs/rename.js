import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const rename = async () => {
    const inner = 'I am fresh and young';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    if (!fs.existsSync(`${__dirname}/files/wrongFilename.txt`) || fs.existsSync(`${__dirname}/files//files/properFilename.md`)) {
        throw Error('FS operation failed');
    } else {
        fs.rename(`${__dirname}/files/wrongFilename.txt`, `${__dirname}/files/properFilename.md`, () => '1');
    }
};

await rename();