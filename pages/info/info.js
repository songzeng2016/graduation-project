// pages/info/info.js
const app = getApp();
const getDate = function (time) {
  var date = new Date(time);
  return date.getFullYear() + ':' + (date.getMonth() + 1) + ':' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp: [],
    co: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTemp();
    this.getCo();
  },

  getTemp() {
    app.$get('/getInfo', {
      type: 'temp'
    })
      .then(json => {
        console.log(json);
        const list = json.data.value.map(item => {
          item.date = getDate(item.time);
          return item;
        });
        this.setData({
          temp: list,
        });
      });
  },
  getCo() {
    app.$get('/getInfo', {
      type: 'co'
    })
      .then(json => {
        console.log(json);
        const list = json.data.value.map(item => {
          item.date = getDate(item.time);
          return item;
        });
        this.setData({
          co: list,
        });
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.onLoad();
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 2000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})