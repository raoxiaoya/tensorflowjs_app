var e = require("../../common/vendor.js"),
  t = new e.ApiRequest("sport/api/teaching-homework");var o = {
  get: function get(o) {
    return o = o || {}, o = e.utils.clone(o, {
      options: {
        caching: !0
      }
    }), t.get(o);
  },
  create: function create(e) {
    return t.post(e);
  },
  edit: function edit(e) {
    return t.put(e);
  },
  delete: function _delete(e) {
    return t.delete(e);
  },
  search: function search(o) {
    return o = o || {}, o = e.utils.clone(o, {
      method: "GET",
      path: "/search",
      options: {
        caching: !0
      }
    }), t.send(o);
  },
  getFavorites: function getFavorites(o) {
    o = o || {};
    var n = t.getParam(o, "homeworkId", !0);
    return o = e.utils.clone(o, {
      method: "GET",
      path: "/favorites/".concat(n),
      options: {
        caching: !0
      }
    }), t.send(o);
  },
  cancelFavorite: function cancelFavorite(o) {
    o = o || {};
    var n = t.getParam(o, "favoriteId", !0);
    return o = e.utils.clone(o, {
      method: "DELETE",
      path: "/cancel-favorite/".concat(n)
    }), t.send(o);
  },
  getTasks: function getTasks(o) {
    o = o || {};
    var n = t.getParam(o, "homeworkId", !0);
    return o = e.utils.clone(o, {
      method: "GET",
      path: "/tasks/".concat(n)
    }), t.send(o);
  },
  toggleIssued: function toggleIssued(o) {
    o = o || {};
    var n = t.getParam(o, "id", !0);
    return o = e.utils.clone(o, {
      method: "PUT",
      path: "/toggle-issued/".concat(n)
    }), t.send(o);
  }
};exports.teachHomewordApi = o;