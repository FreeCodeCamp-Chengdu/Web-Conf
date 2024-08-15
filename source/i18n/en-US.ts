import { textJoin } from 'mobx-i18n';

export default {
    review: 'review',
    register: 'register',
    about_us: 'About us',
    contact_us: 'Contact us',
    chengdu_web_developer_summit: 'Chengdu Web Developers Conference',
    homepage_description:
        'The annual event for Web and JavaScript full-stack developers in Southwest China',
    homepage_register_latest: 'Register for the Latest Conference',
    homepage_review_previous: 'Review the Previous Conference',
    chengdu_community: 'Chengdu Community',
    organizer_introduction: 'Introduction to the Organizer',

    national_it_events: 'National IT Events',
    coscon_23_main_venue: "COSCon'23 (China Open Source Conference) Main Venue",
    nonprofit_organization: 'Nonprofit Organization',
    since2014:
        'since its establishment in 2014, has been on a mission to "help people learn programming for free" by creating a vast array of free programming tutorials, including interactive courses, video courses, and articles. The offline developer community spans 160 countries and 2000 cities. We are helping millions of people worldwide learn programming, aiming to provide everyone in the world with the opportunity to receive free, quality programming education resources, to become developers or to use programming to solve problems.',
    community_description:
        'was established in 2016 and is one of the earliest FCC city offline communities in mainland China. With over a thousand members, it is also the largest FCC city community. Under the efforts of the core team of over 20 members for two years, FCC Chengdu has covered programming education, technical recruitment, industry conferences, and other public welfare services throughout the entire career of programmers.',
    sina_weibo: 'Sina Weibo',
    wechat_public_account: 'WeChat official account',
    proudly_developed_with: 'Proudly developed with',
    development: 'development',
    back_to_top: 'Back To Top',

    chengdu_web_full_stack_conference_2019:
        '2019 Chengdu Web Full Stack Conference',
    coscon22_chengdu_branch_venue:
        "COSCon'22 (China Open Source Conference) Chengdu Branch Venue",
    coscon21_main_venue: "COSCon'21 (China Open Source Conference) Main Venue",
    coscon20_chengdu_branch_venue:
        "COSCon'20 (China Open Source Conference) Chengdu Branch Venue",
    chengdu_web_frontend_conference_2018:
        '2018 Chengdu Web Frontend Conference',
    chongqing_web_frontend_conference_2018:
        '2018 Chongqing Web Frontend Conference',
    chengdu_react_tech_conference_2018: '2018 Chengdu React Tech Conference',
    xinyao_cup_code_for_city_hackathon: 'Xinyao Cup Code for City Hackathon',
    chengdu_web_frontend_conference_2017:
        '2017 Chengdu Web Frontend Conference',
    adhering_to_freecodecamp_international_community_spirit:
        'Adhering to freeCodeCamp International Community Spirit',

    freecodecamp_global_largest_open_source_learning_platform:
        "freeCodeCamp.org, the world's largest open-source programming learning platform (Top 10 on GitHub), aims to become the Wikipedia of computer education",
    leading_freecodecamp_chinese_community_trend:
        'Leading the trend of freeCodeCamp Chinese Community',
    first_to_establish_daily_activities_guidelines:
        'The first to establish daily activity guidelines, design city community logos and mascots, host hackathons and tech conferences, and experiment with open-source offline operations',
    chengdu_most_active_programmer_community:
        "Chengdu's Most Active Programmer Community",
    numerous_chinese_tech_community_allies:
        'Numerous Chinese Tech Community Allies',
    allies_summary:
        'Open Source Society, Open Source Workshop, Microsoft MVP Community, Chengdu Google Developer Community, Alibaba Cloud ACE Chengdu Local Group, Chengdu Linux User Group, Chongqing Frontend Community...',
    more_exciting_awaits_your_participation:
        'More exciting awaits your participation...',
    years_continue_to_undertake: ({
        which_year,
        number_of_times,
        long_sentence
    }: Record<'which_year' | 'number_of_times' | 'long_sentence', string>) =>
        textJoin(
            which_year,
            'years continue to undertake',
            number_of_times,
            long_sentence
        ),

    tech_conferences:
        'tech conferences, co-organized events, small and medium-sized sharing sessions, hands-on workshops, and online live streams and so on countless.',
    activity_introduction: 'Activity Introduction',
    freecodecamp_intro:
        "freeCodeCamp Chengdu Community has been aiming to provide a open communication environment for Chengdu's technology enthusiasts and users. Over the past year, we have successfully held more than 30 community activities, which have been unanimously praised and warmly responded by everyone. As 2017 is coming to an end, under the initiative of the organizing department's He Qingsong, we are specially organizing the freeCodeCamp [2017 Chengdu WEB Front-end Exchange Conference] to provide a unprecedented feast for Chengdu's front-end circle technical engineers and enthusiasts. Here, we sincerely invite you, this grand event is looking forward to your participation!",
    share_guest: 'Share Guest',
    wang_bo: 'Wang Bo',
    special_thanks: 'Special Thanks to',
    provide_poster_logo_design: 'Provide Poster and Logo Design',
    register_now: 'Register Now',
    time_and_location: 'Time and Location',
    event_time: 'Time: November 19, 2017, 09:00 - 17:30',
    event_location:
        'Location: 1st Floor, Building 7, Jingrong International Plaza, No. 200, Tianfu 5th Street, High-tech Zone, Chengdu',
    activity_schedule: 'Event Schedule',
    shui_ge: 'Shui Ge',
    hu_min: 'Hu Min',
    dong_tao: 'Dong Tao',
    ye_xiao_chai: 'Ye Xiaochai',
    chen_yang_bin: 'Chen Yangbin',
    liao_wei: 'Liao Wei',
    lu_lin: 'Lu Lin',
    yu_ze_jiang: 'Yu Zejiang',
    organizer: 'Organizer',
    naming_sponsor: 'Naming Sponsor',
    co_organizer: 'Co-organizer',
    sponsoring_unit: 'Sponsoring Unit',
    partner_community: 'Partner Community',
    partner_media: 'Partner Media'
} as const;
