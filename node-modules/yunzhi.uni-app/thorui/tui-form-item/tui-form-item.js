var e = require("../../../../common/vendor.js"),
  t = {
    name: "tui-form-item",
    emits: ["click"],
    inject: {
      form: {
        value: "form",
        default: null
      }
    },
    props: {
      padding: {
        type: String,
        default: ""
      },
      marginTop: {
        type: [Number, String],
        default: 0
      },
      marginBottom: {
        type: [Number, String],
        default: 0
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
      labelFontWeight: {
        type: [Number, String],
        default: 0
      },
      labelWidth: {
        type: [Number, String],
        default: 160
      },
      labelRight: {
        type: [Number, String],
        default: 16
      },
      asterisk: {
        type: Boolean,
        default: !1
      },
      asteriskColor: {
        type: String,
        default: ""
      },
      background: {
        type: String,
        default: ""
      },
      highlight: {
        type: Boolean,
        default: !1
      },
      arrow: {
        type: Boolean,
        default: !1
      },
      arrowColor: {
        type: String,
        default: ""
      },
      bottomBorder: {
        type: Boolean,
        default: !0
      },
      borderColor: {
        type: String,
        default: ""
      },
      left: {
        type: [Number, String],
        default: 30
      },
      right: {
        type: [Number, String],
        default: 0
      },
      radius: {
        type: String,
        default: ""
      },
      index: {
        type: [Number, String],
        default: 0
      },
      prop: {
        type: String,
        default: ""
      },
      absolute: {
        type: Boolean,
        default: !0
      },
      position: {
        type: [Number, String],
        default: 0
      },
      rules: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    },
    computed: {
      getPadding: function getPadding() {
        return this.padding || e.index && e.index.$tui && e.index.$tui.tuiFormItem.padding || "28rpx 30rpx";
      },
      getBgColor: function getBgColor() {
        return this.background || e.index && e.index.$tui && e.index.$tui.tuiFormItem.background || "#fff";
      },
      getRadius: function getRadius() {
        return this.radius || e.index && e.index.$tui && e.index.$tui.tuiFormItem.radius || "0";
      },
      getAsteriskColor: function getAsteriskColor() {
        return this.asteriskColor || e.index && e.index.$tui && e.index.$tui.tuiFormItem.asteriskColor || "#EB0909";
      },
      getLabelStyl: function getLabelStyl() {
        var t = this.labelSize || e.index && e.index.$tui && e.index.$tui.tuiFormItem.labelSize || 32,
          r = this.labelColor || e.index && e.index.$tui && e.index.$tui.tuiFormItem.labelColor || "#333",
          i = this.labelFontWeight || e.index && e.index.$tui && e.index.$tui.tuiFormItem.labelFontWeight || 400;
        return "width:".concat(this.labelWidth, "rpx;font-size:").concat(t, "rpx;color:").concat(r, ";padding-right:").concat(this.labelRight, "rpx;font-weight:").concat(i, ";");
      },
      getArrowColor: function getArrowColor() {
        return this.arrowColor || e.index && e.index.$tui && e.index.$tui.tuiFormItem.arrowColor || "#c0c0c0";
      },
      getBorderColor: function getBorderColor() {
        return this.borderColor || e.index && e.index.$tui && e.index.$tui.tuiFormItem.borderColor || "#eaeef1";
      },
      errorPosition: function errorPosition() {
        return this.position || e.index && e.index.$tui && e.index.$tui.tuiFormItem.position || 2;
      },
      getErrorRight: function getErrorRight() {
        var e = (this.getPadding || "28rpx 30rpx").split(" ");
        return e[1] || e[0] || "30rpx";
      },
      getErrorLeft: function getErrorLeft() {
        var e = "30rpx";
        if (2 == this.errorPosition) {
          var _t = this.getErrorRight,
            _r = _t ? _t.replace("rpx", "").replace("px", "") : 0;
          e = Number(this.labelWidth) + Number(_r) + "rpx";
        }
        return e;
      }
    },
    data: function data() {
      return {
        errorMsg: "",
        showError: !1,
        itemValue: "",
        watchKey: "",
        isImmediate: !1,
        formItemRules: null
      };
    },
    watch: {
      prop: {
        handler: function handler(e) {
          var _this = this;
          var t = "form.model.".concat(e || "prop_key_empty");
          e && !0 !== e && this.form && t != this.watchKey && (this.watchKey = t, this.$watch(t, function (e) {
            _this.isImmediate && _this.prop && _this.form ? _this.form.immediateValidator(_this.prop).then(function (e) {
              e.isPass ? _this.errorMsg = "" : _this.errorMsg = e.errorMsg;
            }).catch(function (e) {
              console.log(e.errorMsg);
            }) : _this.showError && e != _this.itemValue && (_this.errorMsg = "");
          }));
        },
        immediate: !0
      }
    },
    beforeUnmount: function beforeUnmount() {
      this.uninstall();
    },
    created: function created() {
      this.form && (this.form.children.push(this), this.isImmediate = this.form.isImmediate, this.showError = !this.form.showMessage);
    },
    methods: {
      handleClick: function handleClick() {
        this.$emit("click", {
          index: this.index
        });
      },
      setRules: function setRules(e) {
        this.formItemRules = e;
      },
      setRulesMerge: function setRulesMerge(e) {
        var _this2 = this;
        if (this.formItemRules = e || this.rules, this.form) {
          var _t2 = this.form.concatRules.findIndex(function (t) {
              return t.name === e.name || t.name === _this2.prop;
            }),
            _r2 = this.getRules();
          if (!_r2) return;
          -1 === _t2 ? this.form.concatRules.push(_r2) : this.form.concatRules[_t2] = _r2;
        }
      },
      immediateValidate: function immediateValidate(e) {
        this.isImmediate = e;
      },
      getRules: function getRules() {
        var e = this.formItemRules || this.rules;
        return e.name || !e.rule && !e.validator || (e.name = this.prop), e.name ? e : null;
      },
      validate: function validate(e) {
        var _this3 = this;
        var t = this.getRules();
        return new Promise(function (r, i) {
          if (_this3.form && t) {
            var o = {};
            var s = e;
            null == s && (s = _this3.form.model[t.name] || null), o[t.name] = s, _this3.form.immediateValidator(t.name, o, [t]).then(function (e) {
              e.isPass ? _this3.errorMsg = "" : _this3.errorMsg = e.errorMsg, r(e);
            }).catch(function (e) {
              i(e), console.log(e.errorMsg);
            });
          } else i({
            isPass: !1,
            errorMsg: "未检测到Form组件或rules校验规则数据！"
          });
        });
      },
      clearValidate: function clearValidate() {
        this.errorMsg = "";
      },
      uninstall: function uninstall() {
        this.form && this.form.uninstall(this);
      }
    }
  };var r = e._export_sfc(t, [["render", function (t, r, i, o, s, l) {
  return e.e({
    a: i.asterisk
  }, i.asterisk ? {
    b: l.getAsteriskColor
  } : {}, {
    c: i.label
  }, i.label ? {
    d: e.t(i.label),
    e: e.s(l.getLabelStyl)
  } : {}, {
    f: i.bottomBorder
  }, i.bottomBorder ? {
    g: l.getBorderColor,
    h: i.left + "rpx",
    i: i.right + "rpx"
  } : {}, {
    j: i.arrow
  }, i.arrow ? {
    k: l.getArrowColor
  } : {}, {
    l: i.highlight ? 1 : "",
    m: l.getPadding,
    n: l.getBgColor,
    o: l.getRadius,
    p: e.o(function () {
      return l.handleClick && l.handleClick.apply(l, arguments);
    }),
    q: (!i.absolute && s.errorMsg && !0 !== s.errorMsg || i.absolute) && i.prop
  }, (!i.absolute && s.errorMsg && !0 !== s.errorMsg || i.absolute) && i.prop ? {
    r: e.t(s.errorMsg),
    s: 3 == l.errorPosition ? 1 : "",
    t: l.getAsteriskColor,
    v: e.n(i.absolute ? "tui-form__error-absolute" : "tui-form__error-relative"),
    w: e.n(3 == l.errorPosition ? "tui-form__error-right" : ""),
    x: e.n(s.errorMsg && !0 !== s.errorMsg ? "tui-form__error-active" : ""),
    y: l.getErrorLeft,
    z: l.getErrorRight
  } : {}, {
    A: i.marginTop + "rpx",
    B: i.marginBottom + "rpx",
    C: l.getRadius,
    D: l.getBgColor
  });
}], ["__scopeId", "data-v-2d18d10d"]]);wx.createComponent(r);