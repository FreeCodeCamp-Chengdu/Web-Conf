import { createCell } from 'web-cell';

import { LogoList } from './LogoList';
// import './index.css';
import data from './data';
import { lecturer as lecturerImg, project, photos, undraw } from './image';

export function Page2018() {
    return (
        <main>
            <div className="poster">
                <nav className="navbar navbar-expand-lg navbar-light top-nav">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#top-nav"
                        aria-controls="top-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="top-nav">
                        <ul className="navbar-nav">
                            {data.section.map(({ name, title }) => (
                                <li className="nav-item">
                                    <a className="nav-link" href={'#' + name}>
                                        {title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <img src="image/poster.png" className="img-fluid" />
            </div>
            <section id="Introduction">
                <h2>大会介绍</h2>
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
                            <div className="padded text-center">
                                <a
                                    className="btn btn-primary btn-lg btn-cia"
                                    href="http://fccchengdu.mikecrm.com/tFM8Rk8"
                                    target="_blank"
                                >
                                    立即报名参加
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src={undraw.undraw_01} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="Lecturer" className="sparked">
                <h2>与会嘉宾</h2>
                <div className="container">
                    <div className="row lecture-list">
                        {data.lecturer.map(({ englishName, name, detail }) => (
                            <div className="col-md-3">
                                <div className="lecture">
                                    <img
                                        src={lecturerImg[englishName]}
                                        className="avatar"
                                        alt="guest name"
                                    />
                                    <p className="lecture-name">{name}</p>
                                    <p className="lecture-intro">{detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="Topic">
                <h2>议题</h2>
                <div className="container">
                    <ol className="subjects">
                        {data.topic.map(({ lecturer, title, detail }) => (
                            <li>
                                <div className="text-center">
                                    <p>
                                        <strong>
                                            {data.lecturer[lecturer].name}
                                        </strong>
                                    </p>
                                    <img
                                        className="avatar-sm"
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
                                    <p>{detail}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
            <section className="sparked">
                <div className="container">
                    <div id="Bazaar" className="bazaar">
                        <h2>开源市集</h2>
                        <div className="card-columns">
                            {data.project.map(
                                ({ type, name, URL, title, detail }) => (
                                    <div className="card overflow-hidden">
                                        <div
                                            className={`cr cr-top cr-right  cr-${
                                                type ? 'red' : 'blue'
                                            }`}
                                        >
                                            {type ? '社团' : '项目'}
                                        </div>
                                        <img
                                            className="card-img-top"
                                            src={project[name]}
                                            title={name}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <a
                                                    className="text-primary"
                                                    target="_blank"
                                                    href={URL}
                                                >
                                                    {title}
                                                </a>
                                            </h5>
                                            <p className="card-text">
                                                {detail}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div id="Enterprise" className="text-center">
                        <h2>参会企业</h2>
                        <p className="text-muted">
                            部分企业开放现场招聘位，欢迎优秀人才携简历前来~
                        </p>
                        <p className="text-muted">（排名不分先后）</p>
                        <div className="row">
                            <div className="col-md-7">
                                <ul className="companies">
                                    {data.company.map(name => (
                                        <li>{name}</li>
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
                <h2>日程</h2>
                <div className="container">
                    <table className="table table-striped table-responsive-sm">
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
                    </table>
                </div>
            </section>
            <section id="Review" className="sparked">
                <h2>往期精彩回顾</h2>
                <div className="container">
                    <div className="row">
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
                <h2>地址</h2>
                <div className="container">
                    <p className="text-muted">
                        天府大道北段966号天府国际金融中心4号楼1楼1号会议厅
                    </p>
                    <iframe
                        frameborder="0"
                        scrolling="no"
                        data-src="//uri.amap.com/marker?src=fcc-cdc&amp;callnative=1&amp;position=104.065789,30.582013&amp;name=2018 成都 Web 前端大会"
                    ></iframe>
                </div>
            </section>
            <section id="Contributor">
                <h2>共创伙伴</h2>
                <div className="container">
                    {data.host.map(({ title, member }) => (
                        <div className="contributor-group">
                            <h5>{title}办方</h5>
                            <LogoList member={member} />
                        </div>
                    ))}
                </div>
                <div className="container">
                    <div className="contributor-group">
                        {data.sponsor.map(({ title, member }) => (
                            <section>
                                <h5>{title}赞助</h5>
                                <LogoList member={member} />
                            </section>
                        ))}
                    </div>
                </div>
                <div className="container">
                    <div className="contributor-group">
                        <h5>合作伙伴</h5>
                        <LogoList member={data.partner} />
                    </div>
                </div>
            </section>
            <section id="CallInAction" className="sparked">
                <div className="container text-center">
                    <a
                        className="btn btn-primary btn-lg btn-cia"
                        target="_blank"
                        href="http://fccchengdu.mikecrm.com/tFM8Rk8"
                    >
                        立即报名参加
                    </a>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="d-none d-md-block">
                        <ul className="nav">
                            {data.section.map(({ name, title }) => (
                                <li className="nav-item">
                                    <a className="nav-link" href={'#' + name}>
                                        {title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="qrcode align-middle">
                        <img
                            className="img-fluid"
                            src="../common/FCC-CDG-WeChat.png"
                        />
                        <div>微信扫一扫关注我们</div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
