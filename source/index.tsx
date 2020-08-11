import { auto } from 'browser-unhandled-rejection';
import { serviceWorkerUpdate } from 'web-utility/source/event';
import { render, createCell, documentReady } from 'web-cell';

import { loaded } from './i18n';
import { PageRouter } from './page/PageRouter';

auto();

self.addEventListener('unhandledrejection', event => {
    const { message } = event.reason;

    if (!message) return;

    event.preventDefault();

    self.alert(message);
});

const { serviceWorker } = window.navigator;

serviceWorker
    ?.register('sw.js')
    .then(serviceWorkerUpdate)
    .then(worker => {
        if (window.confirm('New version of this Web App detected, update now?'))
            worker.postMessage({ type: 'SKIP_WAITING' });
    });

serviceWorker?.addEventListener('controllerchange', () =>
    window.location.reload()
);

Promise.all([loaded, documentReady]).then(() => render(<PageRouter />));
