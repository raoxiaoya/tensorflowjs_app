var e = require("../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../@babel/runtime/helpers/createClass"),
  r = require("../../config"),
  t = require("../../utils/utils"),
  o = require("../saber"),
  i = function () {
    return n((function n(o) {
      e(this, n), this.pointThreshold = r.moveNet.pointThreshold, t.isNone(o) || (this.pointThreshold = o)
    }), [{
      key: "findPoint",
      value: function (e, n, r) {
        if (t.isEmptyArray(e)) return null;
        var i = e.find((function (e) {
          return e.name === n
        }));
        return i ? !0 === r ? i : this.pointThreshold && i.score < this.pointThreshold ? (o.writeConsoleDebug("".concat(n, "关键点评分").concat(i.score, "低于").concat(this.pointThreshold)), null) : i : (o.writeConsoleDebug("".concat(n, "关键点不存在")), null)
      }
    }, {
      key: "angle",
      value: function (e, n, r) {
        return o.angle(e, n, r)
      }
    }, {
      key: "isAngle",
      value: function (e, n, r) {
        var t = n - (r = r || 0),
          i = n + r,
          u = e >= t && e <= i;
        return u || o.writeConsoleDebug("角".concat(e, "不在").concat(t, "-").concat(i, "之间")), u
      }
    }, {
      key: "judging",
      value: function (e, n) {
        throw new Error("本计算器未实现此方法。")
      }
    }])
  }();
module.exports = i;