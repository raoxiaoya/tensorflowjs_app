var _regeneratorRuntime2 = require("../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../@babel/runtime/helpers/asyncToGenerator");require("../@babel/runtime/helpers/Arrayincludes");var e = require("../apis/sport/setting.js"),
  t = require("../common/vendor.js"),
  s = {
    name: "sportSelector",
    options: {
      styleIsolation: "shared"
    },
    props: {
      modelValue: {
        type: [Array, String, null],
        default: null,
        validator: function validator(e, t) {
          return "single" == t.mode && Array.isArray(e) ? (console.error("单选模式时，不能绑定数组值。"), !1) : !("mulit" == t.mode && !Array.isArray(e)) || (console.error("多选模式，必须绑定数组值。"), !1);
        }
      },
      type: {
        type: String,
        default: "scroll",
        required: !0,
        validator: function validator(e) {
          return ["list", "scroll"].includes(e);
        }
      },
      mode: {
        typ: String,
        require: !0,
        default: "single",
        validator: function validator(e) {
          return ["single", "multi"].includes(e);
        }
      }
    },
    emits: ["update:modelValue", "on-change", "on-select"],
    watch: {
      modelValue: function modelValue(e) {
        this.selections = e;
      }
    },
    data: function data() {
      return {
        sports: [],
        selections: this.modelValue
      };
    },
    mounted: function mounted() {
      var _this = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
        var t;
        return _regeneratorRuntime2().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return e.settingApi.getSports();
            case 2:
              t = _context.sent;
              t.success && (_this.sports = t.result.filter(function (e) {
                return e.enabled;
              }));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    methods: {
      getSelections: function getSelections() {
        var _this2 = this;
        if (!Array.isArray(this.selections)) return this.sports.find(function (e) {
          return e.key == _this2.selections;
        });
        var e = this.sports;
        return this.selections.map(function (t) {
          return e.find(function (e) {
            return e.key == t;
          });
        });
      },
      isSelected: function isSelected(e) {
        return !!this.selections && (Array.isArray(this.selections) ? this.selections.includes(e) : this.selections == e);
      },
      setChecked: function setChecked(e, t) {
        if ("single" == this.mode) this.selections = e ? t : null;else if ("multi" == this.mode) {
          this.selections || (this.selections = []);
          var _s = this.selections.findIndex(function (e) {
            return e == t;
          });
          e && -1 == _s ? this.selections.push(t) : e || -1 == _s || this.selections.splice(_s, 1);
        }
        if (this.$emit("update:modelValue", this.selections), this.$emit("on-change"), e) {
          var _e = this.sports.find(function (e) {
            return e.key == t;
          });
          this.$emit("on-select", _e);
        }
      },
      onToggleSelect: function onToggleSelect(e) {
        console.log(e);
        var t = !this.isSelected(e);
        this.setChecked(t, e);
      },
      onSelect: function onSelect(e) {
        e.value, this.setChecked(e.checked, e.value);
      }
    }
  };if (!Array) {
  t.resolveComponent("tui-checkbox")();
}Math;var i = t._export_sfc(s, [["render", function (e, s, i, l, o, r) {
  return t.e({
    a: "scroll" == i.type
  }, "scroll" == i.type ? {
    b: t.f(o.sports, function (e, s, i) {
      return {
        a: t.t(e.name),
        b: e.coverUrl,
        c: t.o(r.onSelect, e.key),
        d: "29ece9cd-0-" + i,
        e: t.p({
          value: e.key,
          checked: r.isSelected(e.key)
        }),
        f: e.key,
        g: t.o(function (t) {
          return r.onToggleSelect(e.key);
        }, e.key)
      };
    })
  } : {
    c: t.f(o.sports, function (e, s, i) {
      return {
        a: t.t(e.name),
        b: e.coverUrl,
        c: t.o(r.onSelect, e.key),
        d: "29ece9cd-1-" + i,
        e: t.p({
          value: e.key,
          checked: r.isSelected(e.key)
        }),
        f: e.key,
        g: s % 2 == 0 ? 1 : "",
        h: t.o(function (t) {
          return r.onToggleSelect(e.key);
        }, e.key)
      };
    })
  });
}]]);wx.createComponent(i);