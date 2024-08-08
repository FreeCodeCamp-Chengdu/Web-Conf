import { TranslationModel } from 'mobx-i18n';

import zhCN from './zh-CN';

export const i18n = new TranslationModel({
    'zh-CN': zhCN,
    'en-US': () => import('./en-US'),
    'zh-TW': () => import('./zh-TW')
});

export const LanguageName: Record<(typeof i18n)['currentLanguage'], string> = {
    'zh-CN': '简体中文',
    'en-US': 'English',
    'zh-TW': '繁體中文'
};
