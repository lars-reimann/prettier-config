const basicConfig = require('@lars-reimann/prettier-config');

module.exports = {
    ...basicConfig,
    'plugins': [require.resolve('prettier-plugin-svelte')],
    'overrides': [
        ...basicConfig.overrides,
        { 'files': '*.svelte', 'options': { 'parser': 'svelte' } },
    ],
};
