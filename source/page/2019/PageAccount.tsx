import { createCell } from 'web-cell';
import { parseTextTable } from 'boot-cell/source/utility';
import { Table } from 'boot-cell/source/Table';

import { PageFrame } from './PageFrame';
import data from './data/account.csv';

interface Account {
    item: string;
    price: number;
    count: number;
    manager: string;
    date: string;
    remark: string;
}

const list = parseTextTable(data, true) as Account[];

export function PageAccount() {
    return (
        <PageFrame>
            <h2 className="text-center">收支账目</h2>

            <Table striped hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>事项</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>经办</th>
                        <th>日期</th>
                        <th>备注</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(
                        (
                            { item, price, count, manager, date, remark },
                            index
                        ) => (
                            <tr>
                                <td>{++index}</td>
                                <td>{item}</td>
                                <td className="text-right">{price}</td>
                                <td className="text-right">{count}</td>
                                <td>
                                    {manager && (
                                        <a
                                            target="_blank"
                                            href={
                                                'https://github.com/' + manager
                                            }
                                        >
                                            @{manager}
                                        </a>
                                    )}
                                </td>
                                <td>{date}</td>
                                <td>{remark}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </Table>
        </PageFrame>
    );
}
