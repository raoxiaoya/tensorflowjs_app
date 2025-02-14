var _toConsumableArray2 = require("../../../../@babel/runtime/helpers/toConsumableArray");var e = require("../../../../common/vendor.js"),
  t = {
    name: "tui-form",
    provide: function provide() {
      return {
        form: this
      };
    },
    props: {
      model: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      rules: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      backgroundColor: {
        type: String,
        default: "transparent"
      },
      padding: {
        type: String,
        default: "0"
      },
      showMessage: {
        type: Boolean,
        default: !0
      },
      radius: {
        type: String,
        default: "0"
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      tipTop: {
        type: [Number, String],
        default: 0
      },
      tipPadding: {
        type: String,
        default: "20rpx"
      },
      tipBackgroundColor: {
        type: String,
        default: ""
      },
      tipSize: {
        type: [Number, String],
        default: 28
      },
      tipColor: {
        type: String,
        default: "#fff"
      },
      tipRidus: {
        type: String,
        default: "12rpx"
      },
      duration: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      getTipBgColor: function getTipBgColor() {
        return this.tipBackgroundColor || e.index && e.index.$tui && e.index.$tui.tuiForm.tipBackgroundColor || "#f74d54";
      }
    },
    watch: {
      showMessage: function showMessage(e) {
        this.children && this.children.length > 0 && this.children.forEach(function (t) {
          t.showError = !e;
        });
      }
    },
    data: function data() {
      return {
        errorMsg: "",
        timer: null,
        formRules: [],
        isImmediate: !1,
        concatRules: []
      };
    },
    created: function created() {
      this.children = [];
    },
    beforeUnmount: function beforeUnmount() {
      this.clearTimer();
    },
    methods: {
      clearTimer: function clearTimer() {
        clearTimeout(this.timer), this.timer = null, this.children = null;
      },
      getFormItemRules: function getFormItemRules() {
        var e = [];
        return this.children && this.children.length > 0 && this.children.forEach(function (t) {
          var r = t.getRules();
          r && e.push(r);
        }), e;
      },
      getMergeRules: function getMergeRules(e) {
        if (0 === this.concatRules.length) return e;
        var t = _toConsumableArray2(e);
        return this.concatRules.forEach(function (r) {
          var i = e.findIndex(function (e) {
            return e.name === r.name;
          });
          -1 === i ? t.push(r) : t[i] = r;
        }), t;
      },
      validate: function validate(t, r) {
        var _this = this;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        return t = t || this.model, r = r || this.rules || [], new Promise(function (s, n) {
          try {
            r = 0 === r.length ? _this.getFormItemRules() : _this.getMergeRules(r);
            var _n = e.form.validation(t, r, i);
            if (!_n.isPass) {
              var _r = _n.errorMsg;
              if (_this.showMessage) {
                _this.clearTimer(), i && (_r = _r[0].msg), _this.errorMsg = _r;
                var _t = _this.duration || e.index && e.index.$tui && e.index.$tui.tuiForm.duration || 2e3;
                _this.timer = setTimeout(function () {
                  _this.errorMsg = "";
                }, Number(_t));
              } else i && _this.children && _this.children.length > 0 && _this.children.forEach(function (e) {
                var i = _r.findIndex(function (t) {
                  return t.name === e.prop;
                });
                e.prop && !0 !== e.prop && ~i && (e.errorMsg = _r[i].msg, e.itemValue = t[e.prop]);
              });
            }
            s(_n);
          } catch (l) {
            n({
              isPass: !1,
              errorMsg: "校验出错，请检查数据格式是否有误！"
            });
          }
        });
      },
      immediateValidate: function immediateValidate(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        this.isImmediate = e, e && (t = t && 0 !== t.length ? this.getMergeRules(t) : this.getFormItemRules(), this.formRules = t || []), this.children && this.children.length > 0 && this.children.forEach(function (t) {
          t.immediateValidate(e);
        });
      },
      immediateValidator: function immediateValidator(t, r, i) {
        var _this2 = this;
        return new Promise(function (s, n) {
          try {
            var _n2 = e.form.validation(r || _this2.model, i || _this2.formRules, !0);
            if (!_n2.isPass) {
              var _e = _n2.errorMsg;
              var _r2 = _e.findIndex(function (e) {
                return e.name === t;
              });
              ~_r2 ? _n2.errorMsg = _e[_r2].msg : (_n2.isPass = !0, _n2.errorMsg = "");
            }
            s(_n2);
          } catch (l) {
            n({
              isPass: !1,
              errorMsg: "校验出错，请检查数据格式是否有误！"
            });
          }
        });
      },
      clearValidate: function clearValidate() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = e;
        t = t || [], "string" == typeof e && (t = [e]), this.children && this.children.length > 0 && (t && t.length > 0 ? this.children.forEach(function (e) {
          e.prop && ~t.indexOf(e.prop) && (e.errorMsg = "");
        }) : this.children.forEach(function (e) {
          e.errorMsg = "";
        }));
      },
      validateField: function validateField(e, t, r) {
        t = t && 0 !== t.length ? this.getMergeRules(t) : this.getFormItemRules();
        var i = "string" == typeof e,
          s = t.filter(function (t) {
            return e === t.name || !i && -1 !== e.indexOf(t.name);
          });
        return r = r || this.model, this.validate(r, s, !0);
      },
      uninstall: function uninstall(e) {
        if (this.children && this.children.length > 0) {
          var _t2 = this.children.findIndex(function (t) {
            return t === e;
          });
          -1 !== _t2 && this.children.splice(_t2, 1);
          var _r3 = e.getRules() || {},
            i = e.prop || _r3.name || "",
            s = this.concatRules.findIndex(function (e) {
              return e.name === i;
            });
          -1 !== s && this.concatRules.splice(s, 1);
        }
      }
    }
  };var r = e._export_sfc(t, [["render", function (t, r, i, s, n, l) {
  return e.e({
    a: i.showMessage
  }, i.showMessage ? {
    b: e.t(n.errorMsg),
    c: i.tipSize + "rpx",
    d: i.tipColor,
    e: i.tipTop + "px",
    f: i.tipPadding,
    g: l.getTipBgColor,
    h: i.tipRidus,
    i: n.errorMsg ? 1 : ""
  } : {}, {
    j: i.disabled
  }, (i.disabled, {}), {
    k: i.backgroundColor,
    l: i.padding,
    m: i.radius
  });
}], ["__scopeId", "data-v-145a9cb1"]]);wx.createComponent(r);