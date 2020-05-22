import { observable } from 'mobx';

import { DataItem, client } from './service';

export interface User extends DataItem {
    username: string;
    mobilePhoneNumber?: string;
    gender: string;
}

export class Session {
    @observable
    user?: User;

    async getProfile() {
        try {
            const { body } = await client.get<User>('/session/');

            return (this.user = body);
        } catch (error) {
            if (error.status !== 401) throw error;
        }
    }

    sendSMSCode(phone: string) {
        return client.post('/session/smsCode', { phone });
    }

    async signIn(phone: string, code: string) {
        const { body } = await client.post<User>('/session/', { phone, code });

        return (this.user = body);
    }
}
