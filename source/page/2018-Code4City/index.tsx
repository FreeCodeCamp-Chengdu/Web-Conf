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
                            <li>
                                线上预赛：2018 年 1 月 12 日 20:00 ~ 2018 年 1
                                月 14 日 20:00
                            </li>
                            <li>决赛日期：2018 年 1 月 20 日 9:00 ~ 19:00</li>
                            <li>
                                决赛地址：高新天府五街 200 号菁蓉国际广场 7 栋 1
                                号菁蓉汇主会场
                            </li>
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
                            大赛宗旨
                        </h4>
                        <ul
                            className={`list-unstyled ${style['card-content']} flex-fill`}
                        >
                            <li>
                                关注城市生活：以“Code For
                                City”为主题，旨在用实际编程行动改变城市生活，让城市更美好
                            </li>
                            <li>
                                鼓励技术创新：创意与实践相互结合，想象与行动二者并重，是本次大赛的重要评判标准之一
                            </li>
                            <li>
                                提升行业氛围：创造有价值的产品，挖掘有潜力的团队，加强高新区对人才、企业资本的吸引力
                            </li>
                            <li>
                                展现成都风采：打造一个广泛聚焦的舞台，一展成都程序员风采，彰显成都IT新一线的城市风貌
                            </li>
                        </ul>
                    </div>
                    <div className="d-md-flex w-100 align-items-start my-5 flex-row-reverse">
                        <h4
                            className={`${style['card-title']} ${style['line-center']} ml-md-3`}
                        >
                            品牌理念
                        </h4>
                        <p className={style['card-content']}>
                            Code for City 是 freeCodeCamp China
                            的品牌活动，通过联合企业、高校、技术社区、公益组织等机构，以编程工作坊或黑客松等形式，赋能青年人为社会问题设计解决方案，旨在推动编程的普及，用技术影响世界。
                        </p>
                    </div>
                    <div className="col-md-12 col-xs-12 mt-md-5 text-center">
                        <h3
                            className={`${style.title} ${style['line-center']} text-white"`}
                        >
                            大赛奖项
                        </h3>
                        <div className="my-4">
                            {awards.map(({ title, detail }) => (
                                <>
                                    <h4 className="text-white">{title}</h4>
                                    <p>{detail}</p>
                                </>
                            ))}
                        </div>
                        <div className="col-md-12 my-4">
                            <p style={{ color: 'darkgray' }}>
                                所有奖项以现金或同等价值奖品发放
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
                        大赛参赛队伍规模及规则
                    </h4>
                    <small className="p-3">
                        <span className="pe-4">海选期：不限</span>
                        决赛日：6支
                    </small>
                    <ol className={style['rule-list']}>
                        <li>参赛队长通过官方链接或者官方微信群报名</li>
                        <li>
                            队长在获得官方授予的权限之后，拉队员进入自己的Team（GitHub
                            对应的 team、repository 自动创建）
                        </li>
                        <li>
                            参赛队成员在比赛开始时才被赋予代码库 push
                            权限，在评选阶段暂时失去 push 权限，赛后会取得 admin
                            权限以便继续开发
                        </li>
                    </ol>
                </section>
                <section className="text-center">
                    <h4
                        className={`${style.title} ${style['line-center']} text-white"`}
                    >
                        嘉宾评委介绍
                    </h4>

                    <small style={{ color: '#697078' }}>按首字母排序</small>

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
