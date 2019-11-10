import { observable } from 'mobx';
import { request } from './service';

export class App {
    @observable
    user: any;

    async getProfile() {
        try {
            const response = await request('/session/');

            return (this.user = await response.json());
        } catch (error) {
            if (error.status !== 401) throw error;
        }
    }

    sendSMSCode(phone: string) {
        return request('/session/smsCode', 'POST', { phone });
    }

    async signIn(phone: string, code: string) {
        const response = await request('/session/', 'POST', { phone, code });

        return (this.user = await response.json());
    }
}
