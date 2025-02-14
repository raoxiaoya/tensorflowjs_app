var t = require("../pages/fitness/mixture.js"),
  e = require("../common/vendor.js"),
  o = {
    name: "activitySportItem",
    options: {
      styleIsolation: "shared"
    },
    props: {
      sportItem: {
        type: Object,
        required: !0
      },
      activity: {
        type: Object,
        required: !0
      }
    },
    emits: ["on-joining"],
    data: function data() {
      return {};
    },
    methods: {
      formatSeconds: t.fitnessMixture.formatSeconds,
      onJoining: function onJoining() {
        this.$emit("on-joining", this.sportItem);
      }
    }
  };if (!Array) {
  e.resolveComponent("tui-button")();
}Math;var r = e._export_sfc(o, [["render", function (t, o, r, i, s, n) {
  return e.e({
    a: r.sportItem.sport.coverUrl,
    b: e.t(r.sportItem.sport.name),
    c: r.sportItem.isTimer
  }, r.sportItem.isTimer ? {
    d: e.t(n.formatSeconds(r.sportItem.times))
  } : {}, {
    e: 10 == r.activity.category && r.sportItem.preDayTicks
  }, 10 == r.activity.category && r.sportItem.preDayTicks ? {
    f: e.t(r.sportItem.preDayTicks)
  } : {}, {
    g: e.t(20 == r.activity.category ? "参赛" : "打卡"),
    h: e.o(n.onJoining),
    i: e.p({
      type: "primary",
      btnSize: "mini",
      plain: !0
    })
  });
}]]);wx.createComponent(r);