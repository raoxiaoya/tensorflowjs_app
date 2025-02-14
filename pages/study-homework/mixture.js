var e = require("../../common/vendor.js");var t = {
  getHomeworkCategoryMap: function getHomeworkCategoryMap() {
    return new e.EnumerationMap([{
      value: 10,
      text: "测验作业",
      color: "#FF5500"
    }, {
      value: 20,
      text: "打卡作业",
      color: "#AA55FF"
    }]);
  },
  getHomeworkStatusMap: function getHomeworkStatusMap() {
    return new e.EnumerationMap([{
      value: !0,
      text: "进行中",
      color: "#06A34F"
    }, {
      value: !1,
      text: "已结束",
      color: "#EE3B3B"
    }]);
  },
  getScoreGradeMap: function getScoreGradeMap() {
    return new e.EnumerationMap([{
      value: -10,
      text: "不合格",
      color: "#A07D12"
    }, {
      value: 10,
      text: "合格",
      color: "#219A3D"
    }, {
      value: 20,
      text: "良好",
      color: "#1267B7"
    }, {
      value: 30,
      text: "优秀",
      color: "#BC1566"
    }]);
  }
};exports.mixture = t;