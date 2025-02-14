var e=require("../../@babel/runtime/helpers/classCallCheck"),t=require("../../@babel/runtime/helpers/createClass"),l=require("../../@babel/runtime/helpers/possibleConstructorReturn"),r=require("../../@babel/runtime/helpers/get"),n=require("../../@babel/runtime/helpers/getPrototypeOf"),a=require("../../@babel/runtime/helpers/inherits");var i=require("../../utils/utils"),c=require("./sport-base"),s=require("../body-calc/calculator"),o=function(o){function h(t){var r,a,i,c;return e(this,h),a=this,c=[t],i=n(i=h),(r=l(a,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){return!1}}()?Reflect.construct(i,c||[],n(a).constructor):i.apply(a,c))).rules=null,r.view="side",r.tickMode=!1,r._calculator=new s,r._calculator.pointThreshold=r.pointThreshold,r.rules={ruleThreshold:r.threshold},r}return a(h,c),t(h,[{key:"start",value:function(){r(n(h.prototype),"start",this).call(this),this._calculator.pointThreshold=this.pointThreshold,this.buildRules()}},{key:"buildRules",value:function(){this.rules={name:"坐立体前屈检查",calc:"$and",rules:[{name:"全身进入图像范围内检查",calc:"whole"},{name:"坐立腿部平直",calc:"$or",rules:[{name:"左脚平直",calc:"horizontal",leftKey:"left_hip",centerKey:"left_knee",rightKey:"left_ankle",offset:20},{name:"右脚平直",calc:"horizontal",leftKey:"right_hip",centerKey:"right_knee",rightKey:"right_ankle",offset:20}]},{name:"弯腰90度",calc:"$or",rules:[{name:"左腰部弯腰45度",calc:"match-angle",angleKey:"left_hip",secondKey:"left_shoulder",thirdKey:"left_knee",angle:50,offset:20},{name:"右腰部弯腰45度",calc:"match-angle",angleKey:"right_hip",secondKey:"right_shoulder",thirdKey:"right_knee",angle:50,offset:20}]},{name:"手臂平直",calc:"$or",rules:[{name:"左边平直",calc:"$and",rules:[{name:"左手平直",calc:"match-angle",angleKey:"left_elbow",secondKey:"left_shoulder",thirdKey:"left_wrist",angle:180,offset:15},{name:"左边屈伸",calc:"match-angle",angleKey:"left_shoulder",secondKey:"left_hip",thirdKey:"left_elbow",angle:105,offset:25}]},{name:"右边平直",calc:"$and",rules:[{name:"右手平直",calc:"match-angle",angleKey:"right_elbow",secondKey:"right_shoulder",thirdKey:"right_wrist",angle:180,offset:15},{name:"右边屈伸",calc:"match-angle",angleKey:"right_shoulder",secondKey:"right_hip",thirdKey:"right_elbow",angle:105,offset:25}]}]}]}}},{key:"pushing",value:function(e){this.isCounting&&(i.isNone(e)?this.pauseTime():this._calculator.calculating(e,this.rules)?(console.log("坐位体前屈中..."),this.tickTime()):this.pauseTime())}}])}();o.KEY="Sit-Forward-Bend",o.NAME="坐位体前屈",module.exports=o;