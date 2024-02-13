const baseConfig = require('@lars-reimann/prettier-config');

module.exports = {
    ...baseConfig,
    'plugins': ['prettier-plugin-svelte'],
    'overrides': [
        ...baseConfig.overrides,
        { 'files': '*.svelte', 'options': { 'parser': 'svelte' } },
    ],
};
