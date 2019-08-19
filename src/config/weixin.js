import wx from 'weixin-js-sdk'

export const wxInit = (sd, sharobj, href) => {
  /**
 * 微信分享
 * @param {微信签名所需对象} sd
 * @param {分享所需字段} sharobj
 * @param {分享所需链接地址} href
 */
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: sd.appid, // 必填，公众号的唯一标识
    timestamp: sd.timestamp, // 必填，生成签名的时间戳
    nonceStr: sd.noncestr, // 必填，生成签名的随机串
    signature: sd.signature, // 必填，签名
    jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
  });
  wx.ready(function () { // 需在用户可能点击分享按钮前就先调用
    wx.updateAppMessageShareData({ // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
      title: sharobj.share_title || '', // 分享标题
      desc: sharobj.share_description || '', // 分享描述
      link: href || '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: sharobj.thumb || '', // 分享图标
      success: function () {
        // 设置成功
      }
    })
    wx.updateTimelineShareData({ // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
      title: sharobj.share_title || '', // 分享标题
      desc: sharobj.share_description || '', // 分享描述
      link: href || '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: sharobj.thumb || '', // 分享图标
      success: function () {
        // 设置成功
      }
    })
  });
}
