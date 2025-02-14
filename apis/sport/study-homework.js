var t = require("../../common/vendor.js"),
  e = new t.ApiRequest("sport/api/study-homework");var n = {
  get: function get(n) {
    return n = n || {}, n = t.utils.clone(n, {
      options: {
        caching: !0
      }
    }), e.get(n);
  },
  getByCode: function getByCode(n) {
    n = n || {};
    var o = e.getParam(n, "code", !0);
    return n = t.utils.clone(n, {
      method: "GET",
      path: "/by-code/".concat(o),
      options: {
        caching: !0
      }
    }), e.send(n);
  },
  getStudentList: function getStudentList(n) {
    return n = t.utils.clone(n, {
      method: "GET",
      path: "/student-list",
      options: {
        caching: !0
      }
    }), e.send(n);
  },
  getFavorite: function getFavorite(n) {
    var o = e.getParam(n, "favoriteId", !0);
    return n = t.utils.clone(n, {
      method: "GET",
      path: "/favorite/".concat(o),
      options: {
        caching: !0
      }
    }), e.send(n);
  },
  getFavorites: function getFavorites(n) {
    return n = n || {}, n = t.utils.clone(n, {
      method: "GET",
      path: "/favorites",
      options: {
        caching: !0
      }
    }), e.send(n);
  },
  searchFavorites: function searchFavorites(n) {
    return n = n || {}, n = t.utils.clone(n, {
      method: "GET",
      path: "/search-favorites",
      options: {
        caching: !0
      }
    }), e.send(n);
  },
  getTask: function getTask(n) {
    var o = e.getParam(n, "taskId", !0);
    return n = t.utils.clone(n, {
      method: "GET",
      path: "/task/".concat(o),
      options: {
        caching: !0
      }
    }), e.send(n);
  },
  getTasks: function getTasks(n) {
    return n = n || {}, n = t.utils.clone(n, {
      method: "GET",
      path: "/tasks",
      options: {
        caching: !0
      }
    }), e.send(n);
  },
  accept: function accept(n) {
    return n = n || {}, n = t.utils.clone(n, {
      method: "POST",
      path: "/accept"
    }), e.send(n);
  },
  cancel: function cancel(n) {
    n = n || {};
    var o = e.getParam(n, "id", !0);
    return n = t.utils.clone(n, {
      method: "DELETE",
      path: "/accept/".concat(o)
    }), e.send(n);
  },
  submit: function submit(n) {
    return n = n || {}, n = t.utils.clone(n, {
      method: "POST",
      path: "/submit"
    }), e.send(n);
  },
  deleteTask: function deleteTask(n) {
    n = n || {};
    var o = e.getParam(n, "taskId", !0);
    return n = t.utils.clone(n, {
      method: "DELETE",
      path: "/task/".concat(o)
    }), e.send(n);
  }
};exports.studyHomeworkApi = n;