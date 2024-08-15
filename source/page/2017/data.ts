import avatars from './image/guests';
import {
    QRGJ,
    FCC_CDG,
    BBD,
    HCXY,
    _3W,
    DevEco,
    BW,
    GT,
    SYL,
    QE,
    JueJin,
    OSChina,
    SF,
    ZDK,
    MZ,
    GDG,
    TW,
    TH,
    WORK,
    DKS
} from './image/logos';

export const title = '2017 成都 Web 前端大会';

import { i18n } from '../../i18n';

const { t } = i18n;

export const guests = () => [
    {
        name: t('ye_xiao_chai'),
        avatar: avatars[0],
        content: '叶小钗嘉宾开场演讲',
        description:
            '原医联研发副总监，现为企鹅医生技术总监，研发负责人。先后任职于携程百度等公司，擅长前端开发，混合开发，对大型前端项目开发有一些认识，平时喜欢霹雳布袋戏。'
    },
    {
        name: t('chen_yang_bin'),
        avatar: avatars[7],
        content: '一个 Node 模块的自我修养',
        description:
            '麦麦养老软件研发负责人，持续创业者。在研发团队搭建、管理与技术体系渐进增强方面有一定心得。多年 Web 前端、服务端研发及架构设计经验，关注技术的原理与融会贯通，主张编码与工程的专业、规范、极简。'
    },
    {
        name: t('shui_ge'),
        avatar: avatars[4],
        content: '轻量级 Web MVVM 引擎的实现',
        description:
            '东方天呈 Web 前端工程师，JavaScript 全栈开发者、开源软件作者、freeCodeCamp 中文社区技术布道师、四川大学飞扬俱乐部·研发部 创始团队成员、jQuery贡献者。'
    },
    {
        name: t('liao_wei'),
        avatar: avatars[2],
        content: 'HTML 5 跨平台解决方案实践',
        description:
            '乐车邦前端开发负责人。曾就职于携程移动端框架技术部，负责构建代码的打包平台，维护共用组件，目前在乐车邦主要负责整个前端（浏览器，微信，小程序，app），致力于解决一套代码多端运行的方案，主要擅长 SPA 应用的开发，具有丰富的SPA开发经验。'
    },
    {
        name: t('hu_min'),
        avatar: avatars[5],
        content: 'Vue 开发那些事',
        description:
            '新蛋高级软件工程师。目前主要负责 Web 模块化开发平台建设与开发工作，擅长功能设计与实现。对前后端开发有较多实践经验。'
    },
    {
        name: t('dong_tao'),
        avatar: avatars[6],
        content: '大数据可视化之美',
        description:
            '5年前端经验，热爱钻研各种技术，喜欢写代码，工作之余著有 MTUI、H5DS 两个开源项目。现 BBD 前端部部门经理，对 Web 交互，以及数据可视化有丰富经验。'
    },
    {
        name: t('lu_lin'),
        avatar: avatars[3],
        content: 'React 组件化通用模式',
        description:
            '国双科技高级软件工程师，曾供职于奇虎 360 奇舞团、麦客 CRM。目前专注于端技术体系，喜欢思考软件开发的通用模式。'
    },
    {
        name: t('yu_ze_jiang'),
        avatar: avatars[1],
        content: 'Angular：挣脱舒适区的枷锁',
        description:
            'ThoughtWorks 咨询师，有着丰富的前后端项目开发经验，目前专注于前端领域的技术实践。Angular 项目活跃的 Community Contributor，广泛涉猎于国内的 Angular 技术布道工作。'
    }
];

export const flows = [
    {
        time: '09：00',

        content: '签到,早鸟有礼品',
        description: '扫码签到'
    },
    {
        time: '09：30',

        content: '主办方致辞、活动开场',
        description: '为了更好的活动参与体验，将手机调制静音，方便你我他……'
    },
    {
        time: '09：50',
        guest: guests()[0],
        content: '叶小钗嘉宾开场演讲',
        description: '内容暂时保密~'
    },
    {
        time: '10：20',
        guest: guests()[1],
        content: '一个 Node 模块的自我修养',
        description:
            '作为一个“全干”工程师，与你朝夕相处的 Node 模块，说简单可以简单到一个 index.js 和一个 package.json，说复杂也可以复杂到必须引入工程化的理念来管理。本分享来一起探讨下一个开源 Node 模块，所应该考虑的目录结构、代码检查、单元测试、基准测试、持续集成、自动构建、版本发布、变更记录等等这些需求，如何高效、规范的去实现'
    },
    {
        time: '11：10',
        guest: guests()[2],
        content: '轻量级 Web MVVM 引擎的实现',
        description:
            '只依赖 HTML 5、JS (ES 5) 的纯异步加载、声明式的 MVVM 引擎，它的简洁用法与内部实现'
    },
    {
        time: '12：00',

        content: '午餐时间（与嘉宾近距离交流）',
        description:
            '为了大家可以自行选择美食，所以午餐可以到会场外的银泰城解决哦~'
    },
    {
        time: '13：00',
        guest: guests()[3],
        content: 'HTML 5 跨平台解决方案实践',
        description:
            '乐车邦创业阶段，前端开发人数相对较少，但是平台众多，常用的如：浏览器、乐车邦 App、微信公众号网页版本、微信小程序。还有不计其数的定制化流量平台，如：手淘、百度地图、汽车之家、百度糯米、58到家、新美大等等，虽然渠道众多，但是业务流程相对统一，如何利用一套 HTML 5 代码解决多终端运行问题成了前端重中之重。'
    },
    {
        time: '13：50',
        guest: guests()[4],
        content: 'Vue 开发那些事',
        description:
            '通过对 Vue 项目开发中遇到的部分通用问题进行分解，探索特定问题或场景的解决方案。从目录结构划分、业务封装等方面来提升项目的可维护性。'
    },
    {
        time: '14：40',
        guest: guests()[5],
        content: '大数据可视化之美',
        description:
            '如何让繁杂的数据以最简最直观的形式呈现在用户的眼前？数据可视化真的那么高不可攀吗？今天就让我们来聊聊大数据可视化的常用技巧和常用算法吧！'
    },
    {
        time: '15：20',

        content: '茶歇 & 开放式交流',
        description: 'BBD 为大家准备了精美的茶歇~'
    },
    {
        time: '15：50',
        guest: guests()[6],
        content: 'React 组件化通用模式',
        description:
            '通过 React 项目的开发过程以及多个框架的使用，提取组件化开发的通用思路，对组件化、组件容器化以及微服务前端开发方式的一点思考。'
    },
    {
        time: '16：40',
        guest: guests()[7],
        content: 'Angular：挣脱舒适区的枷锁',
        description:
            '作为一个大而全的开发平台，Angular 团队提供了完善的开发环境：各类功能库、命令行工具、IDE 集成、移动端支持等等。然而，原生支持的完备性也为部分 Angular 开发者建立起了狭隘的舒适区，使得一些人放弃了探索，把官方支持当作了 Angular 的一切，自身沦落到日复一日调试 Component 和 Service 的搬砖工作中。其实，在 Angular 官方舒适区之外仍然存在很大的世界。比如我们可以使用 Webpack 之外的工具构建出比 jQuery 更小的完整应用，可以动态加载任意远程组件而无需统一打包，可以在 AOT 编译下实现运行时动态拼接视图…… 本次分享将会带来舒适区之外的无限可能。'
    },
    {
        time: '17：30',

        content: '活动结束、留影',
        description: '留下美好的瞬间~'
    }
];

export const logos = () => [
    {
        title: t('organizer'),
        childrens: [
            {
                img: QRGJ,
                url: 'http://www.cdht.gov.cn/cycjcyyq/50449.jhtml'
            },
            {
                img: FCC_CDG,
                url: 'https://fcc-cd.dev/'
            }
        ]
    },
    {
        title: t('naming_sponsor'),
        childrens: [
            {
                img: BBD,
                url: 'https://www.bbdservice.com'
            }
        ]
    },
    {
        title: t('co_organizer'),
        childrens: [
            {
                img: HCXY,
                url: 'hhttp://www.hechuangxinye.com/'
            },
            {
                img: _3W,
                url: 'http://www.3wcoffee.com/'
            }
        ]
    },
    {
        title: t('sponsoring_unit'),
        childrens: [
            {
                img: DevEco,
                url: 'http://www.deveco.io/'
            },
            {
                img: BW,
                url: 'http://www.broadview.com.cn/'
            },
            {
                img: GT,
                url: 'http://www.getui.com/cn/index.html'
            },
            {
                img: SYL,
                url: 'https://www.shiyanlou.com/'
            },
            {
                img: QE,
                url: 'https://www.doctorwork.com/'
            }
        ]
    },
    {
        title: t('partner_community'),
        childrens: [
            {
                img: JueJin,
                url: 'https://juejin.im/'
            },
            {
                img: OSChina,
                url: 'https://www.oschina.net/'
            },
            {
                img: SF,
                url: 'https://segmentfault.com/'
            },
            {
                img: ZDK,
                url: 'http://www.zaoduke.net/'
            },
            {
                img: MZ,
                url: 'http://www.maiziedu.com/'
            },
            {
                img: GDG,
                url: 'https://developers.google.com/groups'
            },
            {
                img: TW,
                url: 'https://www.thoughtworks.com/cn/'
            },
            {
                img: TH,
                url: 'http://www.tianhukeji.com/'
            },
            {
                img: WORK,
                url: 'http://workjia.cn/'
            }
        ]
    },
    {
        title: t('partner_media'),
        childrens: [
            {
                img: DKS,
                url: 'http://www.itdks.com/'
            }
        ]
    }
];
