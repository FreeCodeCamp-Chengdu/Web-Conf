import { observable } from 'mobx';
import { buildURLData } from 'web-utility/source/URL';
import { Day, formatDate } from 'web-utility/source/date';

import { DataItem, client } from './service';

export interface Activity extends DataItem {
    title: string;
    start: string;
    end: string;
    address: string;
    banner: string;
    link: string;
}

export class ActivityModel {
    @observable
    loading = false;

    @observable
    list: Activity[] = [];

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
