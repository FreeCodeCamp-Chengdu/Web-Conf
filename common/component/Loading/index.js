import { component, blobURI, mapProperty, mapData, $ } from 'web-cell';

import template from './index.html';

import image from './spinner.svg';

import _image_ from './spinner.gif';

const media = ['img', 'iframe', 'audio', 'video'],
    MS_HTML = /(?:MSIE|Trident|Edge)\/(\d+)/;

@component({
    template,
    data: { count: 0 }
})
export default class CellLoading extends HTMLElement {
    @blobURI
    static get image() {
        return MS_HTML.test(navigator.userAgent) ? _image_ : image;
    }

    constructor() {
        super().buildDOM();

        const reduce = () => this.count && this.count--;

        new MutationObserver(list => {
            for (let entry of list)
                for (let node of entry.addedNodes)
                    if (media.includes(node.nodeName.toLowerCase())) {
                        this.count++;

                        node.onload = node.onerror = reduce;
                    }
        }).observe(this, { childList: true });
    }

    @mapProperty
    static get observedAttributes() {
        return ['count'];
    }

    @mapData
    attributeChangedCallback() {}

    toggle(open) {
        this.count = +(open != null ? open : !this.count);
    }

    static closeAll() {
        for (let that of $(this.tagName)) that.toggle(false);
    }
}
