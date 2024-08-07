import { createRouter } from 'cell-router';
import { lazy } from 'web-cell';

import WeChat_QRC from '../image/FCC-CDG-WeChat.png';
import { HomePage } from './Home';

import { i18n, LanguageName } from '../i18n';

const { t } = i18n;

const CommunityPage = lazy(() => import('./Community')),
    ActivityPage = lazy(() => import('./Activity')),
    Page2017 = lazy(() => import('./2017')),
    Page2018 = lazy(() => import('./2018')),
    Code4City = lazy(() => import('./2018-Code4City')),
    Page2019 = lazy(() => import('./2019')),
    InvitationCard = lazy(() => import('./2019/InvitationCard')),
    AccountPage = lazy(() => import('./2019/PageAccount'));

const { Route } = createRouter();

export const PageRouter = () => (
    <>
        <Route path="" component={HomePage} />
        <Route path="community" component={CommunityPage} />
        <Route path="2017/" component={Page2017} />
        <Route path="2018/Code4City/" component={Code4City} />
        <Route path="2018/" component={Page2018} />
        <Route path="2019/" component={Page2019} />
        <Route path="2019/invitation/" component={InvitationCard} />
        <Route path="2019/accounts/" component={AccountPage} />
        <Route path="activity" component={ActivityPage} />

        <footer className="text-muted bg-light overflow-hidden mt-4">
            <section className="container d-md-flex justify-content-between my-4">
                <div>
                    <h4>{t('aboutus')}</h4>
                    <p className="text-muted">
                        {t('nonprofitOrganization')} &nbsp;
                        <a target="_blank" href="https://www.freecodecamp.org/">
                            freeCodeCamp
                        </a>{' '}
                        &nbsp;
                        {t('since2014')}
                    </p>
                    <p className="text-muted">
                        <a target="_blank" href="https://fcc-cd.dev/">
                            freeCodeCamp {t('community_name')} &nbsp;
                        </a>
                        {t('community_description')}
                    </p>
                </div>
                <div>
                    <h4>{t('contactus')}</h4>
                    <ul className="list-unstyled">
                        <li>
                            <a href="https://www.weibo.com/u/6165665516">
                                {t('sina_weibo')}
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/FreeCodeCamp-Chengdu">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <img
                                className="img-thumbnail w-75"
                                src={WeChat_QRC}
                                title={t('wechat')}
                            />
                        </li>
                    </ul>
                </div>
            </section>
            <section className="container d-flex flex-column flex-md-row align-items-center justify-content-around my-4">
                <span>
                    {t('proudlyDevelopedWith')}
                    <a
                        className="px-1"
                        href="https://github.com/EasyWebApp/WebCell/tree/v2"
                    >
                        WebCell v3
                    </a>
                    &amp;
                    <a className="px-1" href="https://web-cell.dev/BootCell">
                        BootCell v2
                    </a>
                    {t('development')}
                </span>
                <a href="#top">{t('backToTop')}</a>
            </section>
        </footer>
    </>
);
