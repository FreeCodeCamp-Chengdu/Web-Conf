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

export const title = '2017 成都 Web 前端大会'; //用i18n的话，我发现有报错地方，所以暂时不用i18n。

import { i18n } from './i18n';

const { t } = i18n;

export const guests = () => [
    {
        name: t('ye_xiao_chai'),
        avatar: avatars[0],
        content: t('opening_speech_by_guest_ye_xiaochai'),
        description: t('former_yilian_rd_deputy_director_description')
    },
    {
        name: t('chen_yang_bin'),
        avatar: avatars[7],
        content: t('node_module_self_discipline'),
        description: t('maimai_elderly_care_software_rd_leader_description')
    },
    {
        name: t('shui_ge'),
        avatar: avatars[4],
        content: t('lightweight_web_mvvm_engine_implementation'),
        description: t('east_sky_web_frontend_engineer_description')
    },
    {
        name: t('liao_wei'),
        avatar: avatars[2],
        content: t('html5_cross_platform_solution_practice'),
        description: t('lecaiban_frontend_development_leader_description')
    },
    {
        name: t('hu_min'),
        avatar: avatars[5],
        content: t('vue_development_insights'),
        description: t('newegg_senior_software_engineer_description')
    },
    {
        name: t('dong_tao'),
        avatar: avatars[6],
        content: t('beauty_of_big_data_visualization'),
        description: t('bbd_frontend_department_manager_description')
    },
    {
        name: t('lu_lin'),
        avatar: avatars[3],
        content: t('react_componentization_general_patterns'),
        description: t(
            'guosong_technology_senior_software_engineer_description'
        )
    },
    {
        name: t('yu_ze_jiang'),
        avatar: avatars[1],
        content: t('angular_breaking_free_from_comfort_zone'),
        description: t('thoughtworks_consultant_description')
    }
];

export const flows = () => [
    {
        time: '09：00',

        content: t('check_in_early_birds_get_gifts'),
        description: t('scan_to_check_in')
    },
    {
        time: '09：30',

        content: t('organizer_address_and_event_opening'),
        description: t('better_event_experience_silent_mode')
    },
    {
        time: '09：50',
        guest: guests()[0],
        content: t('opening_speech_by_guest_ye_xiaochai'),
        description: t('content_temporarily_confidential')
    },
    {
        time: '10：20',
        guest: guests()[1],
        content: t('node_module_self_discipline'),
        description: t('node_module_self_discipline_description')
    },
    {
        time: '11：10',
        guest: guests()[2],
        content: t('lightweight_web_mvvm_engine_implementation'),
        description: t('lightweight_web_mvvm_engine_description')
    },
    {
        time: '12：00',

        content: t('lunch_time_with_guests'),
        description: t('lunch_choice_description')
    },
    {
        time: '13：00',
        guest: guests()[3],
        content: t('html5_cross_platform_solution_practice'),
        description: t('html5_cross_platform_solution_practice_description')
    },
    {
        time: '13：50',
        guest: guests()[4],
        content: t('vue_development_insights'),
        description: t('vue_development_description')
    },
    {
        time: '14：40',
        guest: guests()[5],
        content: t('beauty_of_big_data_visualization'),
        description: t('big_data_visualization_description')
    },
    {
        time: '15：20',

        content: t('tea_break_open_discussion'),
        description: t('bbd_prepared_exquisite_tea_breaks')
    },
    {
        time: '15：50',
        guest: guests()[6],
        content: t('react_componentization_general_patterns'),
        description: t('react_componentization_description')
    },
    {
        time: '16：40',
        guest: guests()[7],
        content: t('angular_breaking_free_from_comfort_zone'),
        description: t('angular_description')
    },
    {
        time: '17：30',

        content: t('event_end_photo_session'),
        description: t('capture_wonderful_moments')
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
