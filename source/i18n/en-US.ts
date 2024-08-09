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
        'tech conferences, co-organized events, small and medium-sized sharing sessions, hands-on workshops, and online live streams and so on countless.'
} as const;
