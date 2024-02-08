import { FC } from 'web-cell';
import { Button, Table, Ratio } from 'boot-cell';
import { Card, CardImg, CardBody, CardTitle } from 'boot-cell';
import { PageProps } from 'cell-router';
import { marked } from 'marked';

import { TopNavBar } from '../../component';
import { LogoList } from './LogoList';
import * as style from './index.module.less';
import {
    title,
    sections,
    lecturers,
    schedule,
    projects,
    topics,
    review,
    hosts,
    sponsors,
    partners,
    companies
} from './data';
import { poster, undraw_01, undraw_04 } from './image';
import photos from './image/photos';

export const Page2018: FC<PageProps> = ({ className, ...props }) => (
    <main className={`${style.root} ${className}`} {...props}>
        <div className={style.poster}>
            <TopNavBar
                brand={<>{title}</>}
                expand="lg"
                variant="light"
                menu={sections}
            />
            <img src={poster} className="img-fluid" />
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
                                variant="primary"
                                size="lg"
                                target="_blank"
                                href="http://fcc-chengdu.mikecrm.com/tFM8Rk8"
                            >
                                立即报名参加
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src={undraw_01} />
                    </div>
                </div>
            </div>
        </section>
        <section id="Lecturer" className={style.sparked}>
            <h2 className="mb-5">与会嘉宾</h2>
            <div className="container">
                <div className="row lecture-list">
                    {lecturers.map(({ avatar, name, detail }) => (
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
            </div>
        </section>
        <section id="Topic">
            <h2 className="text-center mb-5">议题</h2>
            <div className="container">
                <ol
                    className={`${style.subjects} overflow-hidden list-unstyled position-relative`}
                >
                    {topics.map(({ lecturer, title, detail }) => (
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
            </div>
        </section>
        <section className={style.sparked}>
            <div className="container">
                <div id="Bazaar" className="mb-4">
                    <h2 className="text-center mb-5">开源市集</h2>

                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        {projects.map(({ type, URL, title, detail, logo }) => (
                            <div className="col" key={title}>
                                <Card className="overflow-hidden">
                                    <CardImg src={logo} />
                                    <CardBody>
                                        <CardTitle>
                                            <a
                                                className="stretched-link text-primary"
                                                target="_blank"
                                                href={URL}
                                            >
                                                {title}
                                            </a>
                                        </CardTitle>
                                        <div
                                            className={`cr cr-top cr-right cr-${
                                                type ? 'red' : 'blue'
                                            }`}
                                        >
                                            {type ? '社团' : '项目'}
                                        </div>

                                        {detail}
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
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
                            <img className="img-fluid" src={undraw_04} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="Schedule">
            <h2 className="text-center mb-5">日程</h2>
            <div className="container">
                <Table className="text-center" striped hover>
                    <thead>
                        <tr>
                            <th scope="col" className="d-none d-md-block">
                                #
                            </th>
                            <th scope="col">时间</th>
                            <th scope="col">活动</th>
                            <th scope="col">主咖</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map(({ time, title, topic }) => (
                            <tr key={time}>
                                <td className="d-none d-md-block" />
                                <td className="text-nowrap">{time}</td>
                                <td>{title || `《${topic?.title}》`}</td>
                                <td>{topic?.lecturer.name}</td>
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
                    {review.map(({ title }, index) => (
                        <div key={title} className="col-md-4">
                            <img
                                className="img-fluid"
                                title={title}
                                src={photos[index]}
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
                <Ratio aspectRatio="21x9">
                    <iframe
                        loading="lazy"
                        src={`//uri.amap.com/marker?src=fcc-cdc&callnative=1&position=104.065789,30.582013&name=${title}`}
                    />
                </Ratio>
            </div>
        </section>
        <section id="Contributor" className="text-center">
            <h2>共创伙伴</h2>
            <div className="container">
                {hosts.map(({ title, member }) => (
                    <div
                        key={title}
                        className={`${style.contributorGroup} my-4`}
                    >
                        <h5 className="py-3">{title}办方</h5>
                        <LogoList member={member} />
                    </div>
                ))}
            </div>
            <div className="container">
                <div className={`${style.contributorGroup} my-4`}>
                    {sponsors.map(({ title, member }) => (
                        <section key={title}>
                            <h5 className="py-3">{title}赞助</h5>
                            <LogoList member={member} />
                        </section>
                    ))}
                </div>
            </div>
            <div className="container">
                <div className={`${style.contributorGroup} my-4`}>
                    <h5 className="py-3">合作伙伴</h5>
                    <LogoList member={partners} />
                </div>
            </div>
        </section>
        <section id="CallInAction" className={style.sparked}>
            <div className="container text-center">
                <Button
                    variant="primary"
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
                        {sections.map(({ href, title }) => (
                            <li key={title} className="nav-item">
                                <a className="nav-link" href={href}>
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    </main>
);
