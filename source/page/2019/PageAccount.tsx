import { Table } from 'boot-cell';
import { computed, observable } from 'mobx';
import { component, observer, WebCell } from 'web-cell';
import { parseTextTable } from 'web-utility';

import { t } from '../../i18n';
import { PageFrame } from './PageFrame';

type Account = Record<'item' | 'manager' | 'date' | 'remark', string> &
    Record<'price' | 'count', number>;

export default interface AccountPage extends WebCell {}

@component({ tagName: 'account-page' })
@observer
export default class AccountPage extends HTMLElement implements WebCell {
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

    async mountedCallback() {
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
                    <a
                        target="_blank"
                        href={'https://github.com/' + manager}
                        rel="noreferrer"
                    >
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
                <h2 className="py-5 text-center">
                    {t('income_expenditure_account')}
                </h2>

                <Table striped hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>{t('item')}</th>
                            <th>{t('unit_price_cny')}</th>
                            <th>{t('quantity')}</th>
                            <th>{t('handler')}</th>
                            <th>{t('date')}</th>
                            <th>{t('remark')}</th>
                        </tr>
                    </thead>
                    <tbody>{list.map(this.renderRow)}</tbody>
                    <tfoot>
                        <tr>
                            <th>{t('total_expenditure_cny')}</th>
                            <td>{expenditure.toFixed(2)}</td>
                            <th>{t('total_revenue_cny')}</th>
                            <td>{revenue.toFixed(2)}</td>
                            <th>{t('total_balance_cny')}</th>
                            <td>{(revenue + expenditure).toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </Table>
            </PageFrame>
        );
    }
}
