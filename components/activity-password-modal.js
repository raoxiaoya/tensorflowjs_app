var e = require("../common/vendor.js"),
  s = {
    name: "activityPasswordModal",
    options: {
      styleIsolation: "shared"
    },
    props: {
      modelValue: {
        type: Boolean,
        default: !1
      },
      activity: {
        type: Object,
        default: null
      }
    },
    emits: ["update:modelValue", "on-pass"],
    watch: {
      modelValue: {
        handler: function handler(e) {
          this.visibled = e;
        },
        immediate: !0
      },
      activity: {
        handler: function handler(e) {
          this.activity && !this.activity.isPublic ? this.visibled = !0 : this.visibled = !1, this.$emit("update:modelValue", this.visibled);
        },
        immediate: !0
      }
    },
    data: function data() {
      return {
        visibled: !1,
        isMask: !0,
        password: null,
        message: null
      };
    },
    methods: {
      onToggleMask: function onToggleMask(e) {
        this.isMask = e;
      },
      onConfirm: function onConfirm() {
        this.password ? this.activity.password == this.password ? (this.visibled = !1, this.$emit("on-pass"), this.$emit("update:modelValue", this.visibled)) : this.message = "参赛口令不准确" : this.message = "口令不能为空，请重新输入";
      },
      onClose: function onClose() {
        this.visibled = !1, this.plain = null, this.message = null, this.$emit("update:modelValue", this.visibled);
      },
      show: function show() {
        this.visibled = !0, this.$emit("update:modelValue", this.visibled);
      },
      hide: function hide() {
        this.visibled = !1, this.plain = null, this.$emit("update:modelValue", this.visibled);
      }
    }
  };if (!Array) {
  (e.resolveComponent("iconfont") + e.resolveComponent("tui-button") + e.resolveComponent("tui-modal"))();
}Math || (function () {
  return "../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../node-modules/yunzhi.uni-app/thorui/tui-button/tui-button.js";
} + function () {
  return "../node-modules/yunzhi.uni-app/thorui/tui-modal/tui-modal.js";
})();var i = e._export_sfc(s, [["render", function (s, i, t, o, a, l) {
  return e.e({
    a: a.isMask,
    b: a.password,
    c: e.o(function (e) {
      return a.password = e.detail.value;
    }),
    d: a.isMask
  }, a.isMask ? {
    e: e.o(function (e) {
      return l.onToggleMask(!1);
    }),
    f: e.p({
      name: "eye",
      size: "24px"
    })
  } : {
    g: e.o(function (e) {
      return l.onToggleMask(!0);
    }),
    h: e.p({
      name: "eye-hidden",
      size: "24px"
    })
  }, {
    i: a.message
  }, a.message ? {
    j: e.t(a.message)
  } : {}, {
    k: e.o(l.onConfirm),
    l: e.p({
      height: "72rpx",
      size: 28,
      shape: "circle"
    }),
    m: e.o(l.onClose),
    n: e.p({
      show: a.visibled,
      custom: !0,
      fadeIn: !0,
      "mask-closable": !1
    })
  });
}]]);wx.createComponent(i);