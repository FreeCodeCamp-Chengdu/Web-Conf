import { createCell } from 'web-cell';
import { NavBar } from 'boot-cell/source/NavBar';
import { Button } from 'boot-cell/source/Form';
import { Table } from 'boot-cell/source/Table';
import { Card } from 'boot-cell/source/Content';
import marked from 'marked';

import { LogoList } from './LogoList';
import style from './index.less';
import data from './data';
import {
    lecturer as lecturerImg,
    project,
    photos,
    undraw,
    poster
} from './image';
import WeChat_QRC from '../../image/FCC-CDG-WeChat.png';

export function Page2018() {
    return (
        <main className={style.root}>
            <div className={style.poster}>
                <NavBar
                    className="top-nav"
                    title={data.title}
                    expand="lg"
                    theme="light"
                    background="light"
                    menu={data.section}
                />
                <img src={poster} className="img-fluid pt-5" />
            </div>
            <section id="Introduction">
                <h2 className="text-center mb-5">大会介绍</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <p>
                                成都 Web 前端大会是 freeCodeCamp
                                成都社区一年一度举办的大型技术交流活动，主要面向西南地区
                                Web 应用、JavaScript
                                全栈开发领域的程序员、架构师、研发团队管理者和技术爱好者。我们在借鉴同类行业大会技术分享宝贵经验的同时，也创新地增加了优秀企业现场招聘、开源项目/社团宣传展位，为互联网、软件开发技术从业者提供从学习、求职到合作洽谈的一站式资讯平台，全力打造西南一流的
                                IT 行业盛会。
                            </p>
                            <div className="p-4 text-center">
                                <Button
                                    size="lg"
                                    target="_blank"
                                    href="http://fcc-chengdu.mikecrm.com/tFM8Rk8"
                                >
                                    立即报名参加
                                </Button>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src={undraw.undraw_01} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="Lecturer" className={`text-center ${style.sparked}`}>
                <h2 className="mb-5">与会嘉宾</h2>
                <div className="container">
                    <div className="row lecture-list">
                        {data.lecturer.map(({ englishName, name, detail }) => (
                            <div className="col-md-3 p-2 overflow-hidden">
                                <div className={style.lecture}>
                                    <img
                                        src={lecturerImg[englishName]}
                                        className={style.avatar}
                                        alt={name}
                                    />
                                    <p className="lecture-name">{name}</p>
                                    <p
                                        className="lecture-intro text-left"
                                        innerHTML={marked(detail)}
                                    ></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="Topic">
                <h2 className="text-center mb-5">议题</h2>
                <div className="container">
                    <ol
                        className={`${style.subjects} overflow-hidden list-unstyled position-relative`}
                    >
                        {data.topic.map(({ lecturer, title, detail }) => (
                            <li>
                                <div className="text-center">
                                    <h6>{data.lecturer[lecturer].name}</h6>
                                    <img
                                        className={style['avatar-sm']}
                                        src={
                                            lecturerImg[
                                                data.lecturer[lecturer]
                                                    .englishName
                                            ]
                                        }
                                    />
                                </div>
                                <div>
                                    <h5>{title}</h5>
                                    <p innerHTML={marked(detail)}></p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
            <section className={style.sparked}>
                <div className="container">
                    <div id="Bazaar" className="mb-4">
                        <h2 className="text-center mb-5">开源市集</h2>
                        <div className="card-columns">
                            {data.project.map(
                                ({ type, name, URL, title, detail }) => (
                                    <Card
                                        className="overflow-hidden"
                                        title={
                                            <a
                                                className="text-primary"
                                                target="_blank"
                                                href={URL}
                                            >
                                                {title}
                                            </a>
                                        }
                                        text={detail}
                                        image={project[name]}
                                    >
                                        <div
                                            className={`cr cr-top cr-right  cr-${
                                                type ? 'red' : 'blue'
                                            }`}
                                        >
                                            {type ? '社团' : '项目'}
                                        </div>
                                    </Card>
                                )
                            )}
                        </div>
                    </div>
                    <div id="Enterprise" className="text-center">
                        <h2 className="text-center mb-5">参会企业</h2>
                        <p className="text-muted">
                            部分企业开放现场招聘位，欢迎优秀人才携简历前来~
                        </p>
                        <p className="text-muted">（排名不分先后）</p>
                        <div className="row">
                            <div className="col-md-7">
                                <ul
                                    className={`${style.companies} list-inline`}
                                >
                                    {data.company.map(name => (
                                        <li className="list-inline-item py-1 px-3 m-1 bg-white">
                                            {name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-5">
                                <img
                                    src={undraw.undraw_04}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Schedule">
                <h2 className="text-center mb-5">日程</h2>
                <div className="container">
                    <Table striped>
                        <thead>
                            <tr>
                                <th scope="col" className="d-none d-md-block">
                                    #
                                </th>
                                <th scope="col">时间</th>
                                <th scope="col">活动</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.schedule.map(({ time, title, topic }) => (
                                <tr>
                                    <td className="d-none d-md-block"></td>
                                    <td className="text-nowrap">{time}</td>
                                    <td>
                                        {title ||
                                            `《${data.topic[topic!].title}》 ${data.lecturer[data.topic[topic!].lecturer].name}`}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </section>
            <section id="Review" className={style.sparked}>
                <h2 className="text-center mb-5">往期精彩回顾</h2>
                <div className="container">
                    <div className={`row ${style.photos}`}>
                        {data.review.map(({ title }, index) => (
                            <div className="col-md-4">
                                <img
                                    className="img-fluid"
                                    title={title}
                                    src={photos[index + 1]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="Address" className="text-center">
                <h2 className="text-center mb-5">地址</h2>
                <div className="container">
                    <p className="text-muted">
                        天府大道北段966号天府国际金融中心4号楼1楼1号会议厅
                    </p>
                    <iframe
                        frameborder="0"
                        scrolling="no"
                        lazyload="1"
                        loading="lazy"
                        src={`//uri.amap.com/marker?src=fcc-cdc&callnative=1&position=104.065789,30.582013&name=${data.title}`}
                    ></iframe>
                </div>
            </section>
            <section id="Contributor" className="text-center">
                <h2>共创伙伴</h2>
                <div className="container">
                    {data.host.map(({ title, member }) => (
                        <div className={`${style.contributorGroup} my-4`}>
                            <h5 className="py-3">{title}办方</h5>
                            <LogoList member={member} />
                        </div>
                    ))}
                </div>
                <div className="container">
                    <div className={`${style.contributorGroup} my-4`}>
                        {data.sponsor.map(({ title, member }) => (
                            <section>
                                <h5 className="py-3">{title}赞助</h5>
                                <LogoList member={member} />
                            </section>
                        ))}
                    </div>
                </div>
                <div className="container">
                    <div className={`${style.contributorGroup} my-4`}>
                        <h5 className="py-3">合作伙伴</h5>
                        <LogoList member={data.partner} />
                    </div>
                </div>
            </section>
            <section id="CallInAction" className={style.sparked}>
                <div className="container text-center">
                    <Button
                        size="lg"
                        target="_blank"
                        href="http://fcc-chengdu.mikecrm.com/tFM8Rk8"
                    >
                        立即报名参加
                    </Button>
                </div>
            </section>
            <footer className="pt-4 pb-3 clearfix">
                <div className="container">
                    <div className="d-none d-md-block">
                        <ul className="nav">
                            {data.section.map(({ href, title }) => (
                                <li className="nav-item">
                                    <a className="nav-link" href={href}>
                                        {title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="qrcode text-center">
                        <img className="img-fluid" src={WeChat_QRC} />
                        <div>微信扫一扫关注我们</div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
