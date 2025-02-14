var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var t = require("../../../common/vendor.js"),
  i = require("../../../apis/sport/organize-activity.js"),
  e = require("../../../apis/sport/user-activity.js"),
  a = require("../mixture.js"),
  n = require("../../fitness/mixture.js"),
  s = {
    mixins: [t.AppUtils],
    data: function data() {
      return this.categoryMap = a.mixture.getCategoryMap(), this.statusMap = a.mixture.getStatusMap(), {
        menuRect: t.index.getMenuButtonBoundingClientRect(),
        coverHeight: 0,
        lightNavbar: !1,
        loading: !0,
        activity: null,
        signer: null,
        privitePass: !1,
        ranking: {
          loading: !1,
          category: 10,
          sportKey: null,
          sportName: null,
          sportVisible: !1,
          userItems: [],
          teamItems: []
        }
      };
    },
    computed: {
      coverUrl: function coverUrl() {
        var t = null;
        return this.activity && (t = this.activity.coverUrl), t = t ? this.$utils.thumbnailUrl(t, 828, 436) : "/static/images/activity_default_banner.jpg", t;
      },
      sportItems: function sportItems() {
        if (!this.activity) return [];
        var t = this.activity.sportItems.map(function (t) {
          return t.sport;
        });
        return t.splice(0, 0, {
          key: null,
          name: "所有"
        }), t;
      },
      isNeedSignin: function isNeedSignin() {
        return !!this.activity && (!!this.activity.isTeam || !t.utils.isEmptyArray(this.activity.signInFields));
      },
      singinInfo: function singinInfo() {
        if (!this.signer) return "";
        var i = "".concat(this.signer.team, " ");
        return this.signer.name && (i += "".concat(this.signer.name, " ")), this.signer.mobile && (i += "".concat(t.utils.maskPrivacy(this.signer.mobile.toString(), 4), " ")), this.signer.cardId && (i += "".concat(t.utils.maskPrivacy(this.signer.cardId, 8))), i;
      }
    },
    methods: {
      formatSeconds: n.fitnessMixture.formatSeconds,
      maskPrivacyField: function maskPrivacyField(i, e) {
        return i ? t.utils.maskPrivacy(i, e) : null;
      },
      loadActivity: function loadActivity(a) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var n, s, o, r;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (a) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                _this.loading = !0;
                n = {
                  params: {
                    id: a
                  },
                  options: {
                    loading: !1
                  }
                }, s = null;
                if (!_this.isPreview) {
                  _context.next = 10;
                  break;
                }
                _context.next = 7;
                return e.userActivityApi.get(n);
              case 7:
                _context.t0 = _context.sent;
                _context.next = 13;
                break;
              case 10:
                _context.next = 12;
                return i.organizegApi.get(n);
              case 12:
                _context.t0 = _context.sent;
              case 13:
                s = _context.t0;
                _this.loading = !1;
                if (s.success) {
                  _context.next = 17;
                  break;
                }
                return _context.abrupt("return");
              case 17:
                _this.activity = s.result, _this.signer = i.organizegApi.getSignin(_this.activity.id);
                o = t.utils.timestamp() - _this.shareTimestamp;
                r = _this;
                _this.$nextTick(function () {
                  r.privitePass = !r.isPreview && o > 300 && !r.activity.isPublic;
                });
              case 21:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      loadRanking: function loadRanking() {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var t, _e, _e2;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                t = {
                  params: {
                    activityId: _this2.activity.id,
                    sportKey: _this2.ranking.sportKey,
                    pageSize: 10,
                    pageIndex: 1
                  },
                  options: {
                    loading: !1
                  }
                };
                if (!(_this2.ranking.loading = !0, 10 != _this2.ranking.category && _this2.activity.isTeam)) {
                  _context2.next = 9;
                  break;
                }
                if (!(20 == _this2.ranking.category)) {
                  _context2.next = 7;
                  break;
                }
                _context2.next = 5;
                return i.organizegApi.getTeamRankings(t);
              case 5:
                _e = _context2.sent;
                _e.success && (_this2.ranking.teamItems = _e.result.data);
              case 7:
                _context2.next = 14;
                break;
              case 9:
                _this2.ranking.category = 10;
                _context2.next = 12;
                return i.organizegApi.getUserRankings(t);
              case 12:
                _e2 = _context2.sent;
                _e2.success && (_this2.ranking.userItems = _e2.result.data);
              case 14:
                _this2.ranking.loading = !1;
              case 15:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onNavBack: function onNavBack() {
        t.index.navigateBack({
          fail: function fail() {
            t.index.switchTab({
              url: "/pages/main/home"
            });
          }
        });
      },
      onSelectCategory: function onSelectCategory(t) {
        this.ranking.category = t, this.loadRanking();
      },
      onSportDropdown: function onSportDropdown() {
        this.ranking.sportVisible = !this.ranking.sportVisible;
      },
      onSelectSport: function onSelectSport(t) {
        t.key ? (this.ranking.sportKey = t.key, this.ranking.sportName = t.name) : (this.ranking.sportKey = null, this.ranking.sportName = null), this.loadRanking();
      },
      onNavToRanking: function onNavToRanking() {
        t.index.createSelectorQuery().select("#ranking").boundingClientRect().exec(function (i) {
          console.log(i), t.index.pageScrollTo({
            scrollTop: i[0].top,
            duration: 900
          });
        });
      },
      onShowSignin: function onShowSignin() {
        this.$refs.signiner.show();
      },
      onSignin: function onSignin(t) {
        this.signer = t;
      },
      onPasswordPass: function onPasswordPass() {
        this.privitePass = !1, console.log("on ok...");
      },
      onItemJoining: function onItemJoining(i) {
        if (0 != this.activity.status) return void this.$utils.showToast("活动未开始/已结束");
        if (!this.signer) return void this.$utils.showToast("请先签到");
        var e = 0;
        i.isTimer && (e = 1);
        var a = this.activity,
          n = "/module-sport/pages/activity/activity?activityId=".concat(a.id, "&activityTitle=").concat(encodeURIComponent(a.title), "\n\t\t\t\t\t&activityCategory=").concat(a.category, "&sportKey=").concat(i.key, "&mode=").concat(e, "&targets=").concat(i.times || 0);
        t.index.navigateTo({
          url: n
        });
      },
      buildShare: function buildShare() {
        var i = this.$utils.getShareInfo();
        return this.activity.coverUrl && (i.imageUrl = this.activity.coverUrl), i.title = "\u6211\u6B63\u5728\u53C2\u52A0 \u300C".concat(this.activity.title, "\u300D\uFF0C\u60A8\u4E5F\u6765\u8BD5\u8BD5\u5427^_^"), i.path = i.path.replace("&preview=true", ""), i.path += "&timestamp=".concat(t.utils.timestamp()), i.query = i.query.replace("&preview=true", ""), i.query += "&timestamp=".concat(t.utils.timestamp()), i;
      }
    },
    onLoad: function onLoad(t) {
      var _this3 = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
        var i;
        return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              i = t.id;
              if (!i) {
                _context3.next = 12;
                break;
              }
              _this3.isPreview = !!t.preview;
              _this3.shareTimestamp = parseInt(t.timestamp || "0");
              _context3.next = 6;
              return _this3.loadActivity(i);
            case 6:
              _context3.t0 = _this3.activity;
              if (!_context3.t0) {
                _context3.next = 10;
                break;
              }
              _context3.next = 10;
              return _this3.loadRanking();
            case 10:
              _context3.next = 13;
              break;
            case 12:
              _this3.loading = !1;
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    onPullDownRefresh: function onPullDownRefresh(i) {
      var _this4 = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee4() {
        return _regeneratorRuntime2().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.t0 = _this4.activity;
              if (!_context4.t0) {
                _context4.next = 4;
                break;
              }
              _context4.next = 4;
              return _this4.loadActivity(_this4.activity.id);
            case 4:
              _context4.next = 6;
              return _this4.loadRanking();
            case 6:
              t.index.stopPullDownRefresh();
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    onPageScroll: function onPageScroll(i) {
      if (this.coverHeight) return void (this.lightNavbar = i.scrollTop >= this.coverHeight - this.menuRect.top - 8);
      var e = this;
      t.index.createSelectorQuery().select(".banner").boundingClientRect().exec(function (t) {
        e.coverHeight = t[0].height;
      });
    },
    onShareAppMessage: function onShareAppMessage() {
      return this.buildShare();
    },
    onShareTimeline: function onShareTimeline() {
      return this.buildShare();
    }
  };if (!Array) {
  (t.resolveComponent("login-modal") + t.resolveComponent("activity-password-modal") + t.resolveComponent("iconfont") + t.resolveComponent("tag") + t.resolveComponent("activity-sport-item") + t.resolveComponent("tui-picker") + t.resolveComponent("avatar") + t.resolveComponent("list-viewer") + t.resolveComponent("activity-signin-widget") + t.resolveComponent("tui-button") + t.resolveComponent("pager-container"))();
}Math || (function () {
  return "../../../components/login-modal.js";
} + function () {
  return "../../../components/activity-password-modal.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/tag.js";
} + function () {
  return "../../../components/activity-sport-item.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-picker/tui-picker.js";
} + function () {
  return "../../../components/avatar.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/list-viewer.js";
} + function () {
  return "../../../components/activity-signin-widget.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-button/tui-button.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/pager-container.js";
})();var o = t._export_sfc(s, [["render", function (i, e, a, n, s, o) {
  return t.e({
    a: t.p({
      required: !0
    }),
    b: t.o(o.onPasswordPass),
    c: t.o(function (t) {
      return s.privitePass = t;
    }),
    d: t.p({
      activity: s.activity,
      modelValue: s.privitePass
    }),
    e: t.p({
      name: "arrow-left"
    }),
    f: t.o(function () {
      return o.onNavBack && o.onNavBack.apply(o, arguments);
    }),
    g: s.lightNavbar ? 1 : "",
    h: s.menuRect.top + "px",
    i: s.menuRect.height + "px",
    j: s.menuRect.height + "px",
    k: s.activity
  }, s.activity ? t.e({
    l: o.coverUrl,
    m: t.t(i.statusMap.getText(s.activity.status)),
    n: t.p({
      color: i.statusMap.getColor(s.activity.status),
      shape: "right-circle"
    }),
    o: t.t(s.activity.title),
    p: s.activity.isPublic
  }, s.activity.isPublic ? {
    q: t.p({
      color: "#0090d8",
      shape: "circle",
      plain: !0
    })
  } : {
    r: t.p({
      color: "#adad82",
      shape: "circle",
      plain: !0
    })
  }, {
    s: t.t(i.categoryMap.getText(s.activity.category)),
    t: t.p({
      color: i.categoryMap.getColor(s.activity.category),
      shape: "circle",
      plain: !0
    }),
    v: s.activity.isTeam
  }, s.activity.isTeam ? {
    w: t.p({
      color: "#be7e5e",
      shape: "circle",
      plain: !0
    })
  } : {}, {
    x: t.t(i.$filters.formatDate(s.activity.beginTime, "yyyy-MM-dd HH:mm:ss")),
    y: t.t(i.$filters.formatDate(s.activity.endTime, "yyyy-MM-dd HH:mm:ss")),
    z: t.t(s.activity.organizer),
    A: t.t(s.activity.peoples),
    B: s.activity.introduce
  }, s.activity.introduce ? {
    C: t.t(s.activity.introduce || "")
  } : {}, {
    D: s.privitePass ? 1 : ""
  }) : {}, {
    E: s.signer
  }, s.signer ? {
    F: t.t(o.singinInfo),
    G: s.privitePass ? 1 : "",
    H: t.o(function () {
      return o.onShowSignin && o.onShowSignin.apply(o, arguments);
    })
  } : {}, {
    I: s.activity && s.activity.sportItems
  }, s.activity && s.activity.sportItems ? {
    J: t.f(s.activity.sportItems, function (i, e, a) {
      return {
        a: e,
        b: t.o(o.onItemJoining, e),
        c: "753413f6-9-" + a + ",753413f6-0",
        d: t.p({
          sportItem: i,
          activity: s.activity
        })
      };
    }),
    K: s.privitePass ? 1 : ""
  } : {}, {
    L: s.activity && s.activity.isTeam
  }, s.activity && s.activity.isTeam ? t.e({
    M: 10 == s.ranking.category
  }, 10 == s.ranking.category ? {
    N: t.p({
      name: "ok"
    })
  } : {}, {
    O: 10 == s.ranking.category ? 1 : "",
    P: t.o(function (t) {
      return o.onSelectCategory(10);
    }),
    Q: 20 == s.ranking.category
  }, 20 == s.ranking.category ? {
    R: t.p({
      name: "ok"
    })
  } : {}, {
    S: 20 == s.ranking.category ? 1 : "",
    T: t.o(function (t) {
      return o.onSelectCategory(20);
    })
  }) : {}, {
    U: s.activity && s.activity.sportItems.length > 1
  }, s.activity && s.activity.sportItems.length > 1 ? {
    V: t.t(s.ranking.sportName || "单项榜单"),
    W: t.p({
      name: "arrow-down-s"
    }),
    X: t.o(function () {
      return o.onSportDropdown && o.onSportDropdown.apply(o, arguments);
    }),
    Y: t.o(o.onSelectSport),
    Z: t.o(o.onSportDropdown),
    aa: t.p({
      show: s.ranking.sportVisible,
      "picker-data": o.sportItems,
      "value-field": "key",
      "text-field": "name"
    })
  } : {}, {
    ab: 10 == s.ranking.category
  }, 10 == s.ranking.category ? {
    ac: t.f(s.ranking.userItems, function (i, e, a) {
      return t.e({
        a: i.number <= 3
      }, i.number <= 3 ? {
        b: "/static/images/rk_no" + i.number + "_2x.png"
      } : {
        c: t.t(i.number)
      }, {
        d: "753413f6-15-" + a + ",753413f6-14",
        e: t.p({
          avatarUrl: i.user && i.user.avatarUrl
        }),
        f: t.t(o.maskPrivacyField(i.name, 1) || o.maskPrivacyField(i.user.nick, 2)),
        g: t.t(o.maskPrivacyField(i.mobile, 4) || o.maskPrivacyField(i.cardId, 4)),
        h: i.sport
      }, i.sport ? t.e({
        i: 10 == i.sport.tickMode
      }, 10 == i.sport.tickMode ? {
        j: t.t(i.counts)
      } : {
        k: t.t(o.formatSeconds(i.times))
      }) : {
        l: t.t(i.counts)
      }, {
        m: e
      });
    }),
    ad: t.p({
      loading: s.ranking.loading,
      "list-data": s.ranking.userItems,
      "no-data-text": "无参赛记录，榜单未生成",
      inline: !0
    })
  } : {}, {
    ae: 20 == s.ranking.category
  }, 20 == s.ranking.category ? {
    af: t.f(s.ranking.teamItems, function (i, e, a) {
      return t.e({
        a: i.number <= 3
      }, i.number <= 3 ? {
        b: "/static/images/rk_no" + i.number + "_2x.png"
      } : {
        c: t.t(i.number)
      }, {
        d: t.t(i.team),
        e: t.t(i.totals),
        f: t.t(o.formatSeconds(i.times)),
        g: i.sport
      }, i.sport ? t.e({
        h: 10 == i.sport.tickMode
      }, 10 == i.sport.tickMode ? {
        i: t.t(i.counts)
      } : {
        j: t.t(o.formatSeconds(i.times))
      }) : {
        k: t.t(i.counts)
      }, {
        l: e
      });
    }),
    ag: t.p({
      loading: s.ranking.loading,
      "list-data": s.ranking.teamItems,
      "no-data-text": "无参赛记录，榜单未生成",
      inline: !0
    })
  } : {}, {
    ah: s.privitePass ? 1 : "",
    ai: s.activity
  }, s.activity ? {
    aj: t.sr("signiner", "753413f6-17,753413f6-0"),
    ak: t.o(o.onSignin),
    al: t.p({
      activityId: s.activity.id,
      fields: s.activity.signInFields,
      "is-team": s.activity.isTeam,
      teams: s.activity.teams
    })
  } : {}, {
    am: t.p({
      name: "ranking"
    }),
    an: t.o(o.onNavToRanking),
    ao: t.p({
      type: "danger",
      width: "192rpx",
      height: "76rpx",
      shape: "circle",
      shadow: !0
    }),
    ap: o.isNeedSignin
  }, o.isNeedSignin ? {
    aq: t.p({
      name: "edit"
    }),
    ar: t.o(o.onShowSignin),
    as: t.p({
      type: "green",
      width: "192rpx",
      height: "76rpx",
      shape: "circle",
      shadow: !0
    })
  } : {}, {
    at: t.p({
      name: "shared-o"
    }),
    av: t.p({
      type: "blue",
      width: "192rpx",
      height: "76rpx",
      shape: "circle",
      "open-type": "share",
      shadow: !0
    }),
    aw: t.p({
      loading: s.loading,
      "content-data": s.activity,
      "no-data-text": "活动不存在或已下线",
      "no-data-goto-text": "活动广场",
      "no-data-goto-page": "./index"
    })
  });
}]]);s.__runtimeHooks = 7, wx.createPage(o);