import { FC } from 'web-cell';
import { PageProps } from 'cell-router';
import { Card, CardBody, CardImg, CardTitle, Button, Ratio } from 'boot-cell';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'boot-cell';

import { LogoList } from './LogoList';
import * as style from './index.module.less';
import { guests, flows, logos, title } from './data';
import { banner, qrcode } from './image';

export const Page2017: FC<PageProps> = props => (
    <main {...props}>
        <div className="container">
            <header id={style.logo}>
                <img className="w-100" src={banner} />
            </header>
            <div id={style.introduce}>
                <h2 className="mt-5 mb-4 text-center">
                    <span>INTRODUCE</span> <span>活动介绍</span>
                </h2>
                <p style={{ textIndent: '2em' }}>
                    freeCodeCamp
                    成都社区一直以为成都技术爱好者以及用户提供一个开放的交流环境为目的，在过去的一年里，我们成功举办了30余次的社区活动，受到大家的一致好评和热烈响应。2017年已接近尾声，在组织部何青松的倡议下，我们特筹办freeCodeCamp【2017成都WEB前端交流大会】，为成都前端圈的技术工程师、爱好者提供一场前所未有的饕餮盛宴。在此，我们向您发出诚挚的邀请，此次盛会期待您的参与！
                </p>
            </div>
            <div className={style['web-content']}>
                <h2 className="mt-5 mb-4 text-center">
                    <span>SPEAKER</span> <span>分享嘉宾</span>
                </h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                    {guests.map(({ avatar, name, description }) => (
                        <div className="col">
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
                    <span>SCHEDULE</span> <span>活动流程</span>
                </h2>
                <Accordion alwaysOpen>
                    {flows.map(({ time, content, guest, description }) => (
                        <AccordionItem key={time}>
                            <AccordionHeader>
                                {time}【{content}】
                            </AccordionHeader>
                            <AccordionBody>
                                {guest ? (
                                    <ul>
                                        <li>
                                            讲师：
                                            <a href={'#guest_' + guest.name}>
                                                {guest.name}
                                            </a>
                                        </li>
                                        <li>简介：{description}</li>
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
                        <span>时间地址</span>
                    </h2>
                    <p>时间：2017 年 11 月 19 日 09 ：00 - 17 ：30</p>
                    <p>
                        地点：成都市高新区天府五街 200 号菁蓉国际广场 7 栋 1 楼
                        主会场
                    </p>
                </div>
            </div>
            <div className={style['web-content']}>
                <div className={`${style.logos} text-center`}>
                    {logos.map(LogoList)}
                </div>
                <Button
                    className="my-5 d-block"
                    variant="primary"
                    size="lg"
                    target="_blank"
                    href="http://cn.mikecrm.com/rdVltvT"
                >
                    我 要 报 名
                </Button>
            </div>
        </div>
        <footer className={style.footer}>
            <img className={style.qrcode} src={qrcode} />
            <p className="mt-0">
                特别鸣谢
                <a target="_blank" href="http://918930.lofter.com">
                    BBD - 王波
                </a>
                提供 海报、Logo 设计
            </p>
            <Ratio aspectRatio="21x9">
                <iframe
                    loading="lazy"
                    src={`//uri.amap.com/marker?src=fcc-cdc&callnative=1&position=104.063519,30.539362&name=${title}`}
                />
            </Ratio>
        </footer>
    </main>
);
