import process from 'process'
import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = `${__dirname}/files/fileToWrite.txt`;

    const writableStream = fs.createWriteStream(filePath, 'utf-8');

    process.stdin.on('data', chunk => {
        writableStream.write(chunk)
    });
};

await write();