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
  i = function i(_i, t, e) {
    return function (i, t, e) {
      t in i ? s(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e;
    }(_i, "symbol" != _typeof2(t) ? t + "" : t, e), e;
  };var t = require("../../common/vendor.js"),
  e = requirePlugin("aiSport").sports.SportJumpingJack;var r = /*#__PURE__*/function (_e) {
  function r(s) {
    var _this2;
    _classCallCheck2(this, r);
    _this2 = _callSuper(this, r, [s]), i(_assertThisInitialized2(_this2), "norm", 0), _this2.similarThreshold = .8;
    return _this2;
  }
  _inherits2(r, _e);
  return _createClass2(r, [{
    key: "start",
    value: function start() {
      this.isCounting || (_get2(_getPrototypeOf2(r.prototype), "start", this).call(this), 0 === this.norm ? this.similarThreshold = .78 : this.similarThreshold = .8);
    }
  }, {
    key: "isSimilar",
    value: function isSimilar(s) {
      if (s.score < this.similarThreshold) return console.debug("整体动作不符", s), !1;
      var i = s.items.find(function (s) {
        return "left_foot" == s.key;
      });
      return !i || i.score < this.similarThreshold ? (console.debug("左脚未达标", i), !1) : (i = s.items.find(function (s) {
        return "right_foot" == s.key;
      }), !(!i || i.score < this.similarThreshold) || (console.debug("右脚未达标", i), !1));
    }
  }, {
    key: "pushing",
    value: function pushing(s) {
      if (!this.isCounting || t.utils.isNone(s)) return;
      var i = this._poseComparer;
      var e = i.compare(this.samples.close, s.keypoints);
      1 !== this.stateTran && this.isSimilar(e) ? this.stateTran = 1 : 1 === this.stateTran && (e = i.compare(this.samples.open, s.keypoints), this.isSimilar(e) && (this.stateTran = -1, this.countTimes(), this.emitTick()));
    }
  }]);
}(e);r.KEY = "Jumping-Jack", r.NAME = "开合跳", exports.JumpingJack = r;