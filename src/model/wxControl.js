import wx from "weixin-js-sdk";
export function wxShare(data, text) {
  wx.config({
    debug: false,
    appId: process.env.VUE_APP_APPID, // 必填，公众号的唯一标识
    timestamp: data.timestamp, // 必填，生成签名的时间戳
    nonceStr: data.nonceString, // 必填，生成签名的随机串
    signature: data.shA1Sign, // 必填，签名，见附录1
    jsApiList: [
      "error",
      "onMenuShareTimeline", // 分享给好友
      "onMenuShareAppMessage" // 分享到朋友圈
    ]
  });

  //   let link = location.href.split("#")[0];

  wx.ready(function() {
    var shareConfig = {
      title: text.title, // 分享标题
      desc: text.content, // 分享描述
      link: location.href, // 分享链接，该链接域名需在JS安全域名中进行登记
      imgUrl: process.env.VUE_APP_IMG_URL + text.img, // 分享图标
      type: "link", // 分享类型,music、video或link，不填默认为link
      dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
      success: function(res) {
        // 用户确认分享后执行的回调函数
        console.log(res);
      },
      cancel: function(err) {
        // 用户取消分享后执行的回调函数
      }
    };

    wx.onMenuShareTimeline(shareConfig);
    wx.onMenuShareAppMessage(shareConfig);
    wx.error(res => {
      console.log(res);
    });
  });
}
