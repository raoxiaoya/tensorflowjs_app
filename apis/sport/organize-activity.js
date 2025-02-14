var t = require("../../common/vendor.js"),
  n = new t.ApiRequest("sport/api/organize-activity");var i = {
  get: function get(i) {
    return i = i || {}, i = t.utils.clone(i, {
      options: {
        through: !0,
        caching: !0
      }
    }), n.get(i);
  },
  search: function search(i) {
    return i = i || {}, i = t.utils.clone(i, {
      method: "GET",
      path: "/search",
      options: {
        through: !0,
        caching: !0
      }
    }), n.send(i);
  },
  clockin: function clockin(i) {
    return i = i || {}, i = t.utils.clone(i, {
      method: "POST",
      path: "/clockin"
    }), n.send(i);
  },
  participating: function participating(i) {
    return i = i || {}, i = t.utils.clone(i, {
      method: "POST",
      path: "/participating"
    }), n.send(i);
  },
  getUserRankingNumber: function getUserRankingNumber(i) {
    i = i || {};
    var e = n.getParam(i, "category", !0),
      r = n.getParam(i, "activityId", !0);
    return i = t.utils.clone(i, {
      method: "GET",
      path: "/user-ranking-number/".concat(e, "/").concat(r),
      options: {
        caching: !0
      }
    }), n.send(i);
  },
  getUserRankings: function getUserRankings(i) {
    i = i || {};
    var e = n.getParam(i, "activityId", !0);
    return i = t.utils.clone(i, {
      method: "GET",
      path: "/user-rankings/".concat(e),
      options: {
        caching: !0
      }
    }), n.send(i);
  },
  getTeamRankings: function getTeamRankings(i) {
    i = i || {};
    var e = n.getParam(i, "activityId", !0);
    return i = t.utils.clone(i, {
      method: "GET",
      path: "/team-rankings/".concat(e),
      options: {
        caching: !0
      }
    }), n.send(i);
  },
  getSignin: function getSignin(n) {
    if (t.utils.isNone(n)) throw new Error("activityId不能为空。");
    return t.index.getStorageSync("activity_signin__".concat(n));
  },
  setSignin: function setSignin(n, i) {
    if (t.utils.isNone(n)) throw new Error("activityId不能为空。");
    if (!i) throw new Error("签名信息不能为空");
    t.index.setStorageSync("activity_signin__".concat(n), i);
  }
};exports.organizegApi = i;