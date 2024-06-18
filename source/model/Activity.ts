import { observable } from 'mobx';
import { BaseModel, toggle } from 'mobx-restful';
import { buildURLData, Day, formatDate } from 'web-utility';

import { DataItem, client } from './service';

export type Activity = DataItem &
    Record<'title' | 'start' | 'end' | 'address' | 'banner' | 'link', string>;

export class ActivityModel extends BaseModel {
    @observable
    accessor list: Activity[] = [];

    @toggle('downloading')
    async getDayList(date: Date) {
        const { body } = await client.get<Activity[]>(
            `activity?${buildURLData({
                from: formatDate(date, 'YYYY-MM-DD'),
                to: formatDate(new Date(+date + Day), 'YYYY-MM-DD'),
                rows: 1000
            })}`
        );
        return (this.list = body!);
    }
}
