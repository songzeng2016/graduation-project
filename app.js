//app.js
import Wc from './utils/wc.js';
const wc = new Wc();

App({
  onLaunch: function () {
  },
  globalData: {
    userInfo: null
  },
  $get: wc.get,
})