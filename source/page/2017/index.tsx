import { createCell } from 'web-cell';
import { Card } from 'boot-cell/source/Content/Card';
import { AccordionList } from 'boot-cell/source/Content/Accordion';

import style from './index.less';
import data from './data';
import { banner, qrcode } from './image';

export function Page2017() {
    return (
        <main>
            <div className="container">
                <header id={style.logo}>
                    <img src={banner} />
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
                    <div className="card-columns justify-content-center">
                        {data.guests.map(({ avatar, name, description }) => (
                            <Card
                                className={style.mentor}
                                image={avatar}
                                title={name}
                                text={description}
                            />
                        ))}
                    </div>
                </div>
                <div className={style['web-content']}>
                    <h2 className="mt-5 mb-4 text-center">
                        <span>SCHEDULE</span> <span>活动流程</span>
                    </h2>
                    <AccordionList
                        list={data.flows.map(
                            ({ time, guest, content, description }) => ({
                                title: `${time}【${content}】`,
                                content: description
                            })
                        )}
                    />
                </div>
                <div className={style['web-content']}>
                    <div>
                        <h2 className="mt-5 mb-4 text-center">
                            <span>时间地址</span>
                        </h2>
                        <p className="text-center">
                            时间：2017 年 11 月 19 日 09 ：00 - 17 ：30
                        </p>
                        <p className="text-center">
                            地点：成都市高新区天府五街 200 号菁蓉国际广场 7 栋 1
                            楼 主会场
                        </p>
                    </div>
                </div>
                <div className={style['web-content']}>
                    <div className={style.logos}>
                        {data.logos.map(({ title, childrens }) => (
                            <section>
                                <h2 className="mt-5 mb-4 text-center">
                                    <span>{title}</span>
                                </h2>
                                <ul>
                                    {childrens.map(({ url, img }) => (
                                        <li>
                                            <a href={url}>
                                                <img src={img} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                    <div>
                        <a
                            href="http://cn.mikecrm.com/rdVltvT"
                            className={style.btn}
                        >
                            我 要 报 名
                        </a>
                    </div>
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
                <iframe
                    frameborder="0"
                    scrolling="no"
                    lazyload="1"
                    loading="lazy"
                    src={`//uri.amap.com/marker?src=fcc-cdc&callnative=1&position=104.063519,30.539362&name=${data.title}`}
                ></iframe>
                <p style={{ color: '#ddd', fontSize: '12px' }}>
                    © 2017
                    <a target="_blank" href="https://chengdu.freecodecamp.cn/">
                        freeCodeCamp 成都社区
                    </a>
                </p>
            </footer>
        </main>
    );
}
