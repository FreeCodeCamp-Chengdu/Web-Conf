import { Button, Jumbotron } from 'boot-cell';
import { PageProps } from 'cell-router';
import { FC, observer } from 'web-cell';

import { SummitCard } from '../component/SummitCard';
import { TopNavBar } from '../component/TopNavBar';
import { common_menu, summits } from './data';

import { i18n } from '../i18n';

const { t } = i18n;

export const HomePage: FC<PageProps> = observer(props => (
    <div {...props}>
        <TopNavBar menu={common_menu} />

        <Jumbotron
            fluid
            className="p-5 text-center"
            title={t('homePagetitle')}
            description={t('homePagedescription')}
        >
            <Button
                className="m-2"
                variant="primary"
                href={summits[0].URL}
                title={summits[0].title}
            >
                {t('homePageregisterLatest')}
            </Button>
            <Button
                className="m-2"
                variant="secondary"
                href={summits[1].URL}
                title={summits[1].title}
            >
                {t('homePagereviewPrevious')}
            </Button>
        </Jumbotron>

        <section className="container py-5">
            <div className="d-flex flex-wrap justify-content-center gap-4">
                {summits.map(summit => (
                    <SummitCard key={summit.title} {...summit} />
                ))}
            </div>
        </section>
    </div>
));
