import WeChat_QRC from '../image/FCC-CDG-WeChat.png';
import { wechatLogo as banner_2017 } from './2017/image';
import gallery_Code4City from './2018-Code4City/image/gallery';
import banner_2018_React from './2018-React/React-ChengDu.jpg';
import { FCC_CDC, poster as banner_2018 } from './2018/image';
import banner_2019 from './2019/data/banner.jpg';

import { i18n } from '../i18n';

const { t } = i18n;

export const common_menu = () => [
    { title: t('organizer_introduction'), href: 'community' },
    { title: t('national_it_events'), href: 'activity' }
];

export const summits = () =>
    [
        {
            title: t('coscon_23_main_venue'),
            date: '2023-10-28',
            URL: 'https://kaiyuanshe.cn/activity/coscon-2023',
            banner: 'https://ows.blob.core.chinacloudapi.cn/$web/file/coscon23kv.png'
        },
        {
            title: t('coscon22_chengdu_branch_venue'),
            date: '2022-10-29',
            URL: 'https://mp.weixin.qq.com/s/rOoK4Gs_RLR3IvRcd4a2rQ',
            banner: 'https://ows.blob.core.chinacloudapi.cn/$web/file/coscon22_cover.jpg'
        },
        {
            title: t('coscon21_main_venue'),
            date: '2021-10-30',
            URL: 'https://mp.weixin.qq.com/s/Ylm5mp-t4B7NL6n4WiqYOw',
            banner: 'https://ows.blob.core.chinacloudapi.cn/$web/file/COSCon-2021-banner.jpg'
        },
        {
            title: t('coscon20_chengdu_branch_venue'),
            date: '2020-10-24',
            URL: 'https://fcc-cd.dev/activity/conference/coscon-2020-chengdu/',
            banner: 'https://ows.blob.core.chinacloudapi.cn/files/assets/COS_Con_20_abaa9e2a66.png'
        },
        {
            title: t('chengdu_web_full_stack_conference_2019'),
            date: '2019-11-16',
            URL: '2019/',
            banner: banner_2019
        },
        {
            title: t('chengdu_web_frontend_conference_2018'),
            date: '2018-11-10',
            URL: '2018/',
            banner: banner_2018
        },
        {
            title: t('chongqing_web_frontend_conference_2018'),
            date: '2018-08-18',
            URL: 'https://fcc-cd.dev/activity/conference/web-fe-conf-chongqing-2018/',
            banner: 'http://wimg.huodongxing.com/logo/201807/9450206156400/123133704540930_v2.jpg@!wmlogo'
        },
        {
            title: t('chengdu_react_tech_conference_2018'),
            date: '2018-03-31',
            URL: 'https://juejin.cn/post/6844903694845100040',
            banner: banner_2018_React
        },
        {
            title: t('xinyao_cup_code_for_city_hackathon'),
            date: '2018-01-20',
            URL: '2018/Code4City/',
            banner: gallery_Code4City[0]
        },
        {
            title: t('chengdu_web_frontend_conference_2017'),
            date: '2017-11-19',
            URL: '2017/',
            banner: banner_2017
        }
    ].sort(({ date: A }, { date: B }) => +new Date(B) - +new Date(A));

const { date: first } = summits().slice(-1)[0],
    { date: last } = summits()[0];

const years = Math.ceil(+last.slice(0, 4) - +first.slice(0, 4)) + 1;

export const features = () => [
    {
        title: t('adhering_to_freecodecamp_international_community_spirit'),
        summary: t('freecodecamp_global_largest_open_source_learning_platform'),
        logo: 'https://github.com/freeCodeCamp.png'
    },
    {
        title: t('leading_freecodecamp_chinese_community_trend'),
        summary: t('first_to_establish_daily_activities_guidelines'),
        logo: 'https://github.com/freeCodeCamp-China.png'
    },
    {
        title: t('chengdu_most_active_programmer_community'),
        summary: t('years_continue_to_undertake', {
            which_year: years,
            number_of_times: summits.length,
            long_sentence: t('tech_conferences')
        }),
        logo: FCC_CDC
    },
    {
        title: t('numerous_chinese_tech_community_allies'),
        summary: t('allies_summary'),
        logo: 'https://i0.wp.com/opensource.org/wp-content/uploads/2009/06/osi_symbol.png?w=628&ssl=1'
    },
    {
        title: t('more_exciting_awaits_your_participation'),
        summary: '',
        logo: WeChat_QRC
    }
];
