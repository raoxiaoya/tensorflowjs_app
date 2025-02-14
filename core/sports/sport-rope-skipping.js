var e=require("../../@babel/runtime/helpers/classCallCheck"),t=require("../../@babel/runtime/helpers/createClass"),r=require("../../@babel/runtime/helpers/possibleConstructorReturn"),l=require("../../@babel/runtime/helpers/get"),i=require("../../@babel/runtime/helpers/getPrototypeOf"),n=require("../../@babel/runtime/helpers/inherits");var a=require("../../utils/utils"),s=require("../saber"),c=require("./sport-base"),o=require("../body-calc/calculator"),u=require("../body-calc/point-tracker"),h=function(h){function p(t){var l,n,a,s;return e(this,p),n=this,s=[t],a=i(a=p),(l=r(n,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){return!1}}()?Reflect.construct(a,s||[],i(n).constructor):a.apply(n,s)))._calculator=null,l.rules=null,l.view="front_back",l.tickMode=!0,l._calculator=new o,l._calculator.pointThreshold=l.pointThreshold,l._pointTracker=new u("left_hip",1),l._pointTracker.amplitude=.02,l.rules={shakeRate:.02,base:{name:"基本人体状态要求",calc:"$and",rules:[{name:"全身须进入图像范围内",calc:"whole",relaxed:!0},{name:"躯干必须是直立的",calc:"stand",offset:25},{name:"肢体基本要求",calc:"$or",rules:[{name:"左手小臂要求",calc:"match-angle",angleKey:"left_elbow",secondKey:"left_wrist",thirdKey:"left_hip",angle:80,offset:60},{name:"右手小臂要求",calc:"match-angle",angleKey:"right_elbow",secondKey:"right_wrist",thirdKey:"right_hip",angle:80,offset:60}]}]}},l}return n(p,c),t(p,[{key:"reset",value:function(){l(i(p.prototype),"reset",this).call(this),null!=this._prevAngle&&delete this._prevAngle,null!=this._trend&&delete this._trend}},{key:"start",value:function(){this.isCounting||(l(i(p.prototype),"start",this).call(this),this._calculator.pointThreshold=this.pointThreshold,this._pointTracker.reset(),this._pointTracker.amplitude=this.rules.shakeRate)}},{key:"pushing",value:function(e){if(!a.isNone(e)){var t=e.keypoints;a.isEmptyArray(t)||this._calculator.calculating(e,this.rules.base)&&(2===this._pointTracker.tracking(e)?(this.countTimes(),this.emitTick()):s.writeConsoleDebug("抖动趋势未通过"))}}}])}();h.KEY="Rope-Skipping",h.NAME="跳绳",module.exports=h;