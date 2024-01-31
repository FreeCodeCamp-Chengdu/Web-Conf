import { component, observer } from 'web-cell';
import { CustomElement, parseTextTable } from 'web-utility';
import { Table } from 'boot-cell';
import { computed, observable } from 'mobx';

import { PageFrame } from './PageFrame';

type Account = Record<'item' | 'manager' | 'date' | 'remark', string> &
    Record<'price' | 'count', number>;

@component({ tagName: 'account-page' })
@observer
export class AccountPage extends HTMLElement implements CustomElement {
    @observable
    accessor list: Account[] = [];

    @computed
    get expenditure() {
        return this.list.reduce(
            (sum, { price, count, date }) =>
                price < 0 && date ? sum + price * count : sum,
            0
        );
    }

    @computed
    get revenue() {
        return this.list.reduce(
            (sum, { price, count, date }) =>
                price > 0 && date ? sum + price * count : sum,
            0
        );
    }

    async connectedCallback() {
        const data = await (
            await fetch(new URL('./data/account.csv', import.meta.url))
        ).text();

        this.list = parseTextTable(data, true) as Account[];
    }

    renderRow = (
        { item, price, count, manager, date, remark }: Account,
        index: number
    ) => (
        <tr key={item}>
            <td>{++index}</td>
            <td>{item}</td>
            <td className="text-right">{price}</td>
            <td className="text-right">{count}</td>
            <td>
                {manager && (
                    <a target="_blank" href={'https://github.com/' + manager}>
                        @{manager}
                    </a>
                )}
            </td>
            <td>{date}</td>
            <td>{remark}</td>
        </tr>
    );

    render() {
        const { list, expenditure, revenue } = this;

        return (
            <PageFrame>
                <h2 className="py-5 text-center">收支账目</h2>

                <Table striped hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>事项</th>
                            <th>单价（人民币￥）</th>
                            <th>数量</th>
                            <th>经办</th>
                            <th>日期</th>
                            <th>备注</th>
                        </tr>
                    </thead>
                    <tbody>{list.map(this.renderRow)}</tbody>
                    <tfoot>
                        <tr>
                            <th>总支出（人民币￥）</th>
                            <td>{expenditure.toFixed(2)}</td>
                            <th>总收入（人民币￥）</th>
                            <td>{revenue.toFixed(2)}</td>
                            <th>总结余（人民币￥）</th>
                            <td>{(revenue + expenditure).toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </Table>
            </PageFrame>
        );
    }
}
