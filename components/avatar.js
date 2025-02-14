var t = require("../common/vendor.js"),
  e = require("../common/assets.js"),
  n = {
    name: "avatar",
    options: {
      styleIsolation: "shared"
    },
    props: {
      avatarUrl: {
        type: String,
        default: null
      },
      round: {
        typeof: Boolean,
        default: !0
      },
      editing: {
        typeof: Boolean,
        default: !1
      }
    },
    data: function data() {
      return {};
    },
    methods: {
      onEditing: function onEditing() {
        this.$emit("on-editing");
      }
    }
  };if (!Array) {
  t.resolveComponent("iconfont")();
}Math;var o = t._export_sfc(n, [["render", function (n, o, a, r, i, s) {
  return t.e({
    a: !a.avatarUrl
  }, a.avatarUrl ? {
    c: a.avatarUrl
  } : {
    b: e._imports_0$5
  }, {
    d: a.round ? 1 : "",
    e: a.editing
  }, a.editing ? {
    f: t.p({
      name: "camera"
    }),
    g: t.o(function () {
      return s.onEditing && s.onEditing.apply(s, arguments);
    })
  } : {});
}]]);wx.createComponent(o);