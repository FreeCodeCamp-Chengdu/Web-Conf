import { Image } from 'boot-cell';
import { observer } from 'web-cell';

import { Feature } from '../component/Feature';
import { TopNavBar } from '../component/TopNavBar';
import { t } from '../i18n';
import { FCC_CDC } from './2018/image';
import { common_menu, features } from './data';

export default observer(() => (
    <div>
        <TopNavBar menu={common_menu()} />
        <header
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: '80vh' }}
        >
            <Image fluid style={{ maxWidth: '20rem' }} src={FCC_CDC} />
            <h1 className="display-4 mt-3">{t('chengdu_community')}</h1>
        </header>

        <main className="container">
            {features().map((item, index) => (
                <>
                    <Feature reverse={!!(index % 2)} {...item} />

                    {index + 1 < features().length && <hr className="my-5" />}
                </>
            ))}
        </main>
    </div>
));
