import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    try {
        await fs.unlinkSync(`${__dirname}/files/filetoRemove.txt`);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();