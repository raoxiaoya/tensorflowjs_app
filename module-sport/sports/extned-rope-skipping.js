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
  s = function s(_s, r, l) {
    return function (s, r, l) {
      r in s ? e(s, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: l
      }) : s[r] = l;
    }(_s, "symbol" != _typeof2(r) ? r + "" : r, l), l;
  };var r = require("../../common/vendor.js"),
  l = requirePlugin("aiSport").sports.SportRopeSkipping;var t = /*#__PURE__*/function (_l) {
  function t(e) {
    var _this2;
    _classCallCheck2(this, t);
    _this2 = _callSuper(this, t, [e]), s(_assertThisInitialized2(_this2), "norm", 0), _this2.standRules = r.utils.clone(_this2.rules), _this2.relaxRules = r.utils.clone(_this2.rules), _this2.relaxRules.shakeRate = .015, _this2.relaxRules.base.rules[1].offset = 40, _this2.relaxRules.base.rules[2].rules[0].angle = 90, _this2.relaxRules.base.rules[2].rules[0].offset = 80, _this2.relaxRules.base.rules[2].rules[1].angle = 90, _this2.relaxRules.base.rules[2].rules[1].offset = 80;
    return _this2;
  }
  _inherits2(t, _l);
  return _createClass2(t, [{
    key: "start",
    value: function start() {
      this.isCounting || (0 === this.norm ? this.rules = this.relaxRules : this.rules = this.standRules, _get2(_getPrototypeOf2(t.prototype), "start", this).call(this));
    }
  }]);
}(l);t.KEY = "Rope-Skipping", t.NAME = "跳绳", exports.RopeSkipping = t;