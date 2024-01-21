import { observable } from 'mobx';
import { buildURLData, Day, formatDate } from 'web-utility';

import { DataItem, client } from './service';

export type Activity = DataItem &
    Record<'title' | 'start' | 'end' | 'address' | 'banner' | 'link', string>;

export class ActivityModel {
    @observable
    accessor loading = false;

    @observable
    accessor list: Activity[] = [];

    async getDayList(date: Date) {
        this.loading = true;

        const { body } = await client.get<Activity[]>(
            `activity?${buildURLData({
                from: formatDate(date, 'YYYY-MM-DD'),
                to: formatDate(new Date(+date + Day), 'YYYY-MM-DD'),
                rows: 1000
            })}`
        );
        this.loading = false;

        return (this.list = body!);
    }
}
