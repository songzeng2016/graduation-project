const host = 'http://ymysz.cn:8080';

class Wc {
  constructor() {
    this.host = host;
  }

  get(url = '', data = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: host + url,
        data,
        success: (res) => {
          resolve(res.data);
        },
      });
    });
  }
}

export default Wc;