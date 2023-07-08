module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'master',
    { name: 'beta', prerelease: true },
  ],
  repositoryUrl:
    'https://github.com/artabr/liva-nextjs',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        'npmPublish': false
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'dist/*.tgz',
            name: 'liva-nextjs-${nextRelease.gitTag}.zip',
            label:
              'Liva blog template for Next.js (${nextRelease.gitTag})',
          },
        ],
      },
    ],
  ],
};
