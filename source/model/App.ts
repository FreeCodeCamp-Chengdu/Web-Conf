import { HTTPError } from 'koajax';
import { observable } from 'mobx';

import { DataItem, client } from './service';

export interface User extends DataItem, Record<'username' | 'gender', string> {
    mobilePhoneNumber?: string;
}

export class Session {
    @observable
    accessor user: User | undefined;

    async getProfile() {
        try {
            const { body } = await client.get<User>('/session/');

            return (this.user = body);
        } catch (error) {
            if ((error as HTTPError).status !== 401) throw error;
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
