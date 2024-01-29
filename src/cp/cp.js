import { spawn } from 'child_process';

const spawnChildProcess = (args) => {
    const pathToScript = 'src/cp/files/script.js'
    const child = spawn('node', [pathToScript, ...args], {
        stdio: ['pipe']
    });

    process.stdin.pipe(child.stdin);
    child.stdout.on('data', (data) => {
        process.stdout.write(data);
    });
};

spawnChildProcess(['ls', 'cd']);