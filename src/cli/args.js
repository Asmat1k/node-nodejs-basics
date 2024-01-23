import process from 'process'

const parseArgs = () => {
    const prArgv = process.argv;

    for(let i = 2; i < prArgv.length - 1; i += 2) {
        console.log(`${prArgv[i].slice(2)} is ${prArgv[i+1]}`)
    }
};

parseArgs();