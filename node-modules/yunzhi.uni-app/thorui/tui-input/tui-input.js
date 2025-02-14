var e = require("../../../../common/vendor.js"),
  t = {
    name: "tui-input",
    emits: ["input", "update:modelValue", "focus", "blur", "confirm", "click", "keyboardheightchange"],
    behaviors: ["wx://form-field-group"],
    options: {
      addGlobalClass: !0,
      virtualHost: !0
    },
    props: {
      required: {
        type: Boolean,
        default: !1
      },
      requiredColor: {
        type: String,
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      labelSize: {
        type: [Number, String],
        default: 0
      },
      labelColor: {
        type: String,
        default: ""
      },
      labelWidth: {
        type: Number,
        default: 140
      },
      clearable: {
        type: Boolean,
        default: !1
      },
      clearSize: {
        type: Number,
        default: 15
      },
      clearColor: {
        type: String,
        default: "#bfbfbf"
      },
      focus: {
        type: Boolean,
        default: !1
      },
      placeholder: {
        type: String,
        default: ""
      },
      placeholderStyle: {
        type: String,
        default: ""
      },
      name: {
        type: String,
        default: ""
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      modelModifiers: {
        default: function _default() {
          return {};
        }
      },
      type: {
        type: String,
        default: "text"
      },
      password: {
        type: Boolean,
        default: !1
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      min: {
        type: [Number, String],
        default: "NaN"
      },
      max: {
        type: [Number, String],
        default: "NaN"
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      confirmType: {
        type: String,
        default: "done"
      },
      confirmHold: {
        type: Boolean,
        default: !1
      },
      cursor: {
        type: Number,
        default: -1
      },
      selectionStart: {
        type: Number,
        default: -1
      },
      selectionEnd: {
        type: Number,
        default: -1
      },
      adjustPosition: {
        type: Boolean,
        default: !0
      },
      holdKeyboard: {
        type: Boolean,
        default: !1
      },
      autoBlur: {
        type: Boolean,
        default: !1
      },
      size: {
        type: [Number, String],
        default: 0
      },
      color: {
        type: String,
        default: ""
      },
      inputBorder: {
        type: Boolean,
        default: !1
      },
      borderColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.1)"
      },
      isFillet: {
        type: Boolean,
        default: !1
      },
      borderTop: {
        type: Boolean,
        default: !1
      },
      borderBottom: {
        type: Boolean,
        default: !0
      },
      lineLeft: {
        type: Boolean,
        default: !0
      },
      trim: {
        type: Boolean,
        default: !0
      },
      textRight: {
        type: Boolean,
        default: !1
      },
      padding: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: -1
      },
      marginTop: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      getLabelSize: function getLabelSize() {
        return this.labelSize || e.index && e.index.$tui && e.index.$tui.tuiInput.labelSize || 32;
      },
      getLabelColor: function getLabelColor() {
        return this.labelColor || e.index && e.index.$tui && e.index.$tui.tuiInput.labelColor || "#333";
      },
      getSize: function getSize() {
        return this.size || e.index && e.index.$tui && e.index.$tui.tuiInput.size || 32;
      },
      getColor: function getColor() {
        return this.color || e.index && e.index.$tui && e.index.$tui.tuiInput.color || "#333";
      },
      getRadius: function getRadius() {
        var t = this.radius;
        return -1 !== t && !0 !== t || (t = e.index && e.index.$tui && e.index.$tui.tuiInput.radius), Number(t || 0);
      },
      getStyles: function getStyles() {
        var t = this.padding || e.index && e.index.$tui && e.index.$tui.tuiInput.padding || "26rpx 30rpx",
          i = this.backgroundColor || e.index && e.index.$tui && e.index.$tui.tuiInput.backgroundColor || "#FFFFFF";
        var o = this.getRadius,
          r = "padding:".concat(t, ";background:").concat(i, ";margin-top:").concat(this.marginTop, "rpx;");
        return o && !0 !== o && -1 !== o && (r += "border-radius:".concat(o, "rpx;")), (this.borderTop || this.borderBottom || this.inputBorder) && (r += "border-color:".concat(this.borderColor, ";")), r;
      },
      getRequiredColor: function getRequiredColor() {
        return this.requiredColor || e.index && e.index.$tui && e.index.$tui.tuiInput.requiredColor || "#EB0909";
      }
    },
    data: function data() {
      return {
        placeholderStyl: "",
        focused: !1,
        inputVal: ""
      };
    },
    watch: {
      focus: function focus(e) {
        var _this = this;
        this.$nextTick(function () {
          setTimeout(function () {
            _this.focused = e;
          }, 50);
        });
      },
      placeholderStyle: function placeholderStyle() {
        this.fieldPlaceholderStyle();
      },
      modelValue: function modelValue(e) {
        this.inputVal = e;
      },
      value: function value(e) {
        this.inputVal = e;
      }
    },
    created: function created() {
      var _this2 = this;
      this.fieldPlaceholderStyle(), setTimeout(function () {
        _this2.value && !_this2.modelValue ? _this2.inputVal = _this2.value : _this2.inputVal = _this2.modelValue;
      }, 50);
    },
    mounted: function mounted() {
      var _this3 = this;
      this.$nextTick(function () {
        setTimeout(function () {
          _this3.focused = _this3.focus;
        }, 300);
      });
    },
    methods: {
      fieldPlaceholderStyle: function fieldPlaceholderStyle() {
        if (this.placeholderStyle) this.placeholderStyl = this.placeholderStyle;else {
          var _t = e.index.upx2px(this.size || e.index && e.index.$tui && e.index.$tui.tuiInput.size || 32);
          this.placeholderStyl = "font-size:".concat(_t, "px");
        }
      },
      onInput: function onInput(e) {
        var _this4 = this;
        var t = e.detail.value;
        this.trim && (t = this.trimStr(t)), this.inputVal = t;
        var i = Number(t);
        if ((this.modelModifiers.number || "digit" === this.type || "number" === this.type) && !isNaN(i) && Number.isSafeInteger(i)) {
          var _e = "digit" === this.type ? t : i;
          if ("number" == typeof i) {
            var _t2 = Number(this.min),
              _o = Number(this.max);
            "number" == typeof _t2 && i < _t2 ? _e = _t2 : "number" == typeof _o && _o < i && (_e = _o);
          }
          t = isNaN(_e) ? t : _e;
        }
        this.$nextTick(function () {
          "" !== e.detail.value && (_this4.inputVal = t);
        });
        var o = "" !== e.detail.value ? t : "";
        this.$emit("input", o), this.$emit("update:modelValue", o);
      },
      onFocus: function onFocus(e) {
        this.$emit("focus", e);
      },
      onBlur: function onBlur(e) {
        this.$emit("blur", e);
      },
      onConfirm: function onConfirm(e) {
        this.$emit("confirm", e);
      },
      onClear: function onClear(t) {
        this.disabled || (e.index.hideKeyboard(), this.inputVal = "", this.$emit("input", ""), this.$emit("update:modelValue", ""));
      },
      fieldClick: function fieldClick() {
        this.$emit("click", {
          name: this.name
        });
      },
      onKeyboardheightchange: function onKeyboardheightchange(e) {
        this.$emit("keyboardheightchange", e.detail);
      },
      trimStr: function trimStr(e) {
        return e.replace(/^\s+|\s+$/g, "");
      }
    }
  };var i = e._export_sfc(t, [["render", function (t, i, o, r, l, u) {
  return e.e({
    a: o.borderTop && !o.inputBorder
  }, o.borderTop && !o.inputBorder ? {
    b: o.borderColor
  } : {}, {
    c: o.borderBottom && !o.inputBorder
  }, o.borderBottom && !o.inputBorder ? {
    d: o.lineLeft ? 1 : "",
    e: o.borderColor
  } : {}, {
    f: o.inputBorder
  }, o.inputBorder ? {
    g: o.isFillet && !u.getRadius ? 1 : "",
    h: o.borderColor,
    i: 2 * u.getRadius + "rpx"
  } : {}, {
    j: o.required
  }, o.required ? {
    k: u.getRequiredColor
  } : {}, {
    l: o.label
  }, o.label ? {
    m: e.t(o.label),
    n: u.getLabelSize + "rpx",
    o: u.getLabelColor,
    p: u.getLabelSize + "rpx",
    q: u.getLabelColor,
    r: o.labelWidth + "rpx"
  } : {}, {
    s: o.textRight ? 1 : "",
    t: o.disabled ? 1 : "",
    v: u.getSize + "rpx",
    w: o.color,
    x: o.type,
    y: o.name,
    z: l.inputVal,
    A: o.password,
    B: l.inputVal ? "" : o.placeholder,
    C: l.placeholderStyl,
    D: o.disabled,
    E: o.cursorSpacing,
    F: o.maxlength,
    G: l.focused,
    H: o.confirmType,
    I: o.confirmHold,
    J: o.cursor,
    K: o.selectionStart,
    L: o.selectionEnd,
    M: o.adjustPosition,
    N: o.holdKeyboard,
    O: o.autoBlur,
    P: e.o(function () {
      return u.onFocus && u.onFocus.apply(u, arguments);
    }),
    Q: e.o(function () {
      return u.onBlur && u.onBlur.apply(u, arguments);
    }),
    R: e.o(function () {
      return u.onInput && u.onInput.apply(u, arguments);
    }),
    S: e.o(function () {
      return u.onConfirm && u.onConfirm.apply(u, arguments);
    }),
    T: e.o(function () {
      return u.onKeyboardheightchange && u.onKeyboardheightchange.apply(u, arguments);
    }),
    U: o.clearable && "" != l.inputVal
  }, o.clearable && "" != l.inputVal ? {
    V: o.clearSize,
    W: o.clearColor,
    X: e.o(function () {
      return u.onClear && u.onClear.apply(u, arguments);
    })
  } : {}, {
    Y: o.borderTop && !o.inputBorder ? 1 : "",
    Z: o.borderBottom && !o.inputBorder ? 1 : "",
    aa: o.isFillet && !u.getRadius ? 1 : "",
    ab: o.inputBorder ? 1 : "",
    ac: e.s(u.getStyles),
    ad: e.o(function () {
      return u.fieldClick && u.fieldClick.apply(u, arguments);
    })
  });
}], ["__scopeId", "data-v-5b7f552e"]]);wx.createComponent(i);