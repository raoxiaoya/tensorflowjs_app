var _createForOfIteratorHelper2 = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper");var _defineProperty2 = require("../../../../@babel/runtime/helpers/defineProperty");var t = require("../../../../common/vendor.js"),
  e = {
    name: "tui-picker",
    emits: ["pickstart", "pickend", "hide", "change"],
    props: {
      layer: {
        type: [Number, String],
        default: 1
      },
      pickerData: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      textField: {
        type: String,
        default: "text"
      },
      valueField: {
        type: String,
        default: "value"
      },
      childrenField: {
        type: String,
        default: "children"
      },
      show: {
        type: Boolean,
        default: !1
      },
      value: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      indicatorStyle: {
        type: String,
        default: "height: 48px;"
      },
      maskStyle: {
        type: String,
        default: ""
      },
      radius: {
        type: Boolean,
        default: !1
      },
      headerBgColor: {
        type: String,
        default: "#fff"
      },
      title: {
        type: String,
        default: ""
      },
      titleSize: {
        type: [Number, String],
        default: 34
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      confirmText: {
        type: String,
        default: "确定"
      },
      confirmColor: {
        type: String,
        default: ""
      },
      cancelText: {
        type: String,
        default: "取消"
      },
      cancelColor: {
        type: String,
        default: "#888"
      },
      btnSize: {
        type: [Number, String],
        default: 32
      },
      bold: {
        type: Boolean,
        default: !0
      },
      backgroundColor: {
        type: String,
        default: "#fff"
      },
      color: {
        type: String,
        default: "#333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      maskClosable: {
        type: Boolean,
        default: !0
      },
      params: {
        type: [Number, String],
        default: 0
      },
      zIndex: {
        type: [Number, String],
        default: 998
      }
    },
    computed: {
      getConfirmColor: function getConfirmColor() {
        return this.confirmColor || t.index && t.index.$tui && t.index.$tui.color.primary || "#5677fc";
      },
      getIndex: function getIndex() {
        return Number(this.zIndex) + 2;
      }
    },
    data: function data() {
      return {
        immediate: !0,
        visible: !1,
        vals: [],
        layer1__data: [],
        layer2__data: [],
        layer3__data: [],
        isEnd: !0,
        firstShow: !1
      };
    },
    created: function created() {
      var _this = this;
      this.initData(-1, 0, 0), this.$nextTick(function () {
        setTimeout(function () {
          _this.setDefaultOptions();
        }, 50);
      }), this.visible = this.show, this.visible && (this.firstShow = !0);
    },
    watch: {
      show: function show(t) {
        var _this2 = this;
        this.visible = t, t && setTimeout(function () {
          _this2.firstShow = !0;
        }, 260);
      },
      value: function value(t) {
        var _this3 = this;
        t && t.length > 0 && setTimeout(function () {
          _this3.setDefaultOptions();
        }, 20);
      },
      pickerData: function pickerData(t) {
        var _this4 = this;
        this.initData(-1, 0, 0), this.$nextTick(function () {
          setTimeout(function () {
            _this4.setDefaultOptions();
          }, 50);
        });
      }
    },
    methods: {
      hidePicker: function hidePicker() {
        this.visible = !1, this.$emit("hide", {
          params: this.params
        });
      },
      maskClick: function maskClick() {
        this.maskClosable && this.hidePicker();
      },
      getValue: function getValue() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "text";
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var i = this.vals,
          a = this.pickerData,
          l = "";
        return 1 == e ? l = a[i[0]][t] : 2 == e ? a[i[0]][this.childrenField] && (l = a[i[0]][this.childrenField][i[1]][t]) : a[i[0]][this.childrenField] && a[i[0]][this.childrenField][i[1]][this.childrenField] && (l = a[i[0]][this.childrenField][i[1]][this.childrenField][i[2]][t]), l;
      },
      loop: function loop() {
        var _this5 = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this.isEnd ? this.pickerChange() : (++t >= 30 && (this.isEnd = !0), setTimeout(function () {
          _this5.loop(t);
        }, 50));
      },
      picker: function picker() {
        this.hidePicker(), this.loop();
      },
      pickerChange: function pickerChange() {
        var t = [],
          e = [],
          i = "";
        this.pickerData.length > 0 && (1 == this.layer ? (t = this.getValue(this.textField), e = this.getValue(this.valueField), i = t) : 2 == this.layer ? (t = [this.getValue(this.textField), this.getValue(this.textField, 2)], e = [this.getValue(this.valueField), this.getValue(this.valueField, 2)], i = t.join("")) : (t = [this.getValue(this.textField), this.getValue(this.textField, 2), this.getValue(this.textField, 3)], e = [this.getValue(this.valueField), this.getValue(this.valueField, 2), this.getValue(this.valueField, 3)], i = t.join(""))), this.$emit("change", _defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2({}, this.textField, t), this.valueField, e), "index", this.vals), "result", i), "params", this.params));
      },
      toArr: function toArr(t) {
        var e = [];
        if (t && t.length > 0) {
          var _iterator = _createForOfIteratorHelper2(t),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _i = _step.value;
              e.push(_i[this.textField]);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return e;
      },
      checkChildrenData: function checkChildrenData(t, e, i, a) {
        var l = [];
        return 1 == e ? t[i] && (l = t[i][this.childrenField] || []) : t[i] && t[i][this.childrenField] && t[i][this.childrenField][a] && (l = t[i][this.childrenField][a][this.childrenField] || []), l;
      },
      setDefaultOptions: function setDefaultOptions() {
        var _this6 = this;
        var t = this.value,
          e = [];
        this.layer1__data.length > 0 && t.length > 0 ? t.forEach(function (t, i) {
          var a = _this6["layer".concat(i + 1, "__data")].indexOf(t);
          0 == i ? _this6.layer2__data = _this6.toArr(_this6.checkChildrenData(_this6.pickerData, 1, a)) : 1 == i && (_this6.layer3__data = _this6.toArr(_this6.checkChildrenData(_this6.pickerData, 2, e[0], a))), -1 == a ? e.push(0) : e.push(a);
        }) : 1 == this.layer ? e = [0] : 2 == this.layer ? (e = [0, 0], this.layer2__data = this.toArr(this.checkChildrenData(this.pickerData, 1, 0))) : (e = [0, 0, 0], this.layer2__data = this.toArr(this.checkChildrenData(this.pickerData, 1, 0)), this.layer3__data = this.toArr(this.checkChildrenData(this.pickerData, 2, 0, 0))), this.vals.join(",") != e.join(",") && this.$nextTick(function () {
          setTimeout(function () {
            _this6.vals = e;
          }, 200);
        });
      },
      initData: function initData(t, e, i) {
        var a = this.pickerData;
        if (!a || 0 == a.length) return this.layer1__data = [], this.layer2__data = [], void (this.layer3__data = []);
        1 == this.layer ? this.layer1__data = this.toArr(a) : 2 == this.layer ? (-1 == t && (this.layer1__data = this.toArr(a)), this.layer2__data = this.toArr(this.checkChildrenData(a, 1, e))) : (-1 == t && (this.layer1__data = this.toArr(a)), 0 != t && -1 != t || (this.layer2__data = this.toArr(this.checkChildrenData(a, 1, e))), this.layer3__data = this.toArr(this.checkChildrenData(a, 2, e, i)));
      },
      columnPicker: function columnPicker(t) {
        var e = t.detail.value;
        this.firstShow && e.length == this.layer && (1 == this.layer ? this.layer__one(e) : 2 == this.layer ? this.layer__two(e) : this.layer__three(e), this.isEnd = !0);
      },
      layer__one: function layer__one(t) {
        this.vals[0] != t[0] && (this.vals = t);
      },
      layer__two: function layer__two(t) {
        this.vals[0] != t[0] ? (this.initData(0, t[0]), this.vals = [t[0], 0]) : this.vals = t;
      },
      layer__three: function layer__three(t) {
        this.vals[0] != t[0] ? (this.initData(0, t[0], 0), this.vals = [t[0], 0, 0]) : this.vals[1] != t[1] ? (this.initData(0, t[0], t[1]), this.vals = [t[0], t[1], 0]) : this.vals = t;
      },
      pickstart: function pickstart(t) {
        this.isEnd = !1, this.$emit("pickstart", {
          params: this.params
        });
      },
      pickend: function pickend(t) {
        this.$emit("pickend", {
          params: this.params
        });
      }
    }
  };var i = t._export_sfc(e, [["render", function (e, i, a, l, s, r) {
  return t.e({
    a: a.zIndex,
    b: t.n(s.visible ? "tui-picker__mask-show" : ""),
    c: t.o(function () {
      return r.maskClick && r.maskClick.apply(r, arguments);
    }),
    d: t.t(a.cancelText),
    e: t.o(function () {
      return r.hidePicker && r.hidePicker.apply(r, arguments);
    }),
    f: a.cancelColor,
    g: a.btnSize + "rpx",
    h: a.bold ? "bold" : "normal",
    i: t.t(a.title),
    j: a.titleSize + "rpx",
    k: a.titleColor,
    l: t.t(a.confirmText),
    m: t.o(function () {
      return r.picker && r.picker.apply(r, arguments);
    }),
    n: r.getConfirmColor,
    o: a.btnSize + "rpx",
    p: a.bold ? "bold" : "normal",
    q: a.headerBgColor,
    r: t.f(s.layer1__data, function (e, i, a) {
      return {
        a: t.t(e),
        b: i
      };
    }),
    s: a.color,
    t: a.size + "px",
    v: 2 == a.layer || 3 == a.layer
  }, 2 == a.layer || 3 == a.layer ? {
    w: t.f(s.layer2__data, function (e, i, a) {
      return {
        a: t.t(e),
        b: i
      };
    }),
    x: a.color,
    y: a.size + "px"
  } : {}, {
    z: 3 == a.layer
  }, 3 == a.layer ? {
    A: t.f(s.layer3__data, function (e, i, a) {
      return {
        a: t.t(e),
        b: i
      };
    }),
    B: a.color,
    C: a.size + "px"
  } : {}, {
    D: a.maskStyle + a.layer,
    E: a.maskStyle,
    F: a.indicatorStyle,
    G: s.vals,
    H: s.immediate,
    I: t.o(function () {
      return r.columnPicker && r.columnPicker.apply(r, arguments);
    }),
    J: t.o(function () {
      return r.pickend && r.pickend.apply(r, arguments);
    }),
    K: t.o(function () {
      return r.pickstart && r.pickstart.apply(r, arguments);
    }),
    L: a.backgroundColor,
    M: r.getIndex,
    N: t.n(s.visible ? "tui-picker__show" : ""),
    O: t.n(a.radius ? "tui-picker__radius" : "")
  });
}], ["__scopeId", "data-v-7ff41a93"]]);wx.createComponent(i);