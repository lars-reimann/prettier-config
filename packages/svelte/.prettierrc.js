const basicConfig = require('@lars-reimann/prettier-config');

module.exports = {
    ...basicConfig,
    'plugins': ['prettier-plugin-svelte'],
    'overrides': [
        ...basicConfig.overrides,
        { 'files': '*.svelte', 'options': { 'parser': 'svelte' } },
    ],
};
