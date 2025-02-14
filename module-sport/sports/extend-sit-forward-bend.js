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
  s = function s(_s, l, r) {
    return function (s, l, r) {
      l in s ? e(s, l, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }) : s[l] = r;
    }(_s, "symbol" != _typeof2(l) ? l + "" : l, r), r;
  };var l = require("../../common/vendor.js"),
  r = requirePlugin("aiSport").sports.SportSitForwardBend;var u = /*#__PURE__*/function (_r) {
  function u(e) {
    var _this2;
    _classCallCheck2(this, u);
    _this2 = _callSuper(this, u, [e]), s(_assertThisInitialized2(_this2), "norm", 0), _this2.buildRules(), _this2.standRules = l.utils.clone(_this2.rules), _this2.relaxRules = l.utils.clone(_this2.rules), _this2.relaxRules.rules[0].relaxed = !0, _this2.relaxRules.rules[1].rules[0].offset = 25, _this2.relaxRules.rules[1].rules[1].offset = 25, _this2.relaxRules.rules[2].rules[0].angle = 55, _this2.relaxRules.rules[2].rules[0].offset = 35, _this2.relaxRules.rules[2].rules[1].angle = 55, _this2.relaxRules.rules[2].rules[1].offset = 35, _this2.relaxRules.rules[3].rules[0].rules[0].offset = 25, _this2.relaxRules.rules[3].rules[0].rules[1].offset = 35, _this2.relaxRules.rules[3].rules[1].rules[0].offset = 25, _this2.relaxRules.rules[3].rules[1].rules[1].offset = 35;
    return _this2;
  }
  _inherits2(u, _r);
  return _createClass2(u, [{
    key: "start",
    value: function start() {
      this.isCounting || (_get2(_getPrototypeOf2(u.prototype), "start", this).call(this), 0 === this.norm ? this.rules = this.relaxRules : this.rules = this.standRules);
    }
  }]);
}(r);u.KEY = "Sit-Forward-Bend", u.NAME = "坐位体前屈", exports.SitForwardBend = u;