import { component, createCell } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter } from 'cell-router/source';

import { history } from '../model';

import { PageEntry } from './PageEntry';
import { Page2018 } from './2018';
import { Page2019 } from './2019';

@observer
@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends HTMLRouter {
    protected history = history;

    renderPage() {
        switch (history.path) {
            case '2018/':
                return <Page2018 />;
            case '2019/':
                return <Page2019 />;
            default:
                return <PageEntry />;
        }
    }

    render() {
        return (
            <div>
                {this.renderPage()}

                <footer className="text-muted">
                    <div className="container">
                        <p className="float-right">
                            <a href="#top">返回页顶</a>
                        </p>
                        <p>
                            自豪地使用
                            <a href="https://getbootstrap.com/">
                                BootStrap v4
                            </a>{' '}
                            &amp;
                            <a href="https://web-cell.tk/">WebCell v2</a> 开发
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}
