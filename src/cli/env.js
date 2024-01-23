import process from 'process'

const parseEnv = () => {
    const env = process.env;
    const entries = Object.entries(env);

    for(const item of entries) {
        if(item[0].includes('RSS_')) {
            console.log(`${item[0]}=${item[1]};`);
        }
    }
};

parseEnv();