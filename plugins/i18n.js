import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import nl from './nl'

Vue.use(VueI18n)

const messages = { en, nl }

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'nl',
  messages
})

export default i18n
