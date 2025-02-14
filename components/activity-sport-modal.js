var e = require("../common/vendor.js"),
  i = {
    name: "activitySportModal",
    options: {
      styleIsolation: "shared"
    },
    props: {
      activityCategory: {
        type: Number,
        default: 10
      },
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
          isTimer: !1,
          times: null,
          preDayTicks: null
        };
      },
      visibled: function visibled(e) {
        this.modalVisibled = e;
      }
    },
    data: function data() {
      var i = this;
      return {
        theme: e.index.$theme,
        modalVisibled: this.visibled,
        model: this.modelValue || {
          key: null,
          sport: null,
          isTimer: !1,
          times: null,
          preDayTicks: null
        },
        rules: {
          key: {
            required: !0,
            requiredMessage: "请选择运动项目",
            error: null
          },
          preDayTicks: {
            fn: function fn(t, r) {
              if (10 == i.activityCategory) return e.utils.isNone(t) ? "请输入限制打卡次数" : 0 == /^\d+$/.test(t) ? "打卡次数输入错误，只允许输入正整数" : void 0;
            },
            error: null
          },
          times: {
            fn: function fn(i, t) {
              if (t.entity.isTimer) return e.utils.isNone(i) ? "请输入限时时长" : 0 == /^[1-9]\d*$/.test(i) ? "时长输入错误，只允许输入>0的正整数" : void 0;
            },
            error: null
          }
        }
      };
    },
    methods: {
      onCancel: function onCancel() {
        this.model = {
          key: null,
          sport: null,
          isTimer: !1,
          times: null,
          preDayTicks: null
        }, this.rules.key.error = null, this.rules.preDayTicks.error = null, this.rules.times.error = null, this.modalVisibled = !1, this.$emit("update:visibled", !1);
      },
      onSelectSport: function onSelectSport(e) {
        this.model.sport = e;
      },
      onIsTimerChange: function onIsTimerChange(e) {
        this.model.isTimer = "true" == e.detail.value;
      },
      onConfirm: function onConfirm() {
        if (!new e.Validator(this.rules, this.model).validate()) return;
        var i = e.utils.clone(this.model);
        0 == i.isTimer ? delete i.times : i.times = parseInt(i.times), 10 == this.activityCategory ? i.preDayTicks = parseInt(i.preDayTicks) : delete i.preDayTicks, this.$emit("update:modelValue", i), this.$emit("on-change", i), this.onCancel();
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
})();var t = e._export_sfc(i, [["render", function (i, t, r, l, o, s) {
  return e.e({
    a: e.t(r.editMode ? "编辑运动项目" : "添加运动项目"),
    b: e.o(s.onSelectSport),
    c: e.o(function (e) {
      return o.model.key = e;
    }),
    d: e.p({
      type: "scroll",
      mode: "single",
      modelValue: o.model.key
    }),
    e: e.p({
      label: "运动",
      "error-message": o.rules.key.error,
      required: !0
    }),
    f: 10 == r.activityCategory
  }, 10 == r.activityCategory ? {
    g: o.model.preDayTicks,
    h: e.o(function (e) {
      return o.model.preDayTicks = e.detail.value;
    }),
    i: e.p({
      label: "日打卡次数",
      "error-message": o.rules.preDayTicks.error,
      required: !0
    })
  } : {}, {
    j: !1 === o.model.isTimer,
    k: o.theme.colorPrimary,
    l: !0 === o.model.isTimer,
    m: o.theme.colorPrimary,
    n: e.o(function () {
      return s.onIsTimerChange && s.onIsTimerChange.apply(s, arguments);
    }),
    o: e.p({
      label: "是否限时",
      required: !0
    }),
    p: o.model.isTimer
  }, o.model.isTimer ? {
    q: o.model.times,
    r: e.o(function (e) {
      return o.model.times = e.detail.value;
    }),
    s: e.p({
      label: "时长",
      "error-message": o.rules.times.error,
      required: !0
    })
  } : {}, {
    t: e.o(s.onConfirm),
    v: e.p({
      height: "72rpx",
      size: 28,
      type: "primary",
      shape: "circle"
    }),
    w: e.o(s.onCancel),
    x: e.p({
      height: "72rpx",
      size: 28,
      type: "gray",
      shape: "circle"
    }),
    y: e.p({
      show: o.modalVisibled,
      custom: !0
    })
  });
}]]);wx.createComponent(t);