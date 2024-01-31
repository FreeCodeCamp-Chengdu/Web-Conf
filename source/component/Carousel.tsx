import { FC, WebCellProps } from 'web-cell';

export interface CarouselItemProps extends WebCellProps<HTMLDivElement> {
    interval?: number;
}

export const CarouselItem: FC<CarouselItemProps> = ({
    className = '',
    interval,
    children,
    ...props
}) => (
    <div
        className={`carousel-item ${className}`}
        {...props}
        data-bs-interval={interval}
    >
        {children}
    </div>
);

export const CarouselCaption: FC<WebCellProps<HTMLDivElement>> = ({
    className = '',
    children,
    ...props
}) => (
    <div className={`carousel-caption ${className}`} {...props}>
        {children}
    </div>
);
