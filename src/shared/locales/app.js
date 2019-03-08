import appLocaleEnUS from '@shared/locales/en-US'
import appLocaleFrFR from '@shared/locales/fr'
import appLocalePtBr from '@shared/locales/pt-BR'
import appLocaleTrTR from '@shared/locales/tr'
import appLocaleZhCN from '@shared/locales/zh-CN'
import appLocaleZhTW from '@shared/locales/zh-TW'

// Please keep the locale key in alphabetical order.
const resources = {
  'en-US': {
    translation: {
      ...appLocaleEnUS
    }
  },
  'fr': {
    translation: {
      ...appLocaleFrFR
    }
  },
  'pt-BR': {
    translation: {
      ...appLocalePtBr
    }
  },
  'tr': {
    translation: {
      ...appLocaleTrTR
    }
  },
  'zh-CN': {
    translation: {
      ...appLocaleZhCN
    }
  },
  'zh-TW': {
    translation: {
      ...appLocaleZhTW
    }
  }
}

export default resources
