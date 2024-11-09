import { Container, Ratio, Table } from 'boot-cell';
import { Button, Image, Nav, NavLink } from 'boot-cell';
import { Card, CardBody, CardImg, CardTitle } from 'boot-cell';
import { marked } from 'marked';
import { observer } from 'web-cell';

import { TopNavBar } from '../../component/TopNavBar';
import { t } from '../../i18n';
import {
    companies,
    hosts,
    lecturers,
    partners,
    projects,
    review,
    schedule,
    sections,
    sponsors,
    title,
    topics
} from './data';
import { poster, undraw_01, undraw_04 } from './image';
import photos from './image/photos';
import * as style from './index.module.less';
import { LogoList } from './LogoList';

export default observer(() => (
    <main className={style.root}>
        <TopNavBar
            brand={title()}
            expand="lg"
            variant="light"
            menu={sections()}
        />
        <div className={style.poster}>
            <Image src={poster} fluid />
        </div>
        <section id="Introduction">
            <h2 className="text-center mb-5">{t('conference_introduction')}</h2>
            <Container>
                <div className="row">
                    <div className="col-md-7">
                        <p>{t('conference_description')}</p>
                        <div className="p-4 text-center">
                            <Button
                                variant="primary"
                                size="lg"
                                target="_blank"
                                href="http://fcc-chengdu.mikecrm.com/tFM8Rk8"
                            >
                                {t('register_now')}
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <Image fluid src={undraw_01} />
                    </div>
                </div>
            </Container>
        </section>
        <section id="Lecturer" className={style.sparked}>
            <h2 className="mb-5">{t('guest_lecturers')}</h2>
            <Container>
                <div className="row lecture-list">
                    {lecturers().map(({ avatar, name, detail }) => (
                        <div key={name} className="col-md-3 p-2">
                            <div className={style.lecture}>
                                <img
                                    src={avatar}
                                    className={style.avatar}
                                    alt={name}
                                />
                                <p className="lecture-name">{name}</p>
                                <p
                                    className="lecture-intro text-left"
                                    innerHTML={marked(detail) as string}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
        <section id="Topic">
            <h2 className="text-center mb-5">{t('topics')}</h2>
            <Container>
                <ol
                    className={`${style.subjects} overflow-hidden list-unstyled position-relative`}
                >
                    {topics().map(({ lecturer, title, detail }) => (
                        <li key={title} className={title}>
                            <div className="text-center">
                                <h6>{lecturer.name}</h6>
                                <img
                                    className={style['avatar-sm']}
                                    src={lecturer.avatar}
                                />
                            </div>
                            <div>
                                <h5>{title}</h5>
                                <p innerHTML={marked(detail) as string} />
                            </div>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
        <section className={style.sparked}>
            <Container>
                <div id="Bazaar" className="mb-4">
                    <h2 className="text-center mb-5">
                        {t('open_source_bazaar')}
                    </h2>

                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        {projects().map(
                            ({ type, URL, title, detail, logo }) => (
                                <div key={title} className="col">
                                    <Card className="overflow-hidden">
                                        <CardImg src={logo} />
                                        <CardBody>
                                            <CardTitle>
                                                <a
                                                    className="stretched-link text-primary"
                                                    target="_blank"
                                                    href={URL}
                                                    rel="noreferrer"
                                                >
                                                    {title}
                                                </a>
                                            </CardTitle>
                                            <div
                                                className={`cr cr-top cr-right cr-${
                                                    type ? 'red' : 'blue'
                                                }`}
                                            >
                                                {type
                                                    ? t('club')
                                                    : t('project')}
                                            </div>

                                            {detail}
                                        </CardBody>
                                    </Card>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div id="Enterprise" className="text-center">
                    <h2 className="text-center mb-5">
                        {t('participating_companies')}
                    </h2>
                    <p className="text-muted">
                        {t(
                            'enterprises_open_onsite_recruitment_welcome_talents'
                        )}
                    </p>
                    <p className="text-muted">{t('no_particular_order')}</p>
                    <div className="row">
                        <div className="col-md-7">
                            <ul className={`${style.companies} list-inline`}>
                                {companies.map(name => (
                                    <li
                                        key={name}
                                        className="list-inline-item py-1 px-3 m-1 bg-white rounded"
                                    >
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <Image fluid src={undraw_04} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section id="Schedule">
            <h2 className="text-center mb-5">{t('schedule')}</h2>
            <Container>
                <Table className="text-center" striped hover>
                    <thead>
                        <tr>
                            <th scope="col" className="d-none d-md-block">
                                #
                            </th>
                            <th scope="col">{t('time')}</th>
                            <th scope="col">{t('event')}</th>
                            <th scope="col">{t('main_guest')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule().map(({ time, title, topic }) => (
                            <tr key={time}>
                                <td className="d-none d-md-block" />
                                <td className="text-nowrap">{time}</td>
                                <td>{title || `《${topic?.title}》`}</td>
                                <td>{topic?.lecturer.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </section>
        <section id="Review" className={style.sparked}>
            <h2 className="text-center mb-5">{t('past_highlights_review')}</h2>
            <Container>
                <div className={`row ${style.photos}`}>
                    {review.map(({ title }, index) => (
                        <div key={title} className="col-md-4">
                            <Image fluid title={title} src={photos[index]} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>

        <section id="Address" className="text-center">
            <h2 className="text-center mb-5">{t('address')}</h2>
            <Container>
                <p className="text-muted">
                    {t('tianfu_ifc_building4_conference_room')}
                </p>
                <Ratio aspectRatio="21x9">
                    <iframe
                        loading="lazy"
                        src={`//uri.amap.com/marker?src=fcc-cdc&callnative=1&position=104.065789,30.582013&name=${title()}`}
                    />
                </Ratio>
            </Container>
        </section>
        <section id="Contributor" className="text-center">
            <h2>{t('co_creation_partners')}</h2>
            <Container>
                {hosts().map(({ title, member }) => (
                    <div
                        key={title}
                        className={`${style.contributorGroup} my-4`}
                    >
                        <h5 className="py-3">
                            {title}
                            {t('organizer')}
                        </h5>
                        <LogoList member={member} />
                    </div>
                ))}
            </Container>
            <Container>
                <div className={`${style.contributorGroup} my-4`}>
                    {sponsors().map(({ title, member }) => (
                        <section key={title}>
                            <h5 className="py-3">
                                {title}
                                {t('sponsor')}
                            </h5>
                            <LogoList member={member} />
                        </section>
                    ))}
                </div>
            </Container>
            <Container>
                <div className={`${style.contributorGroup} my-4`}>
                    <h5 className="py-3">{t('business_partner')}</h5>
                    <LogoList member={partners} />
                </div>
            </Container>
        </section>
        <section id="CallInAction" className={style.sparked}>
            <Container className="text-center">
                <Button
                    variant="primary"
                    size="lg"
                    target="_blank"
                    href="http://fcc-chengdu.mikecrm.com/tFM8Rk8"
                >
                    {t('register_now')}
                </Button>
            </Container>
        </section>
        <footer className="pt-4 pb-3 clearfix">
            <Container>
                <div className="d-none d-md-block">
                    <Nav>
                        {sections().map(({ href, title }) => (
                            <NavLink key={title} href={href}>
                                {title}
                            </NavLink>
                        ))}
                    </Nav>
                </div>
            </Container>
        </footer>
    </main>
));
