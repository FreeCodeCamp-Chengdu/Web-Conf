import { createI18nScope } from 'web-utility/source/i18n';

import type { I18nMap } from './en-US';

export const { loaded, i18nTextOf } = createI18nScope<I18nMap>(
    {
        'en-US': async () => (await import('./en-US')).en_US,
        'zh-CN': async () => (await import('./zh-CN')).zh_CN
    },
    'en-US'
);
