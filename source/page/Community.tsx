import { Image } from 'boot-cell';

import { TopNavBar } from '../component/TopNavBar';
import { Feature } from '../component/Feature';
import { common_menu, features } from './data';
import { FCC_CDC } from './2018/image';

export default () => (
    <>
        <TopNavBar menu={common_menu} />
        <header
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: '80vh' }}
        >
            <Image fluid style={{ maxWidth: '20rem' }} src={FCC_CDC} />
            <h1 className="display-4 mt-3">成都社区</h1>
        </header>

        <main className="container">
            {features.map((item, index) => (
                <>
                    <Feature reverse={!!(index % 2)} {...item} />

                    {index + 1 < features.length && <hr className="my-5" />}
                </>
            ))}
        </main>
    </>
);
