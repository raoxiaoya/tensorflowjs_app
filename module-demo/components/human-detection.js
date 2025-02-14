require("../../@babel/runtime/helpers/Arrayincludes");var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../common/vendor.js"),
  t = require("../utils/camera-device.js"),
  i = require("../index.js"),
  a = e.index.$aiSportPlugin,
  s = a.PoseGraphs,
  n = a.humanDetection,
  o = {
    name: "humanDetection",
    options: {
      styleIsolation: "shared"
    },
    props: {
      fullScreen: {
        type: Boolean,
        default: !1
      },
      poseDrawEnabled: {
        type: Boolean,
        default: !1
      },
      ve: {
        type: Number,
        default: null,
        validator: function validator(e) {
          if (!e) return !0;
          return [1, 2].includes(e);
        }
      },
      enhanced: {
        type: Boolean,
        default: null
      },
      extendInfo: {
        type: Boolean,
        default: !0
      }
    },
    watch: {
      poseDrawEnabled: function poseDrawEnabled(e) {
        this.initCanvas();
      },
      ve: function ve(e) {
        this.stopCapture(), this.initializeHumanDetection();
      },
      enhanced: function enhanced(e) {
        this.stopCapture(), this.initializeHumanDetection();
      }
    },
    data: function data() {
      return this.previewRate = 1, this.previewOffsetX = 0, this.previewOffsetY = 0, this.frameWidth = 480, this.frameHeight = 640, {
        zoom: 1,
        deviceKey: "back",
        previewWidth: 480,
        previewHeight: 640,
        status: "unknown",
        fps: 0,
        poseFps: 0,
        isHumanBody: !1
      };
    },
    computed: {
      videoStyles: function videoStyles() {
        var e = "width:100vw;height:100vh";
        return this.fullScreen || (e = "width:".concat(this.previewWidth, "px;height:").concat(this.previewHeight, "px;")), e;
      }
    },
    mounted: function mounted() {
      this.autoFitPreview(480, 640), this.initializeHumanDetection();
    },
    beforeDestroy: function beforeDestroy() {
      this.camera && (this.reportEvents(), this.camera.stop(), this.camera.dispose());
    },
    methods: {
      openCameraAuth: function openCameraAuth() {
        var t = this;
        e.index.showModal({
          content: "您未打开摄像头权限，无法使用本功能。",
          confirmText: "去打开",
          success: function success(i) {
            i.confirm ? e.index.openSetting({
              success: function success(i) {
                1 == i.authSetting["scope.camera"] ? (e.index.showToast({
                  icon: "none",
                  title: "摄像头权限已打开，稍后请重新进入本页。"
                }), setTimeout(function () {
                  return e.index.navigateBack();
                }, 1500)) : t.openCameraAuth();
              }
            }) : e.index.showToast({
              icon: "none",
              title: "无法使用本功能。"
            });
          }
        });
      },
      initializeHumanDetection: function initializeHumanDetection() {
        e.realLog.setFilterMsg("human-detection"), e.index.showLoading({
          title: "加载模型..."
        });
        var t = i.module.judgeEnhanced(this.enhanced);
        n.initialize({
          ve: this.ve,
          enhanced: t,
          callback: function callback(i) {
            e.index.hideLoading(), n.getVe(), t = n.isEnhanced(), i ? (e.realLog.error("\u4EBA\u4F53\u68C0\u6D4B\u80FD\u529B\u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BE6\u7EC6\u4FE1\u606F\uFF1A".concat(i.message)), e.index.showModal({
              content: "\u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BE6\u7EC6\u4FE1\u606F\uFF1A".concat(i.message),
              showCancel: !1
            })) : e.realLog.info("人体检测能力初始化成功。", n.getVe(), t);
          }
        });
      },
      fullScreenFit: function fullScreenFit(t, i) {
        var a = e.index.getWindowInfo();
        this.previewWidth = a.windowWidth, this.previewHeight = a.windowHeight, a.windowHeight > a.windowWidth ? (console.log("竖屏"), this.previewRate = a.windowHeight / i, this.previewOffsetX = a.windowWidth - t * this.previewRate, this.previewOffsetX /= 2, this.previewOffsetY = 0) : (console.log("横屏"), this.previewRate = a.windowWidth / t, this.previewOffsetX = 0, this.previewOffsetY = a.windowHeight - i * this.previewRate, this.previewOffsetY /= 2);
      },
      autoFitPreview: function autoFitPreview(t, i) {
        if (this.frameWidth = t, this.frameHeight = i, this.fullScreen) return void this.fullScreenFit(t, i);
        var a = e.index.getWindowInfo().windowWidth / t;
        this.previewWidth = t * a, this.previewHeight = i * a, this.previewRate = a, this.previewOffsetX = 0, this.previewOffsetY = 0;
      },
      initCanvas: function initCanvas() {
        if (!this.poseDrawEnabled) return;
        var t = this;
        e.wx$1.createSelectorQuery().in(this).select("#graphics").fields({
          node: !0,
          size: !0
        }).exec(function (i) {
          if (e.utils.isEmptyArray(i)) return;
          var a = i[0].node,
            n = e.wx$1.getSystemInfoSync().pixelRatio;
          a.width = t.previewWidth * n, a.height = t.previewHeight * n;
          var o = a.getContext("2d");
          o.scale(n, n), t.canvas = a, t.ctx = o, t.poseGraphs = new s(o, a.width, a.height, t.previewRate), t.poseGraphs.offsetX = t.previewOffsetX, t.poseGraphs.offsetY = t.previewOffsetY, t.poseGraphs.lineColor = "#FF8E148C", t.poseGraphs.pointColor = "#00a500", t.poseGraphs.leftColor = "#007fd3";
        });
      },
      detection: function detection(e) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var t, i;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                t = new Date().getTime();
                _context.next = 3;
                return n.detectionAsync(e);
              case 3:
                i = _context.sent;
                t = new Date().getTime() - t, _this.poseFps = Math.floor(1e3 / t), i ? (_this.isHumanBody = !0, _this.$emit("on-human-detecting", i, e)) : (_this.isHumanBody = !1, _this.$emit("on-human-detecting", null)), _this.poseDrawEnabled && (i ? _this.poseGraphs.drawing(i.keypoints) : _this.poseGraphs.clear());
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      initVideo: function initVideo() {
        if (this.camera) return;
        var i = this;
        this.camera = new t.CameraDevice(), this.camera.onFrame = function (t) {
          if (i.fps = i.camera.fps, t.width != i.frameWidth || t.height != i.frameHeight) return i.camera.stop(!0), i.autoFitPreview(t.width, t.height), i.initCanvas(), void i.camera.start();
          try {
            i.detection(t), i._waitReportDetecEvent = !0;
          } catch (a) {
            e.realLog.error(a);
          }
        }, this.camera.onStatusChange = function (t, a) {
          -1 === t && (e.index.hideLoading(), i.isHumanBody = !1), i.status = a, i.$emit("on-camera-change", t, a);
        };
      },
      startCapture: function startCapture() {
        this.initVideo(), this.camera.start(), e.index.setKeepScreenOn({
          keepScreenOn: !0
        }), this._waitReportFrameEvent = !0;
      },
      delayStart: function delayStart() {
        if (this.camera) {
          var _e = this.camera.getStatus();
          if ("unknown" != _e && "stopped" != _e) return;
        }
        var t = this;
        setTimeout(function () {
          return t.startCapture();
        }, 5e3), e.index.showToast({
          title: "5S后开始",
          duration: 4900
        });
      },
      stopCapture: function stopCapture() {
        this.camera && "running" == this.camera.getStatus() && (this.isHumanBody = !1, this.camera && this.camera.stop(), e.index.setKeepScreenOn({
          keepScreenOn: !1
        }), this.fps = this.camera.fps, this.status = this.camera.getStatus(), e.index.showLoading({
          title: "正在停止..."
        }));
      },
      toggleCamera: function toggleCamera() {
        this.deviceKey = "back" == this.deviceKey ? "front" : "back";
      },
      onCameraReady: function onCameraReady(e) {
        if (console.log("相机初始化完成。"), this.zoom = e.detail.maxZoom, this.initCanvas(), !this.camera) return;
        console.log("重新初始化CameraDevice");
        var t = this.camera.getStatus();
        this.camera.dispose(), this.camera = null, this.initVideo(), "running" === t && this.camera.start();
      },
      onCameraError: function onCameraError(t) {
        var i = t.detail.errMsg;
        i.includes("auth") ? this.openCameraAuth() : e.index.showModal({
          content: i,
          showCancel: !1
        });
      },
      reportEvents: function reportEvents() {
        this._waitReportFrameEvent && e.realEvent.reportEvent("extract_frame", {
          camera_devic: this.deviceKey,
          frame_szie: "".concat(this.frameWidth, " x ").concat(this.frameHeight),
          frame_fps: this.fps
        }), this._waitReportDetecEvent && e.realEvent.reportEvent("human_detection", {
          hdetect_ve: n.getVe(),
          hdetect_fps: this.poseFps
        });
      }
    }
  };if (!Array) {
  e.resolveComponent("iconfont")();
}Math;var r = e._export_sfc(o, [["render", function (t, i, a, s, n, o) {
  return e.e({
    a: e.s(o.videoStyles),
    b: n.deviceKey,
    c: e.o(function () {
      return o.onCameraReady && o.onCameraReady.apply(o, arguments);
    }),
    d: e.o(function () {
      return o.onCameraError && o.onCameraError.apply(o, arguments);
    }),
    e: a.poseDrawEnabled
  }, a.poseDrawEnabled ? {
    f: e.s(o.videoStyles)
  } : {}, {
    g: e.p({
      name: "camera-toggle",
      size: "32px"
    }),
    h: e.o(function () {
      return o.toggleCamera && o.toggleCamera.apply(o, arguments);
    }),
    i: e.p({
      name: "human-body",
      size: "32px"
    }),
    j: n.isHumanBody ? 1 : "",
    k: a.extendInfo
  }, a.extendInfo ? {
    l: e.t(n.fps || 0),
    m: e.t(n.poseFps || 0)
  } : {});
}]]);wx.createComponent(r);