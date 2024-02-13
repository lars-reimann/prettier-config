module.exports = {
    'branches': ['main'],
    'plugins': [
        ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
        ['@semantic-release/release-notes-generator', { preset: 'conventionalcommits' }],
        ['@semantic-release/npm', { pkgRoot: 'packages/base' }],
        ['@semantic-release/npm', { pkgRoot: 'packages/svelte' }],
        '@semantic-release/github',
        [
            '@semantic-release/git',
            {
                assets: [
                    'package-lock.json',
                    'packages/base/package.json',
                    'packages/svelte/package.json',
                ],
            },
        ],
    ],
};
