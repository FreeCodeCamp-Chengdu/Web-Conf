import { t } from '../../i18n';
import {
    BBD,
    DevEco,
    DKS,
    FCC_CDG,
    GDG,
    GT,
    HCXY,
    JueJin,
    OSChina,
    SYL
} from '../2017/image/logos';
import {
    fanxiaobin,
    hushenquan,
    liangtongming,
    liwanpeng,
    lvyan,
    maoyufeng,
    qinglinbo,
    shenchangkun,
    wenqixiang,
    zhangwei
} from './image/avatar';
import gallery from './image/gallery';
import {
    cdht,
    cdhttv,
    cdkfx,
    cdtv,
    first,
    fm940,
    github,
    jhspace,
    jintai,
    JRsquare,
    kct,
    lvs,
    Microsoft,
    mikecrm,
    Monstarlab,
    scdaily,
    sctv,
    SegmentFault,
    sinasc,
    tap4fun,
    tedxChengDu,
    ThoughtWorks,
    XinYaoHang,
    yunpian
} from './image/logo';

export const awards = () => [
    {
        title: t('first_prize'),
        detail: '￥10000+'
    },
    {
        title: t('second_prize'),
        detail: '￥5000+'
    },
    {
        title: t('third_prize'),
        detail: '￥3000+'
    },
    {
        title: t('special_award'),
        detail: t('several')
    }
];

export const vips = () => [
    {
        avatar: hushenquan,
        name: t('hu_shenquan'),
        role: t('expert_judge'),
        identity: t('chief_operating_officer'),
        describe: t('long_term_responsibility')
    },
    {
        avatar: fanxiaobin,
        name: t('fan_xiaobin'),
        role: t('expert_judge'),
        identity: t('project_manager'),
        describe: t('long_term_involvement')
    },
    {
        avatar: shenchangkun,
        name: t('shen_changkun'),
        role: t('expert_judge'),
        identity: t('tedx_ambassador_china'),
        describe: t('tedx_ambassador_china_curator')
    },
    {
        avatar: maoyufeng,
        name: t('mao_yufeng'),
        role: t('expert_judge'),
        identity: t('chairman_xinyao_group'),
        describe: t('previously_employed_zhongyuan')
    },
    {
        avatar: wenqixiang,
        name: t('wen_qixiang'),
        role: t('expert_judge'),
        identity: t('gnome_asia_chongqing_chair'),
        describe: t('since_2007_upon_contacting')
    },
    {
        avatar: liwanpeng,
        name: t('li_wanpeng'),
        role: t('expert_judge'),
        identity: t('founder_ceo_youju_accelerator'),
        describe: t('founder_ceo_youju_accelerator_chengdu')
    },
    {
        avatar: qinglinbo,
        name: t('qing_linbo'),
        role: t('expert_judge'),
        identity: t(
            'associate_professor_masters_supervisor_sichuan_university'
        ),
        describe: t('with_years_experience_theoretical')
    },
    {
        avatar: zhangwei,
        name: t('zhang_wei'),
        role: t('special_guest'),
        identity: t('manager_bbd_infrastructure_department'),
        describe: t('previously_employed_oracle')
    },
    {
        avatar: liangtongming,
        name: t('liang_tongming'),
        role: t('special_guest'),
        identity: t('microsoft_most_valuable_professional_mvp'),
        describe: t('starting_from_may_2015_promote')
    },
    {
        avatar: lvyan,
        name: t('lv_yan'),
        role: t('special_guest'),
        identity: t('senior_project_manager'),
        describe: t('senior_project_manager_innovation')
    }
];

export const sponsors = [
    {
        title: t('host_unit'),
        list: [
            {
                title: '高新区创新创业服务中心',
                imageURL: cdht
            },
            {
                title: '成都科技企业孵化器协会',
                imageURL: cdkfx
            },
            {
                title: 'FCC成都社区',
                imageURL: FCC_CDG
            }
        ]
    },
    {
        title: t('title_sponsor'),
        list: [
            {
                title: '成都新耀行房产营销策划',
                imageURL: XinYaoHang
            }
        ]
    },
    {
        title: t('organizer1'),
        list: [
            {
                title: '合创新业',
                imageURL: HCXY
            },
            {
                title: '菁蓉国际广场',
                imageURL: JRsquare
            }
        ]
    },
    {
        title: t('platform_provider'),
        list: [
            {
                title: '梦思特科技(成都)',
                imageURL: Monstarlab
            }
        ]
    },
    {
        title: t('business_partner'),
        list: [
            {
                title: 'Github',
                imageURL: github
            },
            {
                title: '微软',
                imageURL: Microsoft
            },
            {
                title: 'BBD',
                imageURL: BBD
            },
            {
                title: '尼毕鲁',
                imageURL: tap4fun
            },
            {
                title: '交换空间',
                imageURL: jhspace
            },
            {
                title: '掘金',
                imageURL: JueJin
            },
            {
                title: '开源中国',
                imageURL: OSChina
            },
            {
                title: 'SegmentFault',
                imageURL: SegmentFault
            },
            {
                title: 'ThoughtWorks',
                imageURL: ThoughtWorks
            },
            {
                title: 'GDG',
                imageURL: GDG
            },
            {
                title: 'TEDxChengDu',
                imageURL: tedxChengDu
            },
            {
                title: '猿生态',
                imageURL: DevEco
            },
            {
                title: '个推',
                imageURL: GT
            },
            {
                title: '麦客',
                imageURL: mikecrm
            },
            {
                title: '实验楼',
                imageURL: SYL
            },
            {
                title: '菲斯特地产',
                imageURL: first
            },
            {
                title: '锦泰地产',
                imageURL: jintai
            },
            {
                title: 'LiveVideoStack',
                imageURL: lvs
            },
            {
                title: 'yunpian',
                imageURL: yunpian
            }
        ]
    },
    {
        title: t('media_partners'),
        list: [
            {
                title: '四川省电视台',
                imageURL: sctv
            },
            {
                title: '成都电视台',
                imageURL: cdtv
            },
            {
                title: '成都高新区电视台',
                imageURL: cdhttv
            },
            {
                title: '新浪四川',
                imageURL: sinasc
            },
            {
                title: '四川日报',
                imageURL: scdaily
            },
            {
                title: '四川财富广播',
                imageURL: fm940
            },
            {
                title: '科创通',
                imageURL: kct
            },
            {
                title: 'IT大咖说',
                imageURL: DKS
            }
        ]
    }
];

export const review = [
    {
        title: 'FCC 成都社区 Hackathon',
        imageURL: gallery[0]
    },
    {
        title: '《程序员职业生涯规划》FCC 成都 Code & Coffee #21',
        imageURL: gallery[1]
    },
    {
        title: '2017 成都 Web 前端大会（会场侧影）',
        imageURL: gallery[2]
    },
    {
        title: '认真笔记的 FCC 活跃社员（2017 成都 Web 前端大会）',
        imageURL: gallery[3]
    },
    {
        title: '2017 成都 Web 前端大会（会后合影）',
        imageURL: gallery[4]
    },

    {
        title: '2017 成都 Web 前端大会（听众提问）',
        imageURL: gallery[5]
    },
    {
        title: '2017 全球开发者关系大会（成都分会场）',
        imageURL: gallery[6]
    },
    {
        title: '龙泉中学 IT 科普',
        imageURL: gallery[7]
    }
];
