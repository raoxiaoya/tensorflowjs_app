var _classCallCheck2 = require("../../@babel/runtime/helpers/classCallCheck");var _createClass2 = require("../../@babel/runtime/helpers/createClass");var _assertThisInitialized2 = require("../../@babel/runtime/helpers/assertThisInitialized");var _possibleConstructorReturn2 = require("../../@babel/runtime/helpers/possibleConstructorReturn");var _get2 = require("../../@babel/runtime/helpers/get");var _getPrototypeOf2 = require("../../@babel/runtime/helpers/getPrototypeOf");var _inherits2 = require("../../@babel/runtime/helpers/inherits");var _typeof2 = require("../../@babel/runtime/helpers/typeof");function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = _getPrototypeOf2(derived);
  return _possibleConstructorReturn2(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf2(_this).constructor) : derived.apply(_this, args));
}var e = Object.defineProperty,
  s = function s(_s, t, r) {
    return function (s, t, r) {
      t in s ? e(s, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }) : s[t] = r;
    }(_s, "symbol" != _typeof2(t) ? t + "" : t, r), r;
  };var t = require("../../common/vendor.js"),
  r = requirePlugin("aiSport").sports.SportHighKnee;var l = /*#__PURE__*/function (_r) {
  function l(e) {
    var _this2;
    _classCallCheck2(this, l);
    _this2 = _callSuper(this, l, [e]), s(_assertThisInitialized2(_this2), "norm", 0), _this2.buildRules(), _this2.standRules = t.utils.clone(_this2.rules), _this2.relaxRules = t.utils.clone(_this2.rules), _this2.relaxRules.highLow = .005, _this2.relaxRules.leftPose.rules[0].offset = 55, _this2.relaxRules.leftPose.rules[1].offset = 55, _this2.relaxRules.rightPose.rules[0].offset = 55, _this2.relaxRules.rightPose.rules[1].offset = 55;
    return _this2;
  }
  _inherits2(l, _r);
  return _createClass2(l, [{
    key: "start",
    value: function start() {
      this.isCounting || (_get2(_getPrototypeOf2(l.prototype), "start", this).call(this), 0 === this.norm ? this.rules = this.relaxRules : this.rules = this.standRules);
    }
  }]);
}(r);l.KEY = "High-Knee", l.NAME = "高抬腿", exports.HighKnee = l;