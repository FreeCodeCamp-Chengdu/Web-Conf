import { observable } from 'mobx';
import { HTTPClient } from 'koajax';

export const client = new HTTPClient({
    baseURI:
        window.location.hostname === 'localhost'
            ? 'http://localhost:3000'
            : 'https://web-conf.leanapp.cn',
    responseType: 'json',
    withCredentials: true
});

export class App {
    @observable
    user: any;

    async getProfile() {
        try {
            const { body } = await client.get('/session/');

            return (this.user = body);
        } catch (error) {
            if (error.status !== 401) throw error;
        }
    }

    sendSMSCode(phone: string) {
        return client.post('/session/smsCode', { phone });
    }

    async signIn(phone: string, code: string) {
        const { body } = await client.post('/session/', { phone, code });

        return (this.user = body);
    }
}
