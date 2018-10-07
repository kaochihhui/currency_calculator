import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n= new VueI18n({
  locale: 'en-US',
  fallbackLocalse: 'en-US',
  messages: {
    'en-US': {
      prices: 'PRICES',
      wallet: 'WALLET',
      account: 'ACCOUNT',
      inputAmount: 'Input USD Amount'},
    'zh-TW': {
      prices: '匯率',
      wallet: '錢包',
      account: '帳戶',
      inputAmount: '請輸入美金金額'}}
})
