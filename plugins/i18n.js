import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'en': {
    welcomeMsg: 'Welcome to my website!'
  },
  'nl': {
    welcomeMsg: 'Welkom op mijn website!'
  }
}

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'nl',
  messages
})

export default i18n
