var t = require("../common/vendor.js"),
  e = require("../pages/fitness/mixture.js"),
  r = require("../pages/study-homework/mixture.js"),
  a = {
    name: "homeworkTaskItem",
    options: {
      styleIsolation: "shared"
    },
    props: {
      task: {
        type: Object,
        required: !0
      }
    },
    data: function data() {
      return this.gradeMap = r.mixture.getScoreGradeMap(), {};
    },
    computed: {
      sport: function sport() {
        return this.task.sport;
      },
      atTime: function atTime() {
        var e = t.utils.formatDate(this.task.postedTime, "yyyy-MM-dd"),
          r = t.utils.formatDate(new Date(), "yyyy-MM-dd"),
          a = t.utils.formatDate(new Date().addDays(-1), "yyyy-MM-dd");
        return e == r ? e = "今日" : e == a && (e = "昨日"), e += t.utils.formatDate(this.task.postedTime, " HH:mm:ss"), e;
      }
    },
    methods: {
      formatSeconds: e.fitnessMixture.formatSeconds,
      gradeMap: r.mixture.getScoreGradeMap
    }
  };if (!Array) {
  t.resolveComponent("tag")();
}Math;var s = t._export_sfc(a, [["render", function (e, r, a, s, o, d) {
  return {
    a: d.sport.coverUrl,
    b: t.t(a.task.studentName),
    c: t.t(d.sport.name),
    d: t.t(d.atTime),
    e: t.t(a.task.counts),
    f: t.t(d.formatSeconds(a.task.times)),
    g: t.t(d.gradeMap.getText(a.task.grade)),
    h: d.gradeMap.getColor(a.task.grade)
  };
}]]);wx.createComponent(s);