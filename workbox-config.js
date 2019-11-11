module.exports = {
    globDirectory: 'dist/',
    globPatterns: ['**/*.{css,js,ico,png}'],
    swDest: 'dist/sw.js',
    importWorkboxFrom: 'disabled',
    importScripts: [
        'https://cdn.jsdelivr.net/npm/workbox-sw@4.3.1/build/workbox-sw.min.js'
    ]
};
