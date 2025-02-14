var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../../common/vendor.js"),
  t = {
    name: "regionPicker",
    options: {
      styleIsolation: "shared"
    },
    props: {
      selectorLevel: {
        type: Number,
        default: 1,
        validator: function validator(e) {
          return [0, 1, 2, 3].some(function (t) {
            return t === e;
          });
        }
      },
      modelValue: {
        type: Array,
        default: null
      },
      placeholder: {
        type: String,
        default: "请选择地区"
      },
      errorMessage: {
        type: String,
        default: null
      }
    },
    emits: ["update:modelValue", "on-change"],
    watch: {
      selectorLevel: function selectorLevel(e) {
        this.$emit("update:modelValue", null), this.initialize();
      },
      modelValue: function modelValue() {
        this.initialize();
      }
    },
    data: function data() {
      return {
        visibled: !1,
        loading: !1,
        labels: ["请选择"],
        labelIndex: 0,
        regions: [],
        selectorIndexs: [],
        selectorNodes: [],
        errorTips: null
      };
    },
    computed: {
      selectorPath: function selectorPath() {
        var e = this.selectorNodes;
        return !e || e.length < 1 ? null : e.map(function (e) {
          return e.name;
        }).join(" / ");
      }
    },
    mounted: function mounted() {
      var _this = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
        var t, o, s;
        return _regeneratorRuntime2().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              t = _this;
              _context.next = 3;
              return e.regionApi.getNodes({
                params: {
                  endCategory: 1
                },
                options: {
                  loading: !1,
                  onLoading: function onLoading(e) {
                    t.loading = e;
                  }
                }
              });
            case 3:
              o = _context.sent;
              if (o.success) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return");
            case 6:
              s = o.result;
              _this.__rawRegions = s, e.utils.isEmptyArray(_this.modelValue) ? _this.bindViews(s) : _this.initialize();
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    methods: {
      initialize: function initialize() {
        if (!this.__rawRegions) return;
        this.labels = ["请选择"], this.labelIndex = 0, this.selectorIndexs = [], this.selectorNodes = [], this.bindViews(this.__rawRegions);
        var t = this.modelValue;
        if (e.utils.isEmptyArray(t)) return;
        var o = this;
        var s = this.__rawRegions,
          i = function i(e) {
            var l = t[e],
              n = !1,
              r = s.some(function (r, a) {
                return (l.name === r.name || l.code === r.code) && (s = r.children || s, !r.children && e + 1 < t.length ? (o.getNextRegions(r, function () {
                  i(e);
                }), n = !0, !0) : (o.selectorNodes.push({
                  category: r.category,
                  code: r.code,
                  name: r.name
                }), o.onSelector(a), !0));
              });
            n || r && e + 1 < t.length && i(e + 1);
          };
        i(0);
      },
      bindViews: function bindViews(e) {
        this.regions = e.map(function (e) {
          return e.name;
        });
      },
      getNextRegions: function getNextRegions(t, o) {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var s, i;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                s = _this2;
                _context2.next = 3;
                return e.regionApi.getChildren({
                  params: {
                    category: t.category + 1,
                    prevCode: t.code
                  },
                  options: {
                    loading: !1,
                    onLoading: function onLoading(e) {
                      s.loading = e;
                    }
                  }
                });
              case 3:
                i = _context2.sent;
                i.success && (t.children = i.result, o ? o() : _this2.bindViews(i.result));
              case 5:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      getSelectorNode: function getSelectorNode(t) {
        var o = this.__rawRegions;
        for (var s = 0; s < t; s++) {
          var _t = this.selectorIndexs[s];
          if (e.utils.isNone(_t)) return null;
          if (o = o[_t].children, !o) return null;
        }
        return o[this.selectorIndexs[t]];
      },
      moveNextLevel: function moveNextLevel(e) {
        var t = this.getSelectorNode(e);
        null != t && (t.children ? this.bindViews(t.children) : this.getNextRegions(t));
      },
      onPopupToggle: function onPopupToggle(e) {
        this.visibled = !this.visibled;
      },
      onConfirm: function onConfirm(e) {
        if (this.selectorLevel + 1 > this.selectorIndexs.length) return void (this.errorTips = "*请将地区选择完整。");
        var t = [];
        for (var _o = 0; _o < this.selectorIndexs.length; _o++) {
          var _e = this.getSelectorNode(_o);
          t.push({
            category: _e.category,
            code: _e.code,
            name: _e.name
          });
        }
        this.selectorNodes = t, this.onPopupToggle(), this.$emit("update:modelValue", t), this.$emit("on-change", t);
      },
      onLabelChange: function onLabelChange(e) {
        if (this.loading) return;
        var t = e.index;
        this.labelIndex = t, t > 0 ? this.moveNextLevel(t - 1) : this.bindViews(this.__rawRegions);
      },
      onSelector: function onSelector(t) {
        this.errorTips = null;
        var o = this.labelIndex,
          s = e.utils.clone(this.labels);
        s[o] = this.regions[t], this.labels = s;
        var i = e.utils.clone(this.selectorIndexs);
        i.length <= o ? i.push(t) : i[o] = t, this.selectorIndexs = i, o >= this.selectorLevel || (this.selectorIndexs.splice(o + 1, 4), this.labels.splice(o + 1, 4), this.labels.push("请选择"), this.labelIndex = o + 1, this.moveNextLevel(o));
      }
    }
  };if (!Array) {
  (e.resolveComponent("iconfont") + e.resolveComponent("tui-loadmore") + e.resolveComponent("tui-drawer"))();
}Math || (function () {
  return "./iconfont.js";
} + function () {
  return "../thorui/tui-loadmore/tui-loadmore.js";
} + function () {
  return "../thorui/tui-drawer/tui-drawer.js";
})();var o = e._export_sfc(t, [["render", function (t, o, s, i, l, n) {
  return e.e({
    a: e.t(n.selectorPath || s.placeholder),
    b: n.selectorPath ? "" : 1,
    c: e.o(function () {
      return n.onPopupToggle && n.onPopupToggle.apply(n, arguments);
    }),
    d: s.errorMessage
  }, s.errorMessage ? {
    e: e.t(s.errorMessage)
  } : {}, {
    f: e.o(function () {
      return n.onPopupToggle && n.onPopupToggle.apply(n, arguments);
    }),
    g: e.o(function () {
      return n.onConfirm && n.onConfirm.apply(n, arguments);
    }),
    h: e.f(l.labels, function (t, o, s) {
      return e.e({
        a: o !== l.labelIndex
      }, o !== l.labelIndex ? {
        b: e.t(t),
        c: e.o(function (e) {
          return n.onLabelChange({
            index: o
          });
        }, o)
      } : {
        d: e.t(t),
        e: "691ca426-1-" + s + ",691ca426-0",
        f: e.p({
          name: "arrow-down-s"
        })
      }, {
        g: o
      });
    }),
    i: l.loading
  }, l.loading ? {
    j: e.p({
      index: 3,
      type: "primary",
      text: "加载中..."
    })
  } : {
    k: e.f(l.regions, function (t, o, s) {
      return e.e({
        a: o !== l.selectorIndexs[l.labelIndex]
      }, o !== l.selectorIndexs[l.labelIndex] ? {
        b: e.t(t),
        c: e.o(function (e) {
          return n.onSelector(o);
        }, o)
      } : {
        d: e.t(t)
      }, {
        e: o
      });
    })
  }, {
    l: l.errorTips
  }, l.errorTips ? {
    m: e.t(l.errorTips)
  } : {}, {
    n: e.o(n.onPopupToggle),
    o: e.p({
      visible: l.visibled,
      mode: "bottom"
    })
  });
}]]);wx.createComponent(o);