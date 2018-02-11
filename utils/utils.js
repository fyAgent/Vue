let Base = {
  saveS(key, val, type = 0) { //存储storage
    if (type === 0) {
      localStorage.setItem(key, JSON.stringify(val));
    } else if (type = 1) {
      sessionStorage.setItem(key, JSON.stringify(val));
    }
  },
  getS(key, type = 0) { //获取storage

    if (type === 0) {
      return JSON.parse(localStorage.getItem(key))
    } else if (type === 1) {
      return JSON.parse(sessionStorage.getItem(key))
    }
  },
  isWeiXin() {
   
    var ua = navigator.userAgent.toLowerCase();　　
    var isWeixin = ua.indexOf('micromessenger') != -1;　　
    if (isWeixin) {
      return true;　　
    } else {
      return false;　　
    }

  },
  turnBase64(e, fn) { //转成base64码 e是input type=file 的事件源对象  Fn 回调函数

    var files = e.target.files[0];   
    var reader = new FileReader();
    reader.readAsDataURL(files);

    reader.onload = function (e) {
      fn(e.target.result)
    }


  },
  scrollTop() { //回滚顶部
    if (window.requestAnimationFrame) {
      (function beginScroll() {
        var currentScroll =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop;
        if (currentScroll > 0) {

          window.requestAnimationFrame(beginScroll);
          window.scrollTo(0, currentScroll - currentScroll / 4);
        }
      })();
    } else {
      window.pageYOffset = document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  },
  reg: { //正则
    phone: function (req) { //手机号
      var rxPhone = /^1[3|4|5|7|8][0-9]{9}$/;
      return rxPhone.test(req);



    },
    ID: function (req) { //
      var idReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      return idReg.test(req);


    },
    email: function (req) {
      var emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      return emailReg.test(req);


    },
    trim: function (req) {
      var Reg = /^[\s\t ]+|[\s\t ]+$/g
      return req.replace(Reg, '');
    },
    trimAll: function (req) {
      var Reg = /\s+/g
      return req.replace(Reg, "");

    }
  },
  parseURL(url) {
    var a = document.createElement("a");
    a.href = url;
    return {
      source: url,
      protocol: a.protocol.replace(":", ""),
      host: a.hostname,
      port: a.port,
      query: a.search,
      params: (function () {
        var ret = {},
          seg = a.search.replace(/^\?/, "").split("&"),
          len = seg.length,
          i = 0,
          s;
        for (; i < len; i++) {
          if (!seg[i]) {
            continue;
          }
          s = seg[i].split("=");
          ret[s[0]] = s[1];
        }
        return ret;
      })(),
      file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
      hash: a.hash.replace("#", ""),
      path: a.pathname.replace(/^([^\/])/, "/$1"),
      relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
      segments: a.pathname.replace(/^\//, "").split("/")
    };
    a = null;
  }

}
export default {
  install: function (vm) {
    vm.prototype.$base = Base
  }
}
