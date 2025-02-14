var _defineProperty2 = require("../../../@babel/runtime/helpers/defineProperty");var e = require("../../../common/vendor.js"),
  t = {
    name: "numberPicker",
    options: {
      styleIsolation: "shared"
    },
    props: {
      modelValue: {
        type: Number,
        default: null
      },
      label: {
        type: String,
        default: null
      },
      placeholder: {
        type: String,
        default: "请选择"
      },
      numberMin: {
        type: Number,
        default: 0
      },
      numberStep: {
        type: Number,
        default: 1
      },
      numberMax: {
        type: Number,
        default: 100
      },
      decimals: {
        type: Number,
        default: 0
      },
      decimalMin: {
        type: Number,
        default: 0
      },
      decimalStep: {
        type: Number,
        default: 1
      },
      decimalMax: {
        type: Number,
        default: 9
      },
      unit: {
        type: String,
        default: null
      }
    },
    data: function data() {
      return {
        visibled: !1,
        selections: [],
        numberRange: [],
        decimalRange: []
      };
    },
    emits: ["update:modelValue", "on-cancel", "on-confirm"],
    watch: _defineProperty2({
      modelValue: {
        handler: function handler() {
          this.bindSelections();
        }
      },
      numberMin: function numberMin() {
        this.bindNumberRange();
      },
      numberStep: function numberStep() {
        this.bindNumberRange();
      },
      numberMax: function numberMax() {
        this.bindNumberRange();
      },
      decimalMax: function decimalMax() {
        this.bindDecimalRange();
      },
      decimalStep: function decimalStep() {
        this.bindDecimalRange();
      }
    }, "decimalMax", function decimalMax() {
      this.bindDecimalRange();
    }),
    mounted: function mounted() {
      this.bindNumberRange(), this.bindDecimalRange();
    },
    methods: {
      bindNumberRange: function bindNumberRange() {
        var e = [];
        for (var _t = this.numberMin; _t <= this.numberMax; _t += this.numberStep) e.push(_t);
        this.numberRange = e;
      },
      bindDecimalRange: function bindDecimalRange() {
        var e = [];
        for (var _t2 = this.decimalMin; _t2 <= this.decimalMax; _t2 += this.decimalStep) {
          var _i = _t2.toString().padStart(this.decimals, "0");
          e.push(_i);
        }
        this.decimalRange = e;
      },
      bindDefaultSelections: function bindDefaultSelections() {
        var e = [0];
        this.decimals > 0 && (e.push(0), e.push(0)), this.unit && e.push(0), this.selections = e;
      },
      bindSelections: function bindSelections() {
        if (!this.modelValue) return void this.bindDefaultSelections();
        var e = [],
          t = Math.floor(this.modelValue / 1),
          i = this.numberRange.findIndex(function (e) {
            return e == t;
          });
        if (e.push(-1 == i ? 0 : i), this.decimals > 0) {
          var n = 10 * this.decimals;
          t = Math.round(this.modelValue * n), t %= n, t = Math.abs(t), t = t.toString().padStart(this.decimals, "0"), e.push(0), i = this.decimalRange.findIndex(function (e) {
            return e == t;
          }), e.push(-1 == i ? 0 : i);
        }
        this.unit && e.push(0), this.selections = e;
      },
      onPopupToggle: function onPopupToggle(e) {
        this.visibled = !this.visibled, this.visibled && !this._isInitSelection && (this.bindSelections(), this._isInitSelection = !0);
      },
      onSelectChange: function onSelectChange(e) {
        this.selections = e.detail.value;
      },
      onCancel: function onCancel() {
        this.visibled = !1, this.$emit("on-cancel");
      },
      onConfirm: function onConfirm() {
        var e = this.selections[0],
          t = this.numberRange[e];
        this.decimals > 0 && (e = this.selections[2], t += ".", t += this.decimalRange[e], t = Number(t)), this.visibled = !1, this.$emit("update:modelValue", t), this.$emit("on-confirm");
      }
    }
  };if (!Array) {
  (e.resolveComponent("tui-button") + e.resolveComponent("tui-drawer"))();
}Math || (function () {
  return "../thorui/tui-button/tui-button.js";
} + function () {
  return "../thorui/tui-drawer/tui-drawer.js";
})();var i = e._export_sfc(t, [["render", function (t, i, n, l, a, s) {
  return e.e({
    a: n.modelValue
  }, n.modelValue ? {
    b: e.t(n.modelValue),
    c: e.t(n.unit)
  } : {
    d: e.t(n.placeholder)
  }, {
    e: n.modelValue ? "" : 1,
    f: e.o(function () {
      return s.onPopupToggle && s.onPopupToggle.apply(s, arguments);
    }),
    g: n.label
  }, n.label ? {
    h: e.t(n.label)
  } : {}, {
    i: e.f(a.numberRange, function (t, i, n) {
      return {
        a: e.t(t),
        b: a.selections[0] == i ? 1 : "",
        c: i
      };
    }),
    j: n.decimals > 0
  }, (n.decimals, {}), {
    k: n.decimals > 0
  }, n.decimals > 0 ? {
    l: e.f(a.decimalRange, function (t, i, n) {
      return {
        a: e.t(t),
        b: a.selections[2] == i ? 1 : "",
        c: i
      };
    })
  } : {}, {
    m: n.unit
  }, n.unit ? {
    n: e.t(n.unit)
  } : {}, {
    o: a.selections,
    p: e.o(function () {
      return s.onSelectChange && s.onSelectChange.apply(s, arguments);
    }),
    q: e.o(s.onCancel),
    r: e.p({
      type: "gray",
      width: "40vw",
      height: "68rpx",
      shape: "circle",
      shadow: !0
    }),
    s: e.o(s.onConfirm),
    t: e.p({
      type: "primary",
      width: "40vw",
      height: "68rpx",
      shape: "circle",
      shadow: !0
    }),
    v: e.o(s.onPopupToggle),
    w: e.p({
      visible: a.visibled,
      mode: "bottom"
    })
  });
}]]);wx.createComponent(i);