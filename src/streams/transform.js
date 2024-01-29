import { Transform } from 'stream';

const transform = async () => {
    const transofrmStream = new Transform({
        transform(chunk, encoding, callback) {
            const transformChunk = chunk.toString().split('').reverse().join('');
            callback(null, transformChunk);
        }
    });

    process.stdin.pipe(transofrmStream).pipe(process.stdout);
};

await transform();