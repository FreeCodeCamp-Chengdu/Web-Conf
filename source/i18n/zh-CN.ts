import { textJoin } from 'mobx-i18n';

export default {
    review: '回顾',
    register: '注册',
    about_us: '关于我们',
    contact_us: '联系我们',
    chengdu_web_developer_summit: '成都 Web 开发者大会',
    homepage_description: '中国西南地区 Web、JavaScript 全栈开发者的年度盛会',
    homepage_register_latest: '报名最新大会',
    homepage_review_previous: '回顾上次大会',
    chengdu_community: '成都社区',
    organizer_introduction: '主办方简介',

    national_it_events: '全国 IT 活动',
    coscon_23_main_venue: "COSCon'23（中国开源年会）主会场",
    nonprofit_organization: '非营利组织',
    since2014:
        '自 2014 年成立以来，以“帮助人们免费学习编程”为使命，创建了大量免费的编程教程，包括交互式课程、视频课程、文章等。线下开发者社区遍布 160 多个国家、2000 多个城市。我们正在帮助全球数百万人学习编程，希望让世界上每个人都有机会获得免费的优质的编程教育资源，成为开发者或者运用编程去解决问题。',
    community_description:
        ' 成立于 2016 年，是中国大陆最早一批 FCC 城市线下社区，目前会员千余人，也是最大的 FCC 城市社区。在核心团队 20 余人两年的努力下，FCC 成都已覆盖编程教育、技术招聘、行业大会等程序员全职业生涯的公益服务。',
    sina_weibo: '新浪微博',
    wechat_public_account: '微信公众号',
    proudly_developed_with: '自豪地使用',
    development: '开发',
    back_to_top: '返回页首',

    chengdu_web_full_stack_conference_2019: '2019 成都 Web 全栈大会',
    coscon22_chengdu_branch_venue: "COSCon'22（中国开源年会）成都分会场",
    coscon21_main_venue: "COSCon'21（中国开源年会）主会场",
    coscon20_chengdu_branch_venue: "COSCon'20（中国开源年会）成都分会场",
    chengdu_web_frontend_conference_2018: '2018 成都 Web 前端大会',
    chongqing_web_frontend_conference_2018: '2018 重庆 Web 前端大会',
    chengdu_react_tech_conference_2018: '2018 成都 React 技术大会',
    xinyao_cup_code_for_city_hackathon: '新耀杯 Code for City 黑客马拉松',
    chengdu_web_frontend_conference_2017: '2017 成都 Web 前端大会',
    adhering_to_freecodecamp_international_community_spirit:
        '秉持 freeCodeCamp 国际社区精神',

    freecodecamp_global_largest_open_source_learning_platform:
        'freeCodeCamp.org 全球最大的开源编程学习平台（GitHub 星标前十），旨在成为计算机教育界的维基百科',
    leading_freecodecamp_chinese_community_trend:
        '引领 freeCodeCamp 中文社区潮流',
    first_to_establish_daily_activities_guidelines:
        '第一个制定日常活动方针，第一个设计城市社区 logo、吉祥物，第一个举办黑客马拉松、技术大会，第一个试验开源线下运营',
    chengdu_most_active_programmer_community: '成都最活跃的程序员社区',
    numerous_chinese_tech_community_allies: '中文技术社区友军众多',
    allies_summary:
        '开源社、开源工场、微软 MVP 社区、成都 Google 开发者社区、阿里云 ACE 成都同城会、成都 Linux 用户组、重庆前端社区……',
    more_exciting_awaits_your_participation: '更多精彩，期待你的参与……',
    years_continue_to_undertake: ({
        which_year,
        number_of_times,
        long_sentence
    }: Record<'which_year' | 'number_of_times' | 'long_sentence', string>) =>
        textJoin(which_year, '年连办', number_of_times, long_sentence),
    tech_conferences:
        '场技术干货大会，合办活动、中小分享会、动手训练营、线上直播不计其数',
    activity_introduction: '活动介绍',
    freecodecamp_intro:
        'freeCodeCamp 成都社区一直以为成都技术爱好者以及用户提供一个开放的交流环境为目的，在过去的一年里，我们成功举办了30余次的社区活动，受到大家的一致好评和热烈响应。2017年已接近尾声，在组织部何青松的倡议下，我们特筹办freeCodeCamp【2017成都WEB前端交流大会】，为成都前端圈的技术工程师、爱好者提供一场前所未有的饕餮盛宴。在此，我们向您发出诚挚的邀请，此次盛会期待您的参与！',
    share_guest: '分享嘉宾',
    wang_bo: '王波',
    special_thanks: '特别鸣谢',
    provide_poster_logo_design: '提供 海报、Logo 设计',
    register_now: '我 要 报 名',
    time_and_location: '时间地址',
    event_time: '时间：2017 年 11 月 19 日 09 ：00 - 17 ：30',
    event_location:
        '地点：成都市高新区天府五街 200 号菁蓉国际广场 7 栋 1 楼 主会场',
    activity_schedule: '活动流程',
    shui_ge: '水歌',
    hu_min: '胡敏',
    dong_tao: '董涛',
    ye_xiao_chai: '叶小钗',
    chen_yang_bin: '陈洋彬',
    liao_wei: '廖伟',
    lu_lin: '卢林',
    yu_ze_jiang: '余泽江',
    organizer: '主办单位',
    naming_sponsor: '冠名赞助',
    co_organizer: '协办单位',
    sponsoring_unit: '赞助单位',
    partner_community: '合作社区',
    partner_media: '合作媒体'
} as const;
