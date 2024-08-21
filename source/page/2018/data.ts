import { FCC_CDC } from './image';
import { JueJin, BW, SYL, OSChina, SF } from '../2017/image/logos';
import {
    epubit,
    fezaoduke,
    turing,
    young,
    mikecrm
} from './image/logo/partner';
import { BaiCiZhan, baozun, cocoet, sxl } from './image/logo/sponsor';
import {
    Quincy_Larson,
    Xiong_Jie,
    Huang_Yi,
    Si_Yue,
    Yu_Che,
    Guo_LinShuo,
    Guo_DaFeng
} from './image/lecturer';
import {
    Deepin,
    WebCell,
    H5DS,
    Fun_loading,
    UKylin,
    Covariant_Script,
    PI6,
    React_Admin,
    KaiYuanShe,
    Vena_Network,
    CD_LUG
} from './image/project';
import { i18n } from '../../i18n';

const { t } = i18n;

export const title = () => t('chengdu_web_frontend_conference_2018');

export const sections = () => [
    {
        title: t('conference_introduction'),
        href: '#Introduction'
    },
    {
        title: t('guest_lecturers'),
        href: '#Lecturer'
    },
    {
        title: t('topics'),
        href: '#Topic'
    },
    {
        title: t('open_source_bazaar'),
        href: '#Bazaar'
    },
    {
        title: t('participating_companies'),
        href: '#Enterprise'
    },
    {
        title: t('schedule'),
        href: '#Schedule'
    },
    {
        title: t('address'),
        href: '#Address'
    },
    {
        title: t('past_highlights_review'),
        href: '#Review'
    },
    {
        title: t('photo_live'),
        href: 'http://www.pailixiang.com/album_ia172238913.html'
    },
    {
        title: t('co_creation_partners'),
        href: '#Contributor'
    }
];

export const lecturers = () => [
    {
        name: t('quincy_larson'),
        avatar: Quincy_Larson,
        detail: t('quincy_larson_freecodecamp_founder')
    },
    {
        name: t('xiong_jie'),
        avatar: Xiong_Jie,
        detail: t('xiong_jie_introduce')
    },
    {
        name: t('huang_yi'),
        avatar: Huang_Yi,
        detail: t('huang_yi_introduce') //显示不了英文
    },
    {
        name: t('si_yue'),
        avatar: Si_Yue,
        detail: t('si_yue_introduce') //显示不了英文
    },
    {
        name: t('yu_che'),
        avatar: Yu_Che,
        detail: t('yu_che_introduce') //显示不了英文
    },
    {
        name: t('guo_lin_shuo'),
        avatar: Guo_LinShuo,
        detail: t('guo_linshuo_introduce') //显示不了英文
    },
    {
        name: t('guo_da_feng'),
        avatar: Guo_DaFeng,
        detail: t('guo_dafeng_introduce') //显示不了英文
    }
];

export const topics = () => [
    {
        title: t('freecodecamp_from_0_to_290k_stars'),
        lecturer: lecturers()[0],
        detail: t('quincy_larson_career_journey') //显示不了英文
    },
    {
        title: t('empower_nodejs_with_cpp_wings'),
        lecturer: lecturers()[3],
        detail: '本主题围绕着何时、为何、如何在 Node.js 中使用 C++ 来赋予它更多的可能性（如提升性能、降低开发成本、做一些神奇的事情等）：\n 1. 对于一些重计算且输入输出数据简单的场景，用 C++ 的扩展来替代原本的 Pure JavaScript 写法，将会得到一些意想不到的效果\n 2. 对于一些本身就有成熟 C++ 库的场景来说，重新造一个 Node.js 的轮子无疑是一个开发成本比较高的做法\n 3. 还有一些 Node.js 无法涉及的底层，可以通过 C++ 扩展将那些接口暴露出来再在 Node.js 中封装\n 4. 有时候我们没必要去造一个 Electron 这样的结合 Node.js 的东西，但是我们可以利用 Node.js 的 C++ 扩展去封装一个已有的游戏引擎，打通它们各间独自管理的线程\n\n###### 听众收获\n 1. 会明白 Node.js 的一些内部机制\n 2. 对 Node.js 与 C++ 进行交互有一个初步的概念\n 3. 在自己的玩具项目中付诸实践，甚至在生产环境中用上这种姿势'
    },
    {
        title: t('open_source_project_maintenance'),
        lecturer: lecturers()[4],
        detail: '###### 如何做好一个开源项目？\n 1. 前期的宣传\n 2. 后期的维护\n 3. 工鞥的迭代\n 4. 失败案例 vue-strap\n 5. 成功案例 taro\n\n###### 做开源项目对个人的影响\n 1. 生活的影响\n 2. 对工作和职业的影响\n 3. 开源、工作、生活之间的平衡\n\n###### 在做开源项目中学到的东西'
    },
    {
        title: t('history_of_agile_in_china'),
        lecturer: lecturers()[1],
        detail: '以2002年《程序员》杂志发表《极限编程》技术专题、人民邮电出版社引进《极限编程》丛书为标志，敏捷进入中国已经十六年了。\n\n十六年前，全中国相信敏捷的人屈指可数；十六年后，大银行的CIO站在大会上讲的关键词里就有敏捷二字。沧海桑田，令人唏嘘。\n\n今天敏捷成为最为广泛采纳的软件开发方法，背后折射出的是 IT 在国民经济生活中的地位提升、是技术人员从外包码农到企业核心竞争力的地位提升、更是中国经济在全球经济中的地位提升。\n\n这十六年里，敏捷是如何被引进、被推介、被传播、被漠视、被抗拒、被接纳、被推崇、被转变、被淡化，如何由涓滴潜流汇成时代大潮？变革的源流是如何传承？哪些人，在哪些时间节点上，起到了重要的推动作用？\n\n作为敏捷在中国十六年发展历程的见证者和参与者，我希望回头梳理这段历史，为这段历史和卷入其中的人们刻碑立传。'
    },
    {
        title: t('efficient_h5_animation_development_method'),
        lecturer: lecturers()[5],
        detail: '随着设备性能的不断提升，越来越多的需求希望以动画的形式去表达呈现。在 Web 开发中，动画的实现成本无疑是重头之一。如何选择合适的实现方式，如何提高动画的开发效率，值得大家一起探讨。\n\n本次分享将围绕“保质保量”高效动画开发方式的主题，分享团队的一些探索心得与成果。'
    },
    {
        title: t('highly_available_react_server_side_rendering'),
        lecturer: lecturers()[6],
        detail: '深入浅出地分享“高可用 React SSR（服务端渲染）”技术栈在企业中应用实践'
    },
    {
        title: t('building_vue_component_library'),
        lecturer: lecturers()[2],
        detail: ' 1. 为什么要做组件库？\n 2. 组件的设计\n 3. 模块设计\n 4. 生态建设\n 5. 最佳实践'
    }
];

export const schedule = () => [
    {
        title: t('check_in_and_visit_bazaar'),
        time: '09:00 ~ 09:30'
    },
    {
        topic: topics()[0],
        time: '09:30 ~ 10:20'
    },
    {
        topic: topics()[1],
        time: '10:20 ~ 11:10'
    },
    {
        topic: topics()[2],
        time: '11:10 ~ 12:00'
    },
    {
        title: t('lunch_and_visit_bazaar'),
        time: '12:00 ~ 13:55'
    },
    {
        title: t('lucky_draw_session'),
        time: '13:55 ~ 14:00'
    },
    {
        topic: topics()[3],
        time: '14:00 ~ 14:50'
    },
    {
        topic: topics()[4],
        time: '14:50 ~ 15:40'
    },
    {
        title: t('tea_break_visit_bazaar_fun_programming_contest'),
        time: '15:40 ~ 16:10'
    },
    {
        topic: topics()[5],
        time: '16:10 ~ 17:00'
    },
    {
        topic: topics()[6],
        time: '17:00 ~ 17:50'
    },
    {
        title: t('lucky_draw_session'),
        time: '17:50 ~ 17:55'
    }
];

export const projects = [
    {
        title: '深度操作系统',
        name: 'Deepin',
        type: 0,
        URL: 'https://www.deepin.org',
        detail: '有全球影响力的中国 Linux 发行版',
        logo: Deepin
    },
    {
        title: 'WebCell',
        name: 'WebCell',
        type: 0,
        URL: 'https://web-cell.dev/',
        detail: '轻量级 Web 组件化引擎，基于 Web components（HTML 5.3、DOM 4.1）、ECMAScript 2018 和 装饰器提案 提供 MVVM 模型，并有官方封装的 BootStrap v4、Material Design 组件库。',
        logo: WebCell
    },
    {
        title: 'HTML 5 design software',
        name: 'H5DS',
        type: 0,
        URL: 'http://www.h5ds.com',
        detail: 'H5DS (HTML 5 design software) 是一款 B/S 的 H5 代码生成工具，通过可视化操作让不会代码的人也能轻松制作 H5 页面',
        logo: H5DS
    },
    {
        title: 'Fun loading',
        name: 'Fun loading',
        type: 0,
        URL: 'https://fanerge.github.io/fun-loading/dist/',
        detail: '基于 React 的 loading 组件库',
        logo: Fun_loading
    },
    {
        title: 'Ubuntu Kylin',
        name: 'UKylin',
        type: 0,
        URL: 'http://www.ubuntukylin.com',
        detail: '优麒麟（Ubuntu Kylin）是由中国 CCN（由 CSIP、Canonical、NUDT 三方联合组建）开源创新联合实验室与天津麒麟信息技术有限公司主导开发的全球开源项目，其宗旨是通过研发用户友好的桌面环境以及特定需求的应用软件，为全球 Linux 桌面用户带来非凡的全新体验！\n\n优麒麟操作系统是 Ubuntu 官方衍生版，得到来自 Debian、Ubuntu、Mate、LUPA 等国际社区及众多国内外社区爱好者的广泛参与和热情支持！',
        logo: UKylin
    },
    {
        title: 'Covariant Script',
        name: 'Covariant Script',
        type: 0,
        URL: 'http://covscript.org',
        detail: 'Covariant Script 编程语言是一个新兴的开源编程语言，发展前景广阔',
        logo: Covariant_Script
    },
    {
        title: 'PI6',
        name: 'PI6',
        type: 0,
        URL: 'http://github.com/visi-pivi-sivi/PI6',
        detail: 'PI6 is a bash shell based framework, allow author to add comments in the script, and provides a good interactive experience for user, who needs to know what will be done in the next, while running the script in step by step mode.',
        logo: PI6
    },
    {
        title: 'React Admin',
        name: 'React Admin',
        type: 0,
        URL: 'https://github.com/yezihaohao/react-admin',
        detail: '一套基于 React、Ant design 和 create-react-app 的后台管理系统解决方案。完整的代码目录结构设计、权限管理、自定义主题、路由配置以及 Redux 的基本用法等，一个完整且简单的 demo 让你快速上手 React 和后台系统。',
        logo: React_Admin
    },
    {
        title: '开源社',
        name: 'KaiYuanShe',
        type: 1,
        URL: 'http://www.kaiyuanshe.cn/',
        detail: '开源社是由中国支持开源的企业，社区及个人所组织的一个开源联盟，旨在推广开源，各成员按照“共治、共识、贡献”的原则自发设立。',
        logo: KaiYuanShe
    },
    {
        title: '洛书协议',
        name: 'Vena Network',
        type: 0,
        URL: 'https://github.com/venanetwork',
        detail: '洛书协议 —— 资产融通代币化的开放协议',
        logo: Vena_Network
    },
    {
        title: '成都 Linux 用户组',
        name: 'CD-LUG',
        type: 1,
        URL: 'https://cdlug.org/',
        detail: '成都 GNU/Linux 自组建以来，已经集聚了一批 Linux 爱好者、开发者、创业者。',
        logo: CD_LUG
    }
];

export const review = [
    {
        title: 'React 技术演讲'
    },
    {
        title: 'React 技术提问'
    },
    {
        title: 'React 技术讲师'
    },
    {
        title: 'React 大会观众'
    },
    {
        title: 'React 大会招聘'
    },
    {
        title: 'Code for City 黑客松茶歇'
    },
    {
        title: 'Code for City 黑客松 FCC 合影'
    },
    {
        title: '茶歇一览'
    },
    {
        title: 'React 大会招聘'
    }
];

export const hosts = () => [
    {
        title: t('principal'),
        member: [
            {
                name: 'FCC 成都',
                path: FCC_CDC,
                URL: 'https://freecodecamp-chengdu.github.io/'
            }
        ]
    },
    {
        title: t('supporting'),
        member: [
            {
                name: ' 掘金',
                path: JueJin,
                URL: 'https://juejin.im/'
            }
        ]
    }
];

export const sponsors = () => [
    {
        title: t('gold'),
        member: [
            {
                name: '上线了',
                path: sxl,
                URL: 'https://www.sxl.cn/'
            }
        ]
    },
    {
        title: t('silver'),
        member: [
            {
                name: '宝尊电商',
                path: baozun,
                URL: 'https://www.baozun.com/cn/'
            }
        ]
    },
    {
        title: t('bronze'),
        member: [
            {
                name: '可好玩乐',
                path: cocoet,
                URL: 'https://cocoet.cn/'
            },
            {
                name: '百词斩',
                path: BaiCiZhan,
                URL: 'http://www.baicizhan.com/'
            }
        ]
    }
];

export const partners = [
    {
        name: '博文视点',
        path: BW,
        URL: 'http://www.broadview.com.cn/'
    },
    {
        name: '开源中国',
        path: OSChina,
        URL: 'https://www.oschina.net/'
    },
    {
        name: '麦克',
        path: mikecrm,
        URL: 'https://www.mikecrm.com/'
    },
    {
        name: '前端早读课',
        path: fezaoduke,
        URL: 'https://zdk.f2er.net/'
    },
    {
        name: '实验楼',
        path: SYL,
        URL: 'https://www.shiyanlou.com/'
    },
    {
        name: '图灵社区',
        path: turing,
        URL: 'http://www.ituring.com.cn/'
    },
    {
        name: '异步社区',
        path: epubit,
        URL: 'https://www.epubit.com/'
    },
    {
        name: 'SegmentFault',
        path: SF,
        URL: 'https://segmentfault.com/'
    },
    {
        name: '小样青年社区',
        path: young,
        URL: 'http://www.xypark.com/'
    }
];

export const companies = [
    '上线了',
    '宝尊电商',
    '企鹅医生',
    '新蛋',
    '乐车邦',
    'tap4fun',
    'ThoughtWorks',
    '麦麦养老',
    'BBD',
    '美团',
    '腾讯',
    '知道创宇',
    '陌陌成都',
    '孔明科技',
    '知乎',
    '去哪儿',
    '医联',
    '极米科技',
    '今日头条',
    '点融网',
    '客如云',
    '街电',
    '华为云',
    'Camera360',
    '鱼说科技',
    '折800',
    'TestBird',
    '汇通天下',
    '科大讯飞',
    '咕咚',
    '西瓜创客',
    '实验楼',
    '四方伟业',
    '猪八戒',
    '陌陌',
    '货车邦',
    '活跃网络',
    '蚂蚁金服'
];
