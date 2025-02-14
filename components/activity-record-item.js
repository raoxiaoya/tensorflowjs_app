var e = require("../pages/fitness/mixture.js"),
  r = require("../common/vendor.js"),
  t = {
    name: "activityRecordItem",
    mixins: [r.AppUtils],
    options: {
      styleIsolation: "shared"
    },
    props: {
      record: {
        type: Object,
        required: !0
      }
    },
    data: function data() {
      return {};
    },
    computed: {
      coverThumbnail: function coverThumbnail() {
        var e = this.record.activity;
        if (!e) return;
        var r = e.coverUrl;
        return r = r ? this.$utils.thumbnailUrl(r, 200, 200) : "/static/logo_gray.png", r;
      }
    },
    methods: {
      formatSeconds: e.fitnessMixture.formatSeconds
    }
  };var o = r._export_sfc(t, [["render", function (e, t, o, c, i, d) {
  return r.e({
    a: r.t(o.record.activity.title),
    b: d.coverThumbnail,
    c: r.t(o.record.id),
    d: o.record.team || o.record.name
  }, o.record.team || o.record.name ? {
    e: r.t(o.record.team),
    f: r.t(o.record.name)
  } : {}, {
    g: r.t(o.record.sport.name),
    h: r.t(e.$filters.formatDate(o.record.atTime, "yyyy-MM-dd HH:mm:ss")),
    i: 10 == o.record.tickMode
  }, 10 == o.record.tickMode ? {
    j: r.t(o.record.counts)
  } : {}, {
    k: r.t(d.formatSeconds(o.record.times))
  });
}]]);wx.createComponent(o);