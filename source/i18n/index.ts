import { TranslationModel } from 'mobx-i18n';

import zhCN from './zh-CN';

export const i18n = new TranslationModel({
    'zh-CN': zhCN,
    'en-US': () => import('./en-US')
});

export const LanguageName: Record<(typeof i18n)['currentLanguage'], string> = {
    'zh-CN': '简体中文',
    'en-US': 'English'
};
