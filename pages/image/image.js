// pages/image/image.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc: 'http://118.25.50.176:8080/images/image.png',
    host: 'http://118.25.50.176:8080/images/',
    list: [],
  },
  updateImgSrc() {
    this.setData({
      imgSrc: 'http://118.25.50.176:8080/images/image.png?t=' + Date.now(),
    })
  },

  getImage(refresh) {
    app.$get('/getImage')
      .then(json => {
        console.log(json);
        this.setData({
          list: json.data.value,
        });

        refresh && setTimeout(() => {
          wx.stopPullDownRefresh();
        }, 500);
      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getImage();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.getImage(true);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})