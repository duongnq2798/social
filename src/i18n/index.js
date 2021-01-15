import i18n from 'i18n-js';

import en from '../Locales/en.json';
import vn from '../Locales/vn.json';

i18n.fallbacks = true;
i18n.translations = {en, vn};

export default i18n;
