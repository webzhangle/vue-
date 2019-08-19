/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
};

/**
 * 存储sessionStorage
 * @param key
 * @param value
 */
export const sessionSetItem = (key, value) => {
    window.sessionStorage.setItem(key, JSON.stringify(value))
};

/**
 * 获取sessionStorage
 * @param key
 * @returns {any}
 */
export const sessionGetItem = (key) => {
    let result = window.sessionStorage.getItem(key)
    try {
        result = JSON.parse(result)
    } catch (error) {
        result = result
    }
    return result
};

/**
 * 删除sessionStorage
 * @param key
 * @returns {any}
 */
export const sessionRemoveItem = (key) => {
    window.sessionStorage.removeItem(key)
};

/**
 * 清除sessionStorage
 * @param key
 * @returns {any}
 */
export const sessionClear = () => {
    window.sessionStorage.clear()
};

/**
 * 生成随机字符串(可指定长度)
 * @param len
 * @returns {string}
 */
export const randomString = (len) => {
    len = len || 8;
    let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    let maxPos = $chars.length;
    let pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
};

/**
 * randomWord 产生任意长度随机字母数字组合
 * @param randomFlag 是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
 * @param min
 * @param max
 * @returns {string}
 * 调用方法:
 * 生成 3 - 32 位随即字符串
 * randomWord(true,3,32);    例如：olyOXUF5oDsuMmXl3Mi48
 * 生成 32 位随机字符串
 * randomWord(false,32);     例如：fjpnWj29Bb8boiXbLeDF0nxkR4aYcLRl
 */
export const randomWord = (randomFlag, min, max) => {
    let str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    for (let i = 0; i < range; i++) {
        let pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
};

/**
 * 获取url后参数
 */
export const GetRequest = () => {
    let url = location.search; //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
};

/**
 * 生成随机颜色值
 */
export const getRandomColor = () => {
    const rgb = [];
    for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16);
        color = color.length === 1 ? '0' + color : color;
        rgb.push(color)
    }
    return '#' + rgb.join('')
};

/**
 * 验证身份证号
 * @param el 号码输入input
 * @returns {boolean}
 */
export const checkCardNo = (el) => {
    let txtval = el.value;
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(txtval);
};

/**
 * 获取字符串字节长度
 * @param {String}
 * @returns {Boolean}
 */
export const checkLength = (v) => {
    let realLength = 0;
    let len = v.length;
    for (let i = 0; i < len; i++) {
        let charCode = v.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
};

/**
 * 判断微信浏览器
 * @returns {Boolean}
 */
export const isWeiXin = () => {
    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
};

/**
 * 写cookies
 */
export const setCookie = (name, value, time) => {
    let strsec = getsec(time);
    let exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
};

/**
 * 读取cookies
 */
export const getCookie = (name) => {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) return (arr[2]);
    else return null;
};

/**
 * 删除cookies
 */
export const delCookie = (name) => {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};

/**
 * 浏览器判断
 * 用法示例——多套页面判断是否显示移动端：
 *   let ua = parseUA();
 *   if (!ua.mobile) {
 *       location.href = './pc.html';
 *   }
 */
export const parseUA = () => {
    let u = navigator.userAgent;
    let u2 = navigator.userAgent.toLowerCase();
    return { //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1,
        //IE内核
        presto: u.indexOf('Presto') > -1,
        //opera内核
        webKit: u.indexOf('AppleWebKit') > -1,
        //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
        //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/),
        //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
        //android终端或uc浏览器
        iPhone: u.indexOf('iPhone') > -1,
        //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1,
        //是否iPad
        webApp: u.indexOf('Safari') == -1,
        //是否web应该程序，没有头部与底部
        iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
        weixin: u2.match(/MicroMessenger/i) == "micromessenger",
        ali: u.indexOf('AliApp') > -1,
    };
};

/**
 * 生成UUID
 * @returns {string}
 */
export const generateUUID = () => {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });
    return uuid;
};

/**
 * 删除左右两端的空格
 * @param str
 * @returns {string | * | void}
 */
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 删除左边的空格
 * @param str
 * @returns {string | * | void}
 */
function ltrim(str) {
    return str.replace(/(^\s*)/g, "");
}

/**
 * 删除右边的空格
 * @param str
 * @returns {string | * | void}
 */
function rtrim(str) {
    return str.replace(/(\s*$)/g, "");
}

/**
 * 对象数组转二维数组
 * @param objArr
 */
function obj2Arr(objArr) {
    objArr.length > 0 && objArr.map(item => {
        return Object.values(item);
    })
}

/**
 * 找出对象数组中某属性的最大值
 * @param array
 * @param item
 * @returns val
 */
function maxItemInObjArr(array, item) {
    let max = Math.max.apply(Math, array.map(function (obj) {
        return obj[item];
    }));
    return max;
}

/**
 * 判断当前网络环境
 */
export const isWifi = () => {
    try {
        let wifi = true;
        let ua = window.navigator.userAgent;
        let con = window.navigator.connection;
        // 如果是微信
        if (/MicroMessenger/.test(ua)) {
            if (ua.indexOf('WIFI') >= 0) {
                return true
            } else {
                wifi = false
            }
            // 如果支持navigator.connection
        } else if (con) {
            let network = con.type;
            if (network !== 'wifi' && network !== '2' && network !== 'unknown') {
                wifi = false
            }
        }
        return wifi
    } catch (e) {
        return false
    }
};

/**
 * 首字母大写
 * @param str
 * @returns {string}
 */
export const fistLetterUpper = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 过滤非法字符串
 */
export const illegalFilter = (str) => {
    let regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    let regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;

    if (regEn.test(str) || regCn.test(str)) return false;
    return true;
};
export const QUESTIONDATA = {
    'RECORDS': [
      {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '广州',
        'storeName': '番禺万达体验中心'
      },
      {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '广州',
        'storeName': '嘉裕太阳城体验中心'
      },
      {
        'dealerId': '4a8be242-720c-11e5-98a0-000c295c6648',
        'dealerName': '英龙华辰',
        'cityName': '北京',
        'storeName': '英特宜家店'
      },
      {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '广州',
        'storeName': '萝岗万达体验中心(在线)'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '宁波',
        'storeName': '酷动宁波印象城店'
      },
      {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '天津',
        'storeName': '酷动天津爱琴海购物公园店'
      }, {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '广州',
        'storeName': '广州南沙万达体验中心'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '深圳',
        'storeName': '酷动深圳华强北九方购物中心店'
      }, {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '广州',
        'storeName': '凯德广场体验中心(在线)'
      }, {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '广州',
        'storeName': '新联（广州）合生广场体验中心'
      }, {
        'dealerId': '25d3f5f3-0277-463f-8254-631cfebd4880',
        'dealerName': '上海仲旋',
        'cityName': '苏州',
        'storeName': '苏中吴中万达店'
      }, {
        'dealerId': '25d3f5f3-0277-463f-8254-631cfebd4880',
        'dealerName': '上海仲旋',
        'cityName': '上海',
        'storeName': '嘉定大融城店'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '深圳',
        'storeName': '酷动深圳卓悦汇店(在线)'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '西安',
        'storeName': '酷动西安南门世纪金花店'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '西安',
        'storeName': '酷动西安世纪金花赛高金花店'
      }, {
        'dealerId': '25d3f5f3-0277-463f-8254-631cfebd4880',
        'dealerName': '上海仲旋',
        'cityName': '上海',
        'storeName': '上海虹桥天地店'
      }, {
        'dealerId': '25d3f5f3-0277-463f-8254-631cfebd4880',
        'dealerName': '上海仲旋',
        'cityName': '上海',
        'storeName': '仲璇上海龙湖虹桥天街店'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '西安',
        'storeName': '酷动西安鑫苑大都汇店(在线)'
      }, {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '佛山',
        'storeName': '金沙洲万达体验中心(在线)'
      }, {
        'dealerId': '25d3f5f3-0277-463f-8254-631cfebd4880',
        'dealerName': '上海仲旋',
        'cityName': '南京',
        'storeName': '仲璇南京江宁金鹰店'
      }, {
        'dealerId': '25d3f5f3-0277-463f-8254-631cfebd4880',
        'dealerName': '上海仲旋',
        'cityName': '苏州',
        'storeName': '仲璇昆山万达广场店(在线)'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '深圳',
        'storeName': '酷动深圳龙华九方购物中心店'
      }, {
        'dealerId': '25d3f5f3-0277-463f-8254-631cfebd4880',
        'dealerName': '上海仲旋',
        'cityName': '上海',
        'storeName': '仲璇上海瑞虹天地月亮湾店'
      }, {
        'dealerId': '25d3f5f3-0277-463f-8254-631cfebd4880',
        'dealerName': '上海仲旋',
        'cityName': '南京',
        'storeName': '仲璇南京仙林万达茂店'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '杭州',
        'storeName': '酷动杭州乐堤港店'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '杭州',
        'storeName': '酷动杭州滨江龙湖店(在线)'
      }, {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '深圳',
        'storeName': '新联(深圳)星河WORLD · COCO Park 体验中心(在线)'
      }, {
        'dealerId': '25d3f5f3-0277-463f-8254-631cfebd4880',
        'dealerName': '上海仲旋',
        'cityName': '上海',
        'storeName': '仲璇上海嘉定中信泰富万达店'
      }, {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '广州',
        'storeName': '新联（广州）雲门Newpark体验中心(在线)'
      }, {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '广州',
        'storeName': '新联（广州）琶洲保利广场体验中心'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '西安',
        'storeName': '酷动西安中环银泰店'
      }, {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '广州',
        'storeName': '天河城体验中心'
      }, {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '深圳',
        'storeName': '新联（深圳）深国投体验中心(在线)'
      }, {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '深圳',
        'storeName': '新联（深圳）福田COCOPark体验中心(在线)'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '西安',
        'storeName': '酷动西安雁塔万达店'
      }, {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '广州',
        'storeName': '太古汇体验中心'
      }, {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '广州',
        'storeName': '北京路天河城体验中心'
      }, {
        'dealerId': '4a8be242-720c-11e5-98a0-000c295c6648',
        'dealerName': '英龙华辰',
        'cityName': '北京',
        'storeName': '国贸店'
      }, {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '广州',
        'storeName': '白云万达体验中心'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '宁波',
        'storeName': '酷动宁波鄞州万达店'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '杭州',
        'storeName': '酷动杭州西城广场店'
      }, {
        'dealerId': 'e8f7a403-b1db-42e6-b1f9-01ff47d50e47',
        'dealerName': '新联移动',
        'cityName': '深圳',
        'storeName': '喜荟城体验中心(在线)'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '天津',
        'storeName': '酷动天津水游城店'
      }, {
        'dealerId': '4a8be242-720c-11e5-98a0-000c295c6648',
        'dealerName': '英龙华辰',
        'cityName': '北京',
        'storeName': '上地华联店'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '杭州',
        'storeName': '酷动杭州城西银泰店'
      }, {
        'dealerId': 'acfff815-5c34-40c5-b5f4-e63c0d2178f1',
        'dealerName': 'Coodoo',
        'cityName': '天津',
        'storeName': '酷动天津永旺购物中心店'
      }
    ]
  }
  export const getQueryString = (name) => {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
      return unescape(r[2])
    }
    return null
  }
  
