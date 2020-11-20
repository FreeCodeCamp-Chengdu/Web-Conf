import WeChat_QRC from '../image/FCC-CDG-WeChat.png';
import { wechatLogo as banner_2017 } from './2017/image';
import gallery_Code4City from './2018-Code4City/image/gallery';
import banner_2018_React from './2018-React/React-ChengDu.jpg';
import { FCC_CDC, poster as banner_2018 } from './2018/image';
import banner_2019 from './2019/data/banner.jpg';

export const common_menu = [
    { title: '主办方简介', href: 'community' },
    { title: '全国 IT 活动', href: 'activity' }
];

export const summits = [
    {
        title: 'COSCon’20（中国开源年会）成都分会场',
        date: '2020-10-24',
        URL: 'https://fcc-cd.dev/activity/conference/coscon-2020-chengdu/',
        banner:
            'https://ows.blob.core.chinacloudapi.cn/files/assets/COS_Con_20_abaa9e2a66.png'
    },
    {
        title: '2019 成都 Web 全栈大会',
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
        title: '2018 成都 React 技术大会',
        date: '2018-03-31',
        URL: 'https://ppt.baomitu.com/conference/60',
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
        logo: 'https://opensource.org/files/osi_keyhole_300X300_90ppi_0.png'
    },
    {
        title: '更多精彩，期待你的参与……',
        summary: '',
        logo: WeChat_QRC
    }
];
