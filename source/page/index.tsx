import * as WebCell from 'web-cell';

import NavBar from '../component/NavBar';

import WeChat_QRC from '../../common/FCC-CDG-WeChat.png';

export default function PageIndex() {
    return (
        <NavBar title="freeCodeCamp 成都社区">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-md-7 py-4">
                        <h4 class="text-white">关于我们</h4>
                        <p class="text-muted">
                            freeCodeCamp 是由美国人 Quincy Larson
                            创立的公益在线编程学习平台，几年时间便发展成 GitHub
                            上 Star 最多的几大开源项目。
                        </p>
                        <p class="text-muted">
                            freeCodeCamp 成都社区成立于 2016
                            年，是中国大陆最早一批 FCC
                            城市线下社区，目前会员千余人，也是最大的 FCC
                            城市社区。在核心团队 20 余人两年的努力下，FCC
                            成都已覆盖
                            编程教育、技术招聘、行业大会等程序员全职业生涯的公益服务。
                        </p>
                    </div>
                    <div class="col-sm-4 offset-md-1 py-4">
                        <h4 class="text-white">联系我们</h4>
                        <ul class="list-unstyled">
                            <li>
                                <a
                                    href="https://www.weibo.com/u/6165665516"
                                    class="text-white"
                                >
                                    新浪微博
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/FreeCodeCamp-Chengdu"
                                    class="text-white"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <img
                                    class="img-thumbnail"
                                    src={WeChat_QRC}
                                    title="微信公众号"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </NavBar>
    );
}
