var _classCallCheck2 = require("../../@babel/runtime/helpers/classCallCheck");var _createClass2 = require("../../@babel/runtime/helpers/createClass");var _assertThisInitialized2 = require("../../@babel/runtime/helpers/assertThisInitialized");var _possibleConstructorReturn2 = require("../../@babel/runtime/helpers/possibleConstructorReturn");var _getPrototypeOf2 = require("../../@babel/runtime/helpers/getPrototypeOf");var _inherits2 = require("../../@babel/runtime/helpers/inherits");var _typeof2 = require("../../@babel/runtime/helpers/typeof");function _callSuper(_this, derived, args) {
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
}var t = Object.defineProperty,
  e = function e(_e, i, l) {
    return function (e, i, l) {
      i in e ? t(e, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: l
      }) : e[i] = l;
    }(_e, "symbol" != _typeof2(i) ? i + "" : i, l), l;
  };var i = require("../../common/vendor.js"),
  l = i.index.$aiSportPlugin,
  s = l.sports.SportBase,
  a = l.calc.Calculator;var n = /*#__PURE__*/function (_s) {
  function n(t) {
    var _this2;
    _classCallCheck2(this, n);
    _this2 = _callSuper(this, n, [t]), e(_assertThisInitialized2(_this2), "_calc", null), e(_assertThisInitialized2(_this2), "_calculator", null), e(_assertThisInitialized2(_this2), "stateTran", -1), _this2.tickMode = !0, _this2._calc = new l.calc.CalcBase(), _this2._calculator = new a(), _this2._calculator.pointThreshold = _this2.pointThreshold, _this2.buildRules();
    return _this2;
  }
  _inherits2(n, _s);
  return _createClass2(n, [{
    key: "buildRules",
    value: function buildRules() {
      this.basePose = {
        name: "基本姿态",
        calc: "$and",
        rules: [{
          name: "全身需入镜",
          calc: "whole"
        }, {
          name: "站立姿态",
          calc: "stand"
        }, {
          name: "站立姿态",
          calc: "stand"
        }, {
          name: "任一手平直",
          calc: "$or",
          rules: [{
            name: "左平直状态",
            calc: "match-angle",
            angleKey: "left_shoulder",
            secondKey: "left_hip",
            thirdKey: "left_wrist",
            angle: 90,
            offset: 20
          }, {
            name: "右平直状态",
            calc: "match-angle",
            angleKey: "right_shoulder",
            secondKey: "right_hip",
            thirdKey: "right_wrist",
            angle: 90,
            offset: 20
          }]
        }]
      };
    }
  }, {
    key: "pushing",
    value: function pushing(t) {
      if (i.utils.isNone(t)) return;
      if (!this._calculator.calculating(t, {
        name: "站立姿态",
        calc: "stand"
      })) {
        var _t = this.invalid ? null : -2;
        return this.invalid = !0, _t;
      }
      if (!this._calculator.calculating(t, this.basePose)) return;
      this.invalid = !1;
      var e = this._calc.findPoint(t.keypoints, "nose");
      if (!e) return;
      var l = null,
        s = this._calc.findPoint(t.keypoints, "left_wrist"),
        a = this._calc.findPoint(t.keypoints, "right_wrist");
      s && a && (l = s && a ? s.score > a.score ? s : a : s || a, l.x > e.x ? this.stateTran = 1 : l.x >= e.x || 1 !== this.stateTran || (this.stateTran = -1, this.countTimes(), this.emitTick(), console.log("on-tick")));
    }
  }]);
}(s);n.KEY = "Hand-Lift", n.NAME = "自定义-手臂平伸运动", exports.SportHandLift = n;