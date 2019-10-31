import { render, createCell } from 'web-cell';

import { PageRouter } from './page/PageRouter';

if ('serviceWorker' in navigator)
    window.addEventListener('load', () =>
        navigator.serviceWorker.register('sw.ts')
    );

render(<PageRouter />);
