import { component, blobURI, $ } from 'web-cell';

import template from './index.html';

import image from './spinner.svg';

@component({ template })
export default class CellLoading extends HTMLElement {
    constructor() {
        super();

        this.buildDOM();
    }

    @blobURI
    static get image() {
        return image;
    }

    toggle(open) {
        return this.classList.toggle('done', !open);
    }

    static closeAll() {
        for (let that of $(this.tagName)) that.toggle(false);
    }
}
