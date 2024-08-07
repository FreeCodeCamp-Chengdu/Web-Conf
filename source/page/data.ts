import WeChat_QRC from '../image/FCC-CDG-WeChat.png';
import { wechatLogo as banner_2017 } from './2017/image';
import gallery_Code4City from './2018-Code4City/image/gallery';
import banner_2018_React from './2018-React/React-ChengDu.jpg';
import { FCC_CDC, poster as banner_2018 } from './2018/image';
import banner_2019 from './2019/data/banner.jpg';

import { i18n } from '../i18n';

const { t } = i18n;

export const common_menu = [
    { title: t('organizer_introduction'), href: 'community' },
    { title: t('national_it_events'), href: 'activity' }
];

export const summits = [
    {
        title: t('coscon_23_main_venue'),
        date: '2023-10-28',
        URL: 'https://kaiyuanshe.cn/activity/coscon-2023',
        banner: 'https://ows.blob.core.chinacloudapi.cn/$web/file/coscon23kv.png'
    },
    {
        title: "COSCon'22（中国开源年会）成都分会场",
        date: '2022-10-29',
        URL: 'https://mp.weixin.qq.com/s/rOoK4Gs_RLR3IvRcd4a2rQ',
        banner: 'https://ows.blob.core.chinacloudapi.cn/$web/file/coscon22_cover.jpg'
    },
    {
        title: "COSCon'21（中国开源年会）主会场",
        date: '2021-10-30',
        URL: 'https://mp.weixin.qq.com/s/Ylm5mp-t4B7NL6n4WiqYOw',
        banner: 'https://ows.blob.core.chinacloudapi.cn/$web/file/COSCon-2021-banner.jpg'
    },
    {
        title: "COSCon'20（中国开源年会）成都分会场",
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
        title: '2018 成都 Web 前端大会',
        date: '2018-11-10',
        URL: '2018/',
        banner: banner_2018
    },
    {
        title: '2018 重庆 Web 前端大会',
        date: '2018-08-18',
        URL: 'https://fcc-cd.dev/activity/conference/web-fe-conf-chongqing-2018/',
        banner: 'http://wimg.huodongxing.com/logo/201807/9450206156400/123133704540930_v2.jpg@!wmlogo'
    },
    {
        title: '2018 成都 React 技术大会',
        date: '2018-03-31',
        URL: 'https://juejin.cn/post/6844903694845100040',
        banner: banner_2018_React
    },
    {
        title: '新耀杯 Code for City 黑客马拉松',
        date: '2018-01-20',
        URL: '2018/Code4City/',
        banner: gallery_Code4City[0]
    },
    {
        title: '2017 成都 Web 前端大会',
        date: '2017-11-19',
        URL: '2017/',
        banner: banner_2017
    }
].sort(({ date: A }, { date: B }) => +new Date(B) - +new Date(A));

const { date: first } = summits.slice(-1)[0],
    { date: last } = summits[0];

const years = Math.ceil(+last.slice(0, 4) - +first.slice(0, 4)) + 1;

export const features = [
    {
        title: '秉持 freeCodeCamp 国际社区精神',
        summary:
            'freeCodeCamp.org 全球最大的开源编程学习平台（GitHub 星标前十），旨在成为计算机教育界的维基百科',
        logo: 'https://github.com/freeCodeCamp.png'
    },
    {
        title: '引领 freeCodeCamp 中文社区潮流',
        summary:
            '第一个制定日常活动方针，第一个设计城市社区 logo、吉祥物，第一个举办黑客马拉松、技术大会，第一个试验开源线下运营',
        logo: 'https://github.com/freeCodeCamp-China.png'
    },
    {
        title: '成都最活跃的程序员社区',
        summary: `${years} 年连办 ${summits.length} 场技术干货大会，合办活动、中小分享会、动手训练营、线上直播不计其数`,
        logo: FCC_CDC
    },
    {
        title: '中文技术社区友军众多',
        summary:
            '开源社、开源工场、微软 MVP 社区、成都 Google 开发者社区、阿里云 ACE 成都同城会、成都 Linux 用户组、重庆前端社区……',
        logo: 'https://i0.wp.com/opensource.org/wp-content/uploads/2009/06/osi_symbol.png?w=628&ssl=1'
    },
    {
        title: '更多精彩，期待你的参与……',
        summary: '',
        logo: WeChat_QRC
    }
];
