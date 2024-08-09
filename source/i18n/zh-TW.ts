import { textJoin } from 'mobx-i18n';

export default {
    review: '回顧',
    register: '註冊',
    about_us: '關於我們',
    contact_us: '聯絡我們',
    chengdu_web_developer_summit: '成都 Web 開發者大會',
    homepage_description: '中國西南地區 Web、JavaScript 全端開發者的年度盛會',
    homepage_register_latest: '報名最新大會',
    homepage_review_previous: '回顧上次大會',
    chengdu_community: '成都社群',
    organizer_introduction: '主辦單位簡介',

    national_it_events: '全國 IT 活動',
    coscon_23_main_venue: "COSCon'23（中國開源年會）主會場",
    nonprofit_organization: '非營利組織',
    since2014:
        '自 2014 年成立以來，以「幫助人們免費學習程式設計」為使命，創建了大量免費的程式設計教程，包括互動式課程、影片課程、文章等。線下開發者社群遍佈 160 多個國家、​​2000 多個城市。我們正在幫助全球數百萬人學習編程，希望讓世界上每個人都有機會獲得免費的優質的程式教育資源，成為開發者或運用程式解決問題。 ',
    community_description:
        ' 成立於 2016 年，是中國大陸最早一批 FCC 城市線下社區，目前會員千餘人，也是最大的 FCC 城市社區。在核心團隊 20 餘人兩年的努力下，FCC 成都已涵蓋程式教育、技術招募、產業大會等程式設計師全職業生涯的公益服務。 ',
    sina_weibo: '新浪微博',
    wechat_public_account: '微信公眾號',
    proudly_developed_with: '自豪地使用',
    development: '開發',
    back_to_top: '返回頁首',

    chengdu_web_full_stack_conference_2019: '2019 成都 Web 全端大會',
    coscon22_chengdu_branch_venue: "COSCon'22（中國開源年會）成都分會場",
    coscon21_main_venue: "COSCon'21（中國開源年會）主會場",
    coscon20_chengdu_branch_venue: "COSCon'20（中國開源年會）成都分會場",
    chengdu_web_frontend_conference_2018: '2018 成都 Web 前端大會',
    chongqing_web_frontend_conference_2018: '2018 重慶 Web 前端大會',
    chengdu_react_tech_conference_2018: '2018 成都 React 技術大會',
    xinyao_cup_code_for_city_hackathon: '新耀杯 Code for City 黑客馬拉松',
    chengdu_web_frontend_conference_2017: '2017 成都 Web 前端大會',
    adhering_to_freecodecamp_international_community_spirit:
        '秉持 freeCodeCamp 國際社區精神',

    freecodecamp_global_largest_open_source_learning_platform:
        'freeCodeCamp.org 全球最大的開源編程學習平台（GitHub 星標前十），旨在成為計算機教育界的維基百科',
    leading_freecodecamp_chinese_community_trend:
        '引領 freeCodeCamp 中文社區潮流',
    first_to_establish_daily_activities_guidelines:
        '第一個制定日常活動方針，第一個設計城市社區 logo、吉祥物，第一個舉辦黑客馬拉松、技術大會，第一個試驗開源線下運營',
    chengdu_most_active_programmer_community: '成都最活躍的程序員社區',
    numerous_chinese_tech_community_allies: '中文技術社區友軍眾多',
    allies_summary:
        '開源社、開源工場、微軟 MVP 社區、成都 Google 開發者社區、阿里雲 ACE 成都同城會、成都 Linux 用戶組、重慶前端社區……',
    more_exciting_awaits_your_participation: '更多精彩，期待你的參與……',
    years_continue_to_undertake: ({
        which_year,
        number_of_times,
        long_sentence
    }: Record<'which_year' | 'number_of_times' | 'long_sentence', string>) =>
        textJoin(which_year, '年連辦', number_of_times, long_sentence),
    tech_conferences:
        '場技術幹貨大會，合辦活動、中小分享會、動手訓練營、線上直播不計其數'
} as const;
