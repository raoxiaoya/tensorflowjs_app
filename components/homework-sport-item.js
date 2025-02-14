var t = require("../pages/fitness/mixture.js"),
  e = require("../common/vendor.js"),
  o = {
    name: "homeworkSportItem",
    options: {
      styleIsolation: "shared"
    },
    props: {
      sportItem: {
        type: Object,
        required: !0
      },
      disabled: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["on-doing"],
    data: function data() {
      return {};
    },
    methods: {
      formatSeconds: t.fitnessMixture.formatSeconds,
      onDoing: function onDoing() {
        this.$emit("on-doing", this.sportItem);
      }
    }
  };if (!Array) {
  e.resolveComponent("tui-button")();
}Math;var s = e._export_sfc(o, [["render", function (t, o, s, r, n, p) {
  return e.e({
    a: s.sportItem.sport.coverUrl,
    b: e.t(s.sportItem.sport.name),
    c: 20 == s.sportItem.sport.tickMode
  }, 20 == s.sportItem.sport.tickMode ? {
    d: e.t(p.formatSeconds(s.sportItem.workloads))
  } : {
    e: e.t(s.sportItem.workloads)
  }, {
    f: s.sportItem.pass
  }, s.sportItem.pass ? {
    g: e.t(s.sportItem.pass)
  } : {}, {
    h: s.sportItem.excellent
  }, s.sportItem.excellent ? {
    i: e.t(s.sportItem.excellent)
  } : {}, {
    j: e.o(p.onDoing),
    k: e.p({
      type: "primary",
      btnSize: "mini",
      disabled: s.disabled,
      plain: !0
    })
  });
}]]);wx.createComponent(s);