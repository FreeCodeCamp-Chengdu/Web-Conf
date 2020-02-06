import { auto } from 'browser-unhandled-rejection';
import { render, createCell, documentReady } from 'web-cell';

import { loaded } from './i18n';
import { PageRouter } from './page/PageRouter';

auto();

window.addEventListener('unhandledrejection', ({ reason }) => {
    if (reason instanceof URIError) window.alert(reason.message);
});

Promise.all([loaded, documentReady]).then(() => {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.ts');

    render(<PageRouter />);
});
