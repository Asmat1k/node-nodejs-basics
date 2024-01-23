import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    try {
        await fs.existsSync(`${__dirname}/files`);
        const filesList = await fs.readdirSync(`${__dirname}/files`);
        for (const file of filesList) {
            console.log(file);
        } 
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();