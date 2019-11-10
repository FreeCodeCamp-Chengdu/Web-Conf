import { createCell, Fragment } from 'web-cell';
import { Button } from 'boot-cell/source/Form/Button';
import { CarouselView } from 'boot-cell/source/Content/Carousel';

import style from './index.less';
import data from './data';

export function Code4City() {
    return (
        <Fragment>
            <div className={style.Introduce}>
                <div className="container px-3 py-5">
                    <div className="row">
                        <div className={`col-xs-12 col-md-6`}>
                            <h1 className={`${style['main-title']} text-white`}>
                                2018 黑客松大赛
                            </h1>
                            <h2 className="theme text-white">Code for City</h2>

                            <Button
                                className={style.register}
                                target="_blank"
                                href="https://fcc.hackerearth.com/zh/"
                            >
                                参赛通道
                                <span className="fa fa-arrow-right"></span>
                            </Button>

                            <ul className="list-unstyled">
                                <li>
                                    线上预赛：2018年1月12日 20:00 --
                                    2018年1月14日 20:00
                                </li>
                                <li>决赛日期：2018年1月20日 9:00 -- 19:00</li>
                                <li>
                                    决赛地址：高新天府五街200号菁蓉国际广场7栋1号菁蓉汇主会场
                                </li>
                            </ul>
                        </div>

                        <div className="col-xs-12 col-md-6">
                            <CarouselView
                                interval={3}
                                list={data.gallery.map(
                                    ({ imageURL, title }) => ({
                                        image: imageURL,
                                        title
                                    })
                                )}
                            />
                        </div>

                        <div
                            className={`card-group my-5 w-100 position-relative`}
                        >
                            <div
                                className={`card-title col-md-2 ${style['title-left']}`}
                            >
                                <h4
                                    className={`title ${style['line-right']} text-white`}
                                >
                                    大赛宗旨
                                </h4>
                            </div>
                            <div
                                className={`card-content ${style['card-content']} col-md-10 col-md-offset-1`}
                            >
                                <ul className="list-unstyled">
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
                        </div>
                        <div className="card-group my-5 w-100 position-relative">
                            <div
                                className={`card-title col-md-2 ${style['title-right']}`}
                            >
                                <h4
                                    className={`title ${style['line-left']} text-white`}
                                >
                                    品牌理念
                                </h4>
                            </div>
                            <div
                                className={`card-content ${style['card-content']} col-md-10 col-md-offset-1`}
                            >
                                Code for City 是 freeCodeCamp China
                                的品牌活动，通过联合企业、高校、技术社区、公益组织等机构，以编程工作坊或黑客松等形式，赋能青年人为社会问题设计解决方案，旨在推动编程的普及，用技术影响世界。
                            </div>
                        </div>
                        <div
                            className={`col-md-12 col-xs-12 ${style['award-list']}`}
                        >
                            <h3
                                className={`${style.title} ${style['line-center']} text-white"`}
                            >
                                大赛奖项
                            </h3>
                            <div className="col-md-12 col-xs-12 my-4">
                                {data.awards.map(({ title, detail }) => (
                                    <div className="col-md-3 col-xs-6 ">
                                        <h4 className="text-white">{title}</h4>
                                        <p>{detail}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-12 my-4">
                                <p style={{ color: 'darkgray' }}>
                                    所有奖项以现金或同等价值奖品发放
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.Detail}>
                <div className="container px-3 py-5">
                    <section className="text-center my-5">
                        <h4
                            className={`${style.title} ${style['line-center']} text-white text-center"`}
                        >
                            大赛参赛队伍规模及规则
                        </h4>
                        <span className="p-3 center-block">
                            <small>
                                海选期：不限&nbsp;&nbsp;&nbsp;&nbsp;决赛日：6支
                            </small>
                        </span>
                        <ol className={style['rule-list']}>
                            <li>参赛队长通过官方链接或者官方微信群报名</li>
                            <li>
                                队长在获得官方授予的权限之后，拉队员进入自己的Team（GitHub
                                对应的 team、repository 自动创建）
                            </li>
                            <li>
                                参赛队成员在比赛开始时才被赋予代码库 push
                                权限，在评选阶段暂时失去 push 权限，赛后会取得
                                admin 权限以便继续开发
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
                            {data.vips.map(
                                ({
                                    avatar,
                                    name,
                                    role,
                                    identity,
                                    describe
                                }) => (
                                    <div className="col-md-6 col-xs-12">
                                        <div className={style['guest']}>
                                            <div
                                                className={
                                                    style['guest-avatar']
                                                }
                                                style={{
                                                    backgroundImage: `url('${avatar}')`
                                                }}
                                            ></div>
                                            <div
                                                className={style['guest-title']}
                                            >
                                                <h5 className="guest-name text-white">
                                                    {name}
                                                </h5>
                                                <span
                                                    className={
                                                        style['guest-role']
                                                    }
                                                >
                                                    {role}
                                                </span>
                                                <div
                                                    className={
                                                        style['guest-identity']
                                                    }
                                                >
                                                    {identity}
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    style['guest-describe']
                                                }
                                            >
                                                {describe}
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </section>
                    <section className={style.Sponsor}>
                        <div className="Background-Image">
                            <h4 className={`${style['line-left']} text-white"`}>
                                合作单位
                            </h4>

                            <div className="row">
                                {data.sponsors.map(({ title, list }) => (
                                    <div className="col-md-2 col-sm-6 col-xs-6">
                                        <h5 className="text-white">{title}</h5>

                                        <ul className="list-unstyled">
                                            {list.map(({ title }) => (
                                                <li>{title}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <ul className="list-unstyled d-flex flex-wrap hidden-xs text-center">
                        {data.sponsors.map(({ list }) =>
                            list.map(({ imageURL, title }) => (
                                <li>
                                    <img
                                        className="img-fluid center-block"
                                        style={{
                                            width: '12rem',
                                            maxHeight: '4rem'
                                        }}
                                        src={imageURL}
                                        alt={title}
                                    />
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}
