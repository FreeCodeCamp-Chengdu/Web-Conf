import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardProps,
    CardTitle
} from 'boot-cell';
import { FC, observer } from 'web-cell';
import { isXDomain } from 'web-utility';

import { i18n } from '../i18n';
import { summits } from '../page/data';
import * as style from './SummitCard.module.less';

const { t } = i18n;

export type SummitCardProps = (typeof summits)[0] & CardProps;

export const SummitCard: FC<SummitCardProps> = observer(
    ({ className = '', title, banner, date, URL, children, ...props }) => {
        const passed = new Date(date) < new Date();

        return (
            <Card className={`${style.card} shadow ${className}`} {...props}>
                <CardImg src={banner} />

                <CardBody className="d-flex flex-column">
                    <CardTitle className="flex-fill">{title}</CardTitle>

                    <div className="d-flex justify-content-between align-items-center">
                        <Button
                            variant={passed ? 'secondary' : 'primary'}
                            size="sm"
                            className="stretched-link"
                            href={isXDomain(URL) ? URL : `#${URL}`}
                            title={title}
                        >
                            {t(passed ? 'review' : 'register')}
                        </Button>

                        <small className="text-muted">{date}</small>
                    </div>
                </CardBody>
            </Card>
        );
    }
);
