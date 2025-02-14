var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../../common/vendor.js"),
  t = require("../../../apis/sport/study-homework.js"),
  s = require("../mixture.js"),
  a = require("../../../common/assets.js"),
  o = {
    mixins: [e.AppUtils],
    data: function data() {
      return this.gradeMap = s.mixture.getScoreGradeMap(), {
        task: null,
        favoriteId: null
      };
    },
    methods: {
      loadTask: function loadTask(e) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var s;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return t.studyHomeworkApi.getTask({
                  params: {
                    taskId: e
                  },
                  options: {
                    loading: !0,
                    loadingText: "加载中..."
                  }
                });
              case 2:
                s = _context.sent;
                s.success && (_this.task = s.result);
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }
    },
    onLoad: function onLoad(e) {
      var t = e.id;
      this.favoriteId = e.favoriteId, t && this.loadTask(t);
    },
    onShareAppMessage: function onShareAppMessage() {
      return {
        title: "\u6211\u521A\u521A\u5728\u300C".concat(e.index.$appConfig.title, "\u300D\u5B8C\u6210\u4E86\u4E00\u9879\u4F53\u6D4B\u4F5C\u4E1A\uFF0C\u4F60\u4E5F\u6765\u8BD5\u8BD5\u5427\uFF01"),
        path: "/pages/study-homework/homework/index"
      };
    }
  };if (!Array) {
  e.resolveComponent("tui-button")();
}Math;var r = e._export_sfc(o, [["render", function (t, s, o, r, i, d) {
  return e.e({
    a: a._imports_0$1,
    b: a._imports_0$1,
    c: a._imports_0$1,
    d: i.task
  }, i.task ? e.e({
    e: 10 == i.task.tickMode
  }, (i.task.tickMode, {}), {
    f: e.t(10 == i.task.tickMode ? "用时" : "运动时长"),
    g: e.t(t.gradeMap.getText(i.task.grade))
  }) : {}, {
    h: e.p({
      "open-type": "share",
      type: "warning",
      height: "86rpx",
      shape: "circle",
      shadow: !0
    }),
    i: "/pages/study-homework/homework/detail?id=" + i.favoriteId
  });
}]]);o.__runtimeHooks = 2, wx.createPage(r);