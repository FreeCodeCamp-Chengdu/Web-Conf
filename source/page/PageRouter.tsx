import { component, createCell } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter } from 'cell-router/source';

import { history } from '../model';

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
            case '2019':
            default:
                return <Page2019 />;
        }
    }

    render() {
        return <div>{this.renderPage()}</div>;
    }
}
