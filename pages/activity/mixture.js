var e = require("../../common/vendor.js");var t = {
  getStatusMap: function getStatusMap() {
    return new e.EnumerationMap([{
      value: -10,
      text: "未上线",
      color: "#CCCCCC"
    }, {
      value: 0,
      text: "进行中",
      color: "#019d33"
    }, {
      value: 10,
      text: "未开始",
      color: "#a801a8"
    }, {
      value: 20,
      text: "已结束",
      color: "#e00505"
    }]);
  },
  getCategoryMap: function getCategoryMap() {
    return new e.EnumerationMap([{
      value: 10,
      text: "打卡活动",
      color: "#e64c73"
    }, {
      value: 20,
      text: "竞赛活动",
      color: "#e19600"
    }]);
  }
};exports.mixture = t;