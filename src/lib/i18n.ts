import i18n from 'i18next'
import HttpBackend, { HttpBackendOptions } from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

export const languages = [{ id: 'en' }] as const

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(HttpBackend)
  .init<HttpBackendOptions>({
    // Add files from locales language folder here
    ns: ['common', 'index'],
    defaultNS: 'common',

    lng: findPreferredLanguage(), // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })
  .then()

export default i18n

// Find/store language user selected in previous sessions
function findPreferredLanguage() {
  const pref = localStorage.getItem('UI_LANGUAGE')
  if (!pref) {
    localStorage.setItem('UI_LANGUAGE', languages[0].id)
    return languages[0].id
  }
  return pref
}
