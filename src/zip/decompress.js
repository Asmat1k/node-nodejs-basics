import { createGzip, createUnzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const unzip = createUnzip();
    const read = createReadStream(`${__dirname}/files/archive.gz`);
    const write = createWriteStream(`${__dirname}/files/fileToCompress.txt`);

    pipeline(read, unzip, write, (error) => {
        if (error) {
            console.log('ERROR: ', error);
        } else {
            console.log('Archive named "archive.gz" was decompressed into a file!');
        }
    })
};

await decompress();