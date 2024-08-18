import { Card, CardBody, CardImg, CardTitle, Button, Ratio } from 'boot-cell';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'boot-cell';
import { i18n } from './i18n';
import { LogoList } from './LogoList';
import * as style from './index.module.less';
import { guests, flows, logos, title } from './data';
import { banner, qrcode } from './image';

const { t } = i18n;

export default () => (
    <>
        <main className="container">
            <header id={style.logo}>
                <img className="w-100" src={banner} />
            </header>
            <div id={style.introduce}>
                <h2 className="mt-5 mb-4 text-center">
                    <span>INTRODUCE</span>{' '}
                    <span>{t('activity_introduction')}</span>
                </h2>
                <p style={{ textIndent: '2em' }}>{t('freecodecamp_intro')}</p>
            </div>
            <div className={style['web-content']}>
                <h2 className="mt-5 mb-4 text-center">
                    <span>SPEAKER</span> <span>{t('share_guest')}</span>
                </h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                    {guests().map(({ avatar, name, description }) => (
                        <div className="col" key={name}>
                            <Card id={'guest_' + name}>
                                <CardImg src={avatar} />
                                <CardBody>
                                    <CardTitle>{name}</CardTitle>
                                    <p className="text-muted">{description}</p>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div className={style['web-content']}>
                <h2 className="mt-5 mb-4 text-center">
                    <span>SCHEDULE</span> <span>{t('activity_schedule')}</span>
                </h2>
                <Accordion alwaysOpen>
                    {flows().map(({ time, content, guest, description }) => (
                        <AccordionItem key={time}>
                            <AccordionHeader>
                                {time}【{content}】
                            </AccordionHeader>
                            <AccordionBody>
                                {guest ? (
                                    <ul>
                                        <li>
                                            {t('instructor')}&nbsp;
                                            <a href={'#guest_' + guest.name}>
                                                {guest.name}
                                            </a>
                                        </li>
                                        <li>
                                            {t('description')}&nbsp;
                                            {description}
                                        </li>
                                    </ul>
                                ) : (
                                    description
                                )}
                            </AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className={`${style['web-content']} text-center`}>
                <div>
                    <h2 className="mt-5 mb-4">
                        <span>{t('time_and_location')}</span>
                    </h2>
                    <p>{t('event_time')}</p>
                    <p>{t('event_location')}</p>
                </div>
            </div>
            <div className={style['web-content']}>
                <div className={`${style.logos} text-center`}>
                    {logos().map(logo => (
                        <LogoList key={logo.title} {...logo} />
                    ))}
                </div>
                <Button
                    className="my-5 d-block"
                    variant="primary"
                    size="lg"
                    target="_blank"
                    href="http://cn.mikecrm.com/rdVltvT"
                >
                    {t('register_now')}
                </Button>
            </div>
        </main>
        <footer className={style.footer}>
            <img className={style.qrcode} src={qrcode} />
            <p className="mt-0">
                {t('special_thanks')}&nbsp;
                <a target="_blank" href="http://918930.lofter.com">
                    BBD - {t('wang_bo')}
                </a>
                &nbsp;
                {t('provide_poster_logo_design')}
            </p>
            <Ratio aspectRatio="21x9">
                <iframe
                    loading="lazy"
                    src={`//uri.amap.com/marker?src=fcc-cdc&callnative=1&position=104.063519,30.539362&name=${title}`}
                />
            </Ratio>
        </footer>
    </>
);
