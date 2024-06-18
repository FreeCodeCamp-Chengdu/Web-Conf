import { HTTPError } from 'koajax';
import { observable } from 'mobx';
import { BaseModel, toggle } from 'mobx-restful';

import { DataItem, client } from './service';

export interface User extends DataItem, Record<'username' | 'gender', string> {
    mobilePhoneNumber?: string;
}

export class Session extends BaseModel {
    @observable
    accessor user: User | undefined;

    @toggle('downloading')
    async getProfile() {
        try {
            const { body } = await client.get<User>('/session/');

            return (this.user = body);
        } catch (error) {
            if ((error as HTTPError).status !== 401) throw error;
        }
    }

    @toggle('uploading')
    sendSMSCode(phone: string) {
        return client.post('/session/smsCode', { phone });
    }

    @toggle('uploading')
    async signIn(phone: string, code: string) {
        const { body } = await client.post<User>('/session/', { phone, code });

        return (this.user = body);
    }
}
