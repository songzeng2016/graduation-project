// pages/set/set.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '',
    title: '',
    loading: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const {
      type
    } = options;
    let title = '';

    switch (type) {
      case 'phone':
        title = '手机号码';
        break;
      case 'wifi':
        title = 'wifi';
        break;
    }

    this.type = type;
    this.setData({
      title,
    });
    wx.setNavigationBarTitle({
      title: `修改${title}`,
    });
  },

  submit(e) {
    const {value} = e.detail.value;
    const reqData = {
      type: this.type,
      value,
    };

    this.setData({
      loading: true,
    });
    app.$get('/set', reqData)
      .then(json => {
        this.setData({
          loading: false,
        });
        wx.showToast({
          title: '修改成功',
          mask: true,
        });
      });
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