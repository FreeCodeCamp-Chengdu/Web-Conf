import { HTTPClient } from 'koajax';

export const client = new HTTPClient({
    baseURI:
        window.location.hostname === 'localhost'
            ? 'http://localhost:3000'
            : 'https://web-conf.leanapp.cn',
    responseType: 'json',
    withCredentials: true
});

export type DataItem = Record<'objectId' | 'createdAt' | 'updatedAt', string>;
