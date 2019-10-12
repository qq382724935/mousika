const fetch = require('node-fetch');

const registryMap = {
    'github.com': 'https://github.com/qq382724935/react-family.git',
};

/**
 * Get the fast registry Url(github.com or gitee.com)
 */
const getFastGithub = async () => {
    const promiseList = Object.keys(registryMap).map(async (key) => fetch(registryMap[key])
        .catch(() => null)
        .then(() => Promise.resolve(key)));
    try {
        const url = await Promise.race(promiseList);
        return url;
    } catch (e) {
        return 'github.com';
    }
};

module.exports = getFastGithub;
