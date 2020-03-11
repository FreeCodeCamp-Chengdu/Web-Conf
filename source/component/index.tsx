import { createCell } from 'web-cell';
import { HTMLProps } from 'web-utility/source/DOM-type';

export function IFrame(props: HTMLProps & { src: string }) {
    return (
        <iframe
            frameborder="0"
            scrolling="no"
            lazyload="1"
            loading="lazy"
            {...props}
        />
    );
}
