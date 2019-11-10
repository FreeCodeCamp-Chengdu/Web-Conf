import { auto } from 'browser-unhandled-rejection';
import { render, createCell } from 'web-cell';

import { PageRouter } from './page/PageRouter';

auto();

window.addEventListener('unhandledrejection', ({ reason }) => {
    if (reason instanceof URIError) window.alert(reason.message);
});

if ('serviceWorker' in navigator)
    window.addEventListener('load', () =>
        navigator.serviceWorker.register('sw.ts')
    );

render(<PageRouter />);
