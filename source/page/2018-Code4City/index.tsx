import { Container, Button, Image } from 'boot-cell';
import { Carousel, CarouselCaption, CarouselItem } from 'boot-cell';

import { GuestCard } from './GuestCard';
import * as style from './index.module.less';
import BG_mountain from './image/BG-mountain.png';
import BG_points from './image/BG-points.png';
import { review, awards, vips, sponsors } from './data';

import { i18n } from '../../i18n';
const { t } = i18n;

export default () => (
    <main>
        <div
            className="text-light"
            style={{ backgroundImage: `url(${BG_mountain})` }}
        >
            <Container className="px-3 py-5">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <h1 className={`${style['main-title']} text-white`}>
                            {t('hackathon_competition_2018')}
                        </h1>
                        <h2 className="theme text-white">Code for City</h2>

                        <Button
                            className={style.register}
                            variant="primary"
                            target="_blank"
                            href="https://fcc.hackerearth.com/zh/"
                        >
                            {t('entry_channel')}
                        </Button>

                        <ul className="list-unstyled">
                            <li>{t('online_preliminary')}</li>
                            <li>{t('finals_date')}</li>
                            <li>{t('finals_venue')}</li>
                        </ul>
                    </div>

                    <div className="col-xs-12 col-md-6">
                        <Carousel interval={3000}>
                            {review.map(({ imageURL, title }) => (
                                <CarouselItem key={imageURL}>
                                    <Image
                                        className="d-block w-100"
                                        src={imageURL}
                                    />
                                    <CarouselCaption>
                                        <h5>{title}</h5>
                                    </CarouselCaption>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </div>
                    <div className="d-md-flex w-100 align-items-start my-5">
                        <h4
                            className={`${style['card-title']} ${style['line-center']} me-md-3`}
                        >
                            {t('competition_objective')}
                        </h4>
                        <ul
                            className={`list-unstyled ${style['card-content']} flex-fill`}
                        >
                            <li>{t('focus_on_city_life')}</li>
                            <li>{t('encourage_technological')}</li>
                            <li>{t('enhance_industry_atmosphere')}</li>
                            <li>{t('showcase_chengdu_charm')}</li>
                        </ul>
                    </div>
                    <div className="d-md-flex w-100 align-items-start my-5 flex-row-reverse">
                        <h4
                            className={`${style['card-title']} ${style['line-center']} ml-md-3`}
                        >
                            {t('brand_philosophy')}
                        </h4>
                        <p className={style['card-content']}>
                            {t('code_for_city')}
                        </p>
                    </div>
                    <div className="col-md-12 col-xs-12 mt-md-5 text-center">
                        <h3
                            className={`${style.title} ${style['line-center']} text-white"`}
                        >
                            {t('competition_awards')}
                        </h3>
                        <div className="my-4">
                            {awards().map(({ title, detail }) => (
                                <>
                                    <h4 className="text-white">{title}</h4>
                                    <p>{detail}</p>
                                </>
                            ))}
                        </div>
                        <div className="col-md-12 my-4">
                            <p style={{ color: 'darkgray' }}>
                                {t('all_awards')}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

        <div className={style.Detail}>
            <Container className="px-3 py-5">
                <section className="text-center my-5">
                    <h4
                        className={`${style.title} ${style['line-center']} text-white text-center"`}
                    >
                        {t('competition_team_size_and_rules')}
                    </h4>
                    <small className="p-3">
                        <span className="pe-4">
                            {t('preliminary_phase_unlimited')}
                        </span>
                        {t('finals_day_6_teams')}
                    </small>
                    <ol className={style['rule-list']}>
                        <li>
                            {t(
                                'team_captains_register_through_official_link_or_wechat_group'
                            )}
                        </li>
                        <li>{t('after_obtaining_permissions')}</li>
                        <li>{t('team_members_granted')}</li>
                    </ol>
                </section>
                <section className="text-center">
                    <h4
                        className={`${style.title} ${style['line-center']} text-white"`}
                    >
                        {t('introduction_to_guest_judges')}
                    </h4>

                    <small style={{ color: '#697078' }}>
                        {t('sorted_by_initial_letter')}
                    </small>

                    <div className="d-flex flex-wrap">
                        {vips().map(VIP => (
                            <GuestCard key={VIP.name} {...VIP} />
                        ))}
                    </div>
                </section>
                <div
                    className={style.Sponsor}
                    style={{ backgroundImage: `url(${BG_points})` }}
                >
                    <section className="p-5">
                        <h4 className="text-white">{t('cooperative_units')}</h4>
                        <div className="row">
                            {sponsors.map(({ title, list }) => (
                                <div
                                    key={title}
                                    className="col-md-2 col-sm-6 col-xs-6"
                                >
                                    <h5 className="text-white">{title}</h5>

                                    <ul className="list-unstyled">
                                        {list.map(({ title }) => (
                                            <li key={title}>{title}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                <ul className="list-unstyled d-flex flex-wrap justify-content-around align-items-center">
                    {sponsors.map(({ list }) =>
                        list.map(({ imageURL, title }) => (
                            <li key={title}>
                                <Image
                                    fluid
                                    className="m-3"
                                    style={{ width: '12rem' }}
                                    src={imageURL}
                                    alt={title}
                                />
                            </li>
                        ))
                    )}
                </ul>
            </Container>
        </div>
    </main>
);
