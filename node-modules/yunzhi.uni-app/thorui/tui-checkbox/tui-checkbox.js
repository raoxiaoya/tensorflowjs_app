var e = require("../../../../common/vendor.js"),
  t = {
    name: "tui-checkbox",
    emits: ["change"],
    options: {
      virtualHost: !0
    },
    props: {
      value: {
        type: String,
        default: ""
      },
      checked: {
        type: Boolean,
        default: !1
      },
      triggerGroup: {
        type: Boolean,
        default: !0
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      color: {
        type: String,
        default: ""
      },
      borderColor: {
        type: String,
        default: "#ccc"
      },
      isCheckMark: {
        type: Boolean,
        default: !1
      },
      checkMarkColor: {
        type: String,
        default: "#fff"
      },
      scaleRatio: {
        type: [Number, String],
        default: 1
      }
    },
    beforeUnmount: function beforeUnmount() {
      this.unInstall();
    },
    created: function created() {
      this.val = this.checked, this.group = this.getParent(), this.group && (this.group.childrens.push(this), this.group.value && this.group.value.length > 0 && (this.val = this.group.value.includes(this.value)), this.group.modelValue && this.group.modelValue.length > 0 && (this.val = this.group.modelValue.includes(this.value)), console.log(this.group.childrens.length)), this.label = this.getParent("tui-label"), this.label && this.label.childrens.push(this);
    },
    watch: {
      checked: function checked(e) {
        this.val = e;
      },
      val: function val(e) {
        this.triggerGroup && this.group && this.group.changeValue(this.val, this);
      }
    },
    data: function data() {
      return {
        val: !1,
        nvue: !1
      };
    },
    methods: {
      getBackgroundStyle: function getBackgroundStyle(t, i) {
        var l = e.index && e.index.$tui && e.index.$tui.color.primary || "#5677fc";
        var a = t ? this.color || l : "#fff";
        return i && (a = "transparent"), a;
      },
      getBorderStyle: function getBorderStyle(t, i) {
        var l = e.index && e.index.$tui && e.index.$tui.color.primary || "#5677fc";
        var a = t ? this.color || l : this.borderColor;
        return i && (a = "transparent"), "1px solid ".concat(a);
      },
      checkboxChange: function checkboxChange(e) {
        this.disabled || (this.val = !this.val, !this.triggerGroup && this.group && this.group.changeValue(this.val, this), this.$emit("change", {
          checked: this.val,
          value: this.value
        }));
      },
      getParent: function getParent() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "tui-checkbox-group";
        var t = this.$parent,
          i = t.$options.name;
        for (; i !== e;) {
          if (t = t.$parent, !t) return !1;
          i = t.$options.name;
        }
        return t;
      },
      labelClick: function labelClick() {
        this.checkboxChange();
      },
      unInstall: function unInstall() {
        var _this = this;
        this.group && this.group.childrens.forEach(function (e, t) {
          e === _this && _this.group.childrens.splice(t, 1);
        });
      }
    }
  };var i = e._export_sfc(t, [["render", function (t, i, l, a, r, o) {
  return e.e({
    a: r.val
  }, r.val ? {
    b: l.checkMarkColor,
    c: l.checkMarkColor
  } : {}, {
    d: l.color,
    e: l.disabled,
    f: l.value,
    g: r.val,
    h: l.disabled ? 1 : "",
    i: o.getBackgroundStyle(r.val, l.isCheckMark),
    j: o.getBorderStyle(r.val, l.isCheckMark),
    k: r.nvue ? 1 : l.scaleRatio,
    l: "scale(".concat(r.nvue ? l.scaleRatio : 1, ")"),
    m: e.o(function () {
      return o.checkboxChange && o.checkboxChange.apply(o, arguments);
    })
  });
}], ["__scopeId", "data-v-9b71dea1"]]);wx.createComponent(i);