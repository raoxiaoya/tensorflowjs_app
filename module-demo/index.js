var e = require("../common/vendor.js");var t = /23054RA19C|23078RKD5C|2311DRK48C|22101316C|22122RK93C|22101316UCP|22101316UC|23046PNC9C|2312DRAABC|2312DRA50C|23090RA98C|2210132C|22041211AC|23013RK75C|M2006C3LC|21091116AC|22095RA98C|M2103K19C|22101317C|22120RN86C|22041216UC|22041216C|M2006J10C|V2183A|V2309A|V2324A|V2241HA|V2242A|V2241A|V2133A|V2344A|V2323A|V2334A|V2284A|V2282A|V2285A|PFFM20|PGX110|PGBM10|PFCM00|PFZM10|PJB110|PJG110|LLY-AN00|CLK-AN00|CRT-AN00|DIO-AN00|GIA-AN8|RKY-AN00|DIO-AN00|SDY-AN00|HPB-AN00/i,
  n = !1;function i(t) {
  requirePlugin("aiSport").initialize({
    modelUrl: "https://yzdemo.oss-cn-heyuan.aliyuncs.com/ai-sports/models/lightning_4/model.json",
    fetchFunc: e.fetchFunc(),
    humanPointThreshold: t || .3,
    debugEnabled: !0
  });
}function o() {
  return new Promise(function (i, o) {
    n ? i() : e.index.request({
      url: "https://yzdemo.oss-cn-heyuan.aliyuncs.com/ai-sports/device_white_list.txt",
      dataType: "text",
      responseType: "text",
      success: function success(e) {
        n = !0, t = new RegExp(e.data, "i"), i();
      },
      fail: function fail(e) {
        console.error(e), o(e);
      }
    });
  });
}o(), i();var s = {
  initializePlugin: i,
  getWhiteList: o,
  judgeEnhanced: function judgeEnhanced(n) {
    var i = n || !1;
    if ("boolean" != typeof n) {
      var _n = e.index.getDeviceInfo();
      i = t.test(_n.model);
    }
    return i;
  }
};exports.module = s;