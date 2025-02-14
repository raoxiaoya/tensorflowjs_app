var n = require("../../common/vendor.js"),
  t = new n.ApiRequest("sport/api/fitness");var e = {
  get: function get(n) {
    return t.get(n);
  },
  clockin: function clockin(e) {
    return e = e || {}, e = n.utils.clone(e, {
      method: "POST",
      path: "/clockin"
    }), t.send(e);
  },
  syncing: function syncing(e) {
    return e = e || {}, e = n.utils.clone(e, {
      method: "POST",
      path: "/syncing"
    }), t.send(e);
  },
  statGroupBySport: function statGroupBySport(e) {
    return e = e || {}, e = n.utils.clone(e, {
      method: "GET",
      path: "/stat-group-sport",
      options: {
        caching: !0,
        cachingMaxAge: 300
      }
    }), t.send(e);
  },
  getRankings: function getRankings(e) {
    e = e || {};
    var s = t.getParam(e, "isUser", !1, !0);
    return e = n.utils.clone(e, {
      method: "GET",
      path: "/rankings",
      options: {
        caching: !1,
        cachingMaxAge: 60,
        through: !s
      }
    }), t.send(e);
  }
};exports.fitnessApi = e;