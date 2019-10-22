import { component, createCell } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter, matchRoutes } from 'cell-router/source';

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

    render() {
        return (
            <div>
                {matchRoutes(
                    [
                        { paths: ['2018'], component: Page2018 },
                        { paths: ['2019'], component: Page2019 },
                        { paths: [''], component: PageEntry }
                    ],
                    history.path
                )}

                <footer className="text-muted">
                    <div className="container">
                        <p className="float-right">
                            <a href="#top">返回页顶</a>
                        </p>
                        <p>
                            自豪地使用
                            <a
                                className="px-1"
                                href="https://getbootstrap.com/"
                            >
                                BootStrap v4
                            </a>
                            &amp;
                            <a className="px-1" href="https://web-cell.tk/">
                                WebCell v2
                            </a>
                            开发
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}
