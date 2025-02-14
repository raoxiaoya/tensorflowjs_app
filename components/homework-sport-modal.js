var e = require("../common/vendor.js"),
  l = {
    name: "homeworkSportModal",
    options: {
      styleIsolation: "shared"
    },
    props: {
      modelValue: {
        type: Object,
        default: null
      },
      visibled: {
        type: Boolean,
        default: !1
      },
      editMode: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["update:modelValue", "update:visibled", "on-change"],
    watch: {
      modelValue: function modelValue(e) {
        this.model = e || {
          key: null,
          sport: null,
          workloads: null,
          pass: null,
          excellent: null
        };
      },
      visibled: function visibled(e) {
        this.modalVisibled = e;
      }
    },
    data: function data() {
      var e = /^[1-9]\d*$/;
      return {
        modalVisibled: this.visibled,
        model: this.modelValue || {
          key: null,
          sport: null,
          workloads: null,
          pass: null,
          excellent: null
        },
        rules: {
          key: {
            required: !0,
            requiredMessage: "请选择运动项目",
            error: null
          },
          workloads: {
            required: !0,
            requiredMessage: "请输入作业量，计次：个；计时：秒",
            error: null
          },
          pass: {
            required: !1,
            pattern: e,
            patternMessage: "请输入一个大于0的整数"
          },
          excellent: {
            required: !1,
            pattern: e,
            patternMessage: "请输入一个大于0的整数"
          }
        }
      };
    },
    methods: {
      onCancel: function onCancel() {
        this.$emit("close", {}), this.model = {
          key: null,
          sport: null,
          workloads: null,
          pass: null,
          excellent: null
        }, this.rules.key.error = null, this.rules.workloads.error = null, this.rules.pass.error = null, this.rules.excellent.error = null, this.modalVisibled = !1, this.$emit("update:visibled", !1);
      },
      onSelectSport: function onSelectSport(e) {
        this.model.sport = e;
      },
      onConfirm: function onConfirm() {
        if (!new e.Validator(this.rules, this.model).validate()) return;
        var l = e.utils.clone(this.model);
        this.$emit("update:modelValue", l), this.$emit("on-change", l), this.onCancel();
      }
    }
  };if (!Array) {
  (e.resolveComponent("sport-selector") + e.resolveComponent("form-item") + e.resolveComponent("tui-button") + e.resolveComponent("tui-modal"))();
}Math || (function () {
  return "./sport-selector.js";
} + function () {
  return "./form-item.js";
} + function () {
  return "../node-modules/yunzhi.uni-app/thorui/tui-button/tui-button.js";
} + function () {
  return "../node-modules/yunzhi.uni-app/thorui/tui-modal/tui-modal.js";
})();var o = e._export_sfc(l, [["render", function (l, o, r, s, t, i) {
  return {
    a: e.t(r.editMode ? "编辑运动项目" : "添加运动项目"),
    b: e.o(i.onSelectSport),
    c: e.o(function (e) {
      return t.model.key = e;
    }),
    d: e.p({
      type: "scroll",
      mode: "single",
      modelValue: t.model.key
    }),
    e: e.p({
      label: "运动",
      "error-message": t.rules.key.error,
      required: !0
    }),
    f: t.model.workloads,
    g: e.o(function (e) {
      return t.model.workloads = e.detail.value;
    }),
    h: e.p({
      label: "任务量",
      "error-message": t.rules.workloads.error,
      required: !0
    }),
    i: t.model.pass,
    j: e.o(function (e) {
      return t.model.pass = e.detail.value;
    }),
    k: e.p({
      label: "达标数",
      "error-message": t.rules.pass.error
    }),
    l: t.model.excellent,
    m: e.o(function (e) {
      return t.model.excellent = e.detail.value;
    }),
    n: e.p({
      label: "优秀数",
      "error-message": t.rules.excellent.error
    }),
    o: e.o(i.onConfirm),
    p: e.p({
      height: "72rpx",
      size: 28,
      type: "primary",
      shape: "circle"
    }),
    q: e.o(i.onCancel),
    r: e.p({
      height: "72rpx",
      size: 28,
      type: "gray",
      shape: "circle"
    }),
    s: e.p({
      padding: "32rpx",
      show: t.modalVisibled,
      custom: !0
    })
  };
}]]);wx.createComponent(o);