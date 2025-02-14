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
}var s = Object.defineProperty,
  e = function e(_e, t, r) {
    return function (e, t, r) {
      t in e ? s(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }) : e[t] = r;
    }(_e, "symbol" != _typeof2(t) ? t + "" : t, r), r;
  };var t = require("../../common/vendor.js"),
  r = requirePlugin("aiSport").sports.SportSitUp;var l = /*#__PURE__*/function (_r) {
  function l(s) {
    var _this2;
    _classCallCheck2(this, l);
    _this2 = _callSuper(this, l, [s]), e(_assertThisInitialized2(_this2), "norm", 0), _this2.standRules = t.utils.clone(_this2.rules), _this2.relaxRules = t.utils.clone(_this2.rules), _this2.relaxRules.base[2].rules[0].offset = 25, _this2.relaxRules.base[2].rules[1].offset = 25, _this2.relaxRules.up.rules[0].offset = 20, _this2.relaxRules.up.rules[1].offset = 20;
    return _this2;
  }
  _inherits2(l, _r);
  return _createClass2(l, [{
    key: "start",
    value: function start() {
      this.isCounting || (_get2(_getPrototypeOf2(l.prototype), "start", this).call(this), 0 === this.norm ? this.rules = this.relaxRules : this.rules = this.standRules);
    }
  }]);
}(r);l.KEY = "Sit-Up", l.NAME = "仰卧起坐", exports.SitUp = l;