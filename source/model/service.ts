import { PlainObject } from 'web-cell';

type HTTPMethod = 'HEAD' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export async function request(
    URI: string,
    method: HTTPMethod = 'GET',
    body?: any,
    headers?: PlainObject,
    options?: RequestInit
) {
    if (body && body.valueOf().constructor === Object) {
        body = JSON.stringify(body);
        headers = { ...headers, 'Content-Type': 'application/json' };
    }

    const response = await fetch(
        new URL(
            URI,
            window.location.hostname === 'localhost'
                ? 'http://localhost:3000'
                : 'https://web-conf.leanapp.cn'
        ) + '',
        {
            ...options,
            method,
            body,
            headers,
            mode: 'cors',
            credentials: 'include'
        }
    );

    if (response.status < 300) return response;

    const { name, message } = await response.json();

    throw Object.assign(new URIError(message || name), {
        status: response.status,
        response
    });
}
