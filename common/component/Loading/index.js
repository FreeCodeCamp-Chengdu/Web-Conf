import { component, mapProperty, blobURI, $ } from 'web-cell';

import template from './index.html';

import image from './spinner.svg';

const media = ['img', 'iframe', 'audio', 'video'];

@component({
    template,
    data: { count: 0 }
})
export default class CellLoading extends HTMLElement {
    @mapProperty
    static get observedAttributes() {
        return ['count'];
    }

    @blobURI
    static get image() {
        return image;
    }

    constructor() {
        super();

        this.buildDOM();

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

    toggle(open) {
        this.count = +(open != null ? open : !this.count);
    }

    static closeAll() {
        for (let that of $(this.tagName)) that.toggle(false);
    }
}
