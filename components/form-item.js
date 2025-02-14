var e = require("../common/vendor.js"),
  o = {
    name: "formItem",
    options: {
      styleIsolation: "shared"
    },
    props: {
      label: {
        type: String,
        default: null
      },
      required: {
        type: Boolean,
        default: !1
      },
      tapEnabled: {
        type: Boolean,
        default: !1
      },
      unlined: {
        type: Boolean,
        default: !1
      },
      errorMessage: {
        type: String,
        default: null
      },
      helpMessage: {
        type: String,
        default: null
      }
    },
    data: function data() {
      return {};
    },
    methods: {
      onShowHelp: function onShowHelp() {
        e.index.showModal({
          content: this.helpMessage,
          showCancel: !1
        });
      }
    }
  };if (!Array) {
  e.resolveComponent("iconfont")();
}Math;var r = e._export_sfc(o, [["render", function (o, r, t, a, l, n) {
  return e.e({
    a: t.label
  }, t.label ? e.e({
    b: t.required
  }, (t.required, {}), {
    c: e.t(t.label),
    d: t.helpMessage
  }, t.helpMessage ? {
    e: e.o(n.onShowHelp),
    f: e.p({
      name: "help-circle",
      hover: !0
    })
  } : {}) : {}, {
    g: t.tapEnabled
  }, t.tapEnabled ? {
    h: e.p({
      name: "arrow-right"
    })
  } : {}, {
    i: t.errorMessage
  }, t.errorMessage ? {
    j: e.t(t.errorMessage)
  } : {}, {
    k: t.unlined ? 1 : ""
  });
}]]);wx.createComponent(r);