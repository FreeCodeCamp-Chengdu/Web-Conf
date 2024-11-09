import { t } from '../../i18n';
import { BW, JueJin, OSChina, SF, SYL } from '../2017/image/logos';
import { FCC_CDC } from './image';
import {
    Guo_DaFeng,
    Guo_LinShuo,
    Huang_Yi,
    Quincy_Larson,
    Si_Yue,
    Xiong_Jie,
    Yu_Che
} from './image/lecturer';
import {
    epubit,
    fezaoduke,
    mikecrm,
    turing,
    young
} from './image/logo/partner';
import { BaiCiZhan, baozun, cocoet, sxl } from './image/logo/sponsor';
import {
    CD_LUG,
    Covariant_Script,
    Deepin,
    Fun_loading,
    H5DS,
    KaiYuanShe,
    PI6,
    React_Admin,
    UKylin,
    Vena_Network,
    WebCell
} from './image/project';

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
        detail: t('huang_yi_introduce')
    },
    {
        name: t('si_yue'),
        avatar: Si_Yue,
        detail: t('si_yue_introduce')
    },
    {
        name: t('yu_che'),
        avatar: Yu_Che,
        detail: t('yu_che_introduce')
    },
    {
        name: t('guo_lin_shuo'),
        avatar: Guo_LinShuo,
        detail: t('guo_linshuo_introduce')
    },
    {
        name: t('guo_da_feng'),
        avatar: Guo_DaFeng,
        detail: t('guo_dafeng_introduce')
    }
];

export const topics = () => [
    {
        title: t('freecodecamp_from_0_to_290k_stars'),
        lecturer: lecturers()[0],
        detail: t('quincy_larson_career_journey')
    },
    {
        title: t('empower_nodejs_with_cpp_wings'),
        lecturer: lecturers()[3],
        detail: t('nodejs_cpp_usage_topic')
    },
    {
        title: t('open_source_project_maintenance'),
        lecturer: lecturers()[4],
        detail: t('open_source_guide')
    },
    {
        title: t('history_of_agile_in_china'),
        lecturer: lecturers()[1],
        detail: t('history_of_agile_in_china_detail')
    },
    {
        title: t('efficient_h5_animation_development_method'),
        lecturer: lecturers()[5],
        detail: t('efficient_h5_animation_development_method_detail')
    },
    {
        title: t('highly_available_react_server_side_rendering'),
        lecturer: lecturers()[6],
        detail: t('highly_available_react_ssr_enterprise_application_practice')
    },
    {
        title: t('building_vue_component_library'),
        lecturer: lecturers()[2],
        detail: t('building_vue_component_library_detail')
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

export const projects = () => [
    {
        title: '深度操作系统',
        name: 'Deepin',
        type: 0,
        URL: 'https://www.deepin.org',
        detail: t('global_influence_chinese_linux_distribution'),
        logo: Deepin
    },
    {
        title: 'WebCell',
        name: 'WebCell',
        type: 0,
        URL: 'https://web-cell.dev/',
        detail: t('lightweight_web_componentization_engine_detail'),
        logo: WebCell
    },
    {
        title: 'HTML 5 design software',
        name: 'H5DS',
        type: 0,
        URL: 'http://www.h5ds.com',
        detail: t('h5ds_html5_design_software_detail'),
        logo: H5DS
    },
    {
        title: 'Fun loading',
        name: 'Fun loading',
        type: 0,
        URL: 'https://fanerge.github.io/fun-loading/dist/',
        detail: t('react_loading_component_library'),
        logo: Fun_loading
    },
    {
        title: 'Ubuntu Kylin',
        name: 'UKylin',
        type: 0,
        URL: 'http://www.ubuntukylin.com',
        detail: t('ubuntu_kylin_detail'),
        logo: UKylin
    },
    {
        title: 'Covariant Script',
        name: 'Covariant Script',
        type: 0,
        URL: 'http://covscript.org',
        detail: t('covariant_script_detail'),
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
        detail: t('react_antd_backend_management_solution'),
        logo: React_Admin
    },
    {
        title: '开源社',
        name: 'KaiYuanShe',
        type: 1,
        URL: 'http://www.kaiyuanshe.cn/',
        detail: t('kaiyuanshe_open_source_alliance_description'),
        logo: KaiYuanShe
    },
    {
        title: '洛书协议',
        name: 'Vena Network',
        type: 0,
        URL: 'https://github.com/venanetwork',
        detail: t('luoshu_protocol_asset_securitization_tokenization'),
        logo: Vena_Network
    },
    {
        title: '成都 Linux 用户组',
        name: 'CD-LUG',
        type: 1,
        URL: 'https://cdlug.org/',
        detail: t('chengdu_gnu_linux_community_description'),
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
