var e = require("../../@babel/runtime/helpers/possibleConstructorReturn"),
  t = require("../../@babel/runtime/helpers/getPrototypeOf"),
  r = require("../../@babel/runtime/helpers/inherits"),
  n = require("../../@babel/runtime/helpers/createClass"),
  i = require("../../@babel/runtime/helpers/classCallCheck");

function l(r, n, i) {
  return n = t(n), e(r, function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {})))
    } catch (e) {
      return !1
    }
  }() ? Reflect.construct(n, i || [], t(r).constructor) : n.apply(r, i))
}
var c = require("./calc-base"),
  o = n((function e() {
    i(this, e), this.name = "角度匹配", this.calc = "match-angle", this.angleKey = null, this.secondKey = null, this.thirdKey = null, this.angle = 90, this.offset = 10
  })),
  u = function (e) {
    function t() {
      return i(this, t), l(this, t, arguments)
    }
    return r(t, c), n(t, [{
      key: "findAndAngle",
      value: function (e, t, r, n) {
        if (!t) throw new Error("angKey不能为空");
        if (!r) throw new Error("secondKey不能为空");
        if (!n) throw new Error("thirdKey不能为空");
        var i = this.findPoint(e, t),
          l = this.findPoint(e, r),
          c = this.findPoint(e, n);
        return this.angle(i, l, c)
      }
    }, {
      key: "matchAngle",
      value: function (e, t, r, n, i, l) {
        if (!i || i < 1 || i > 180) throw new Error("angleExpect必须在1-180之间");
        if (l < 0 || l > 90) throw new Error("angleOffset必须在1-90之间");
        l = l || 0;
        var c = this.findAndAngle(e, t, r, n);
        return this.isAngle(c, i, l)
      }
    }, {
      key: "judging",
      value: function (e, t) {
        if (!t || "match-angle" != t.calc) throw new Error("规则为空，或者配置的不是角度规则");
        try {
          return this.matchAngle(e.keypoints, t.angleKey, t.secondKey, t.thirdKey, t.angle, t.offset)
        } catch (e) {
          return console.warn("calc-angle", e), !1
        }
      }
    }])
  }();
module.exports = {
  CalcRuleMatchAngle: o,
  CalcAngle: u
};