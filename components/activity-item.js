var t = require("../common/vendor.js"),
  e = require("../pages/activity/mixture.js"),
  i = {
    name: "activityItem",
    options: {
      styleIsolation: "shared"
    },
    props: {
      activity: {
        type: Object,
        required: !0
      }
    },
    data: function data() {
      return this.statusMap = e.mixture.getStatusMap(), this.categoryMap = e.mixture.getCategoryMap(), {};
    },
    computed: {
      coverThumbnail: function coverThumbnail() {
        if (!this.activity) return;
        var t = this.activity.coverUrl;
        return t = t ? this.$utils.thumbnailUrl(t, 200, 200) : "/static/logo_gray.png", t;
      },
      remainDays: function remainDays() {
        if (!this.activity) return 0;
        var t = new Date(this.activity.endTime) - new Date();
        return t = t / 1e3 / 60 / 60 / 24, t = Math.ceil(t), t = Math.max(t, 0), t;
      }
    },
    mixins: [t.AppUtils],
    methods: {}
  };if (!Array) {
  (t.resolveComponent("tag") + t.resolveComponent("iconfont"))();
}Math || (function () {
  return "../node-modules/yunzhi.uni-app/components/tag.js";
} + function () {
  return "../node-modules/yunzhi.uni-app/components/iconfont.js";
})();var a = t._export_sfc(i, [["render", function (e, i, a, r, o, c) {
  return t.e({
    a: c.coverThumbnail,
    b: t.t(e.statusMap.getText(a.activity.status)),
    c: t.p({
      color: e.statusMap.getColor(a.activity.status),
      shape: "right-circle"
    }),
    d: t.t(a.activity.title),
    e: t.t(a.activity.organizer),
    f: t.p({
      color: "#626293",
      plain: !0
    }),
    g: a.activity.isPublic
  }, a.activity.isPublic ? {
    h: t.p({
      color: "#0090d8",
      shape: "circle",
      plain: !0
    })
  } : {
    i: t.p({
      color: "#adad82",
      shape: "circle",
      plain: !0
    })
  }, {
    j: t.t(e.categoryMap.getText(a.activity.category)),
    k: t.p({
      color: e.categoryMap.getColor(a.activity.category),
      shape: "circle",
      plain: !0
    }),
    l: a.activity.isTeam
  }, a.activity.isTeam ? {
    m: t.p({
      color: "#be7e5e",
      shape: "circle",
      plain: !0
    })
  } : {}, {
    n: t.p({
      name: "times"
    }),
    o: t.t(c.remainDays),
    p: t.p({
      name: "user-team-o"
    }),
    q: t.t(a.activity.peoples),
    r: t.t(e.$filters.formatDate(a.activity.createdTime, "yyyy-MM-dd"))
  });
}]]);wx.createComponent(a);