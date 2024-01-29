import process from 'process'

const parseArgs = () => {
    const prArgv = process.argv;
    let resultStr = '';

    for(let i = 2; i < prArgv.length - 1; i += 2) {
        resultStr += `${prArgv[i].slice(2)} is ${prArgv[i+1]}, `;
    }

    console.log(resultStr.slice(0, resultStr.length - 2));
};

parseArgs();