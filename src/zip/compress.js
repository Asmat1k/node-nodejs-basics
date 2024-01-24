import { createGzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
 
const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const archive = createGzip();
    const read = createReadStream(`${__dirname}/files/fileToCompress.txt`, 'utf8');
    const write = createWriteStream(`${__dirname}/files/archive.gz`);

    pipeline(read, archive, write, (error) => {
        if (error) {
            console.log('ERROR: ', error);
        } else {
            console.log('Archive named "archive.gz" was created in files folder');
        }
    })
};

await compress();