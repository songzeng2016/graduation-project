// pages/image/image.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
  },

  getImage(refresh) {
    app.$get('/getImage')
      .then(json => {
        console.log(json);
        const list = json.data.value.map(item => {
          return app.host + '/images/' + item;
        });
        this.setData({
          list,
        });

        refresh && setTimeout(() => {
          wx.stopPullDownRefresh();
        }, 500);
      });
  },

  preview(e) {
    wx.previewImage({
      current: e.target.dataset.url, // 当前显示图片的http链接
      urls: this.data.list // 需要预览的图片http链接列表
    })
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