import { createHash } from 'node:crypto';
import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = `${__dirname}/files/fileToCalculateHashFor.txt`;

    const readableStream = fs.createReadStream(filePath, 'utf-8');
    readableStream.on('error', (error) => {
        console.log(`ERROR: ${error}`);
    })
    readableStream.on('data', (chunk) => {
        console.log(createHash('sha256').update(chunk).digest('hex'));
    })
};

await calculateHash();