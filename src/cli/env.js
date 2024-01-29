import process from 'process'

const parseEnv = () => {
    const env = process.env;
    const entries = Object.entries(env);
    let resultStr = '';

    for(const item of entries) {
        if(item[0].includes('RSS_')) {
            resultStr += `${item[0]}=${item[1]}; `;
        }
    }

    console.log(resultStr);
};

parseEnv();