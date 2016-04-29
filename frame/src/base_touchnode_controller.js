/**
 * Created by zhaojm on 14/11/17.
 */

frame.BaseTouchNodeController = frame.BaseController.extend({

    minSwipdistance : 100,
    minSwiptime : 1000,    //毫秒
    maxClickedDis : 20,

    E_SWIP_DIR : {
        E_INVAILD : 0,
        E_LEFT : 1,
        E_RIGHT : 2,
        E_UP : 3,
        E_DOWN : 4
    },
    isTouch : false,

    isMoved : false,

    pressTimes : 0,

    touchCounts : 0,

    m_longProgress : false,
    m_startPoint : null,
    m_endPoint : null,
    m_startTime : null,

    //------------------------------------------------------------------------------------------------------------

    onInit: function() {
        // 构造函数，CCB还没有load
        frame.log.trace('frame.BaseTouchNodeController->onInit');

    },

    onDestroy:function(){
        // 切换scene时的销毁动作
        frame.log.trace("frame.BaseTouchNodeController->onDestroy");
    },


    onLoad:function(){
        // ccb加载完毕，可以操作CCB相关变量
        frame.log.trace("frame.BaseTouchNodeController->onload");


        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,           // true 为不向下传递
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded,
            onTouchCancel: this.onTouchCancel
        }, this.rootNode);

    },

    onEnterTransitionDidFinish : function() {
        // 完全进入场景，在这里播放背景音乐等
        frame.log.trace("frame.BaseTouchNodeController->onEnterTransitionDidFinish");
    },


    onKeyBackClicked : function() {
        // backClicked回调
        frame.log.trace('frame.BaseTouchNodeController->onKeyBackClicked');
    },

    onUpdate:function (model) {
        // 刷新界面内容，调用this.update(model)
        frame.log.trace('frame.BaseTouchNodeController->onUpdate');
    },

    // -----------------------------------------------------------------------------------------------------
    updateSingleDelay : function(ft){
        if (this.touchCounts == 1) {
            this.onSingleCLick(this.m_endPoint);
            this.touchCounts=0;
        }

    },

    updateDoubleDelay : function(ft) {
        if (this.touchCounts == 2 ) {
            this.onDoubleClick(this.m_endPoint);
            this.touchCounts=0;
        }
    },

    updatelongprogress : function(ft) {
        if (this.isTouch) {
            this.pressTimes++;

            if (this.pressTimes >= 2) {
                this.m_longProgress=true;
                this.onLongPressed(this.m_endPoint);

            }
        }else {
            this.pressTimes=0;
        }
    },

    getCurrentTime : function() {
        //var tm;
        //gettimeofday(tm, null);
        var myDate = new Date();
        //myDate.getSeconds();     //获取当前秒数(0-59)
        //myDate.getMilliseconds();    //获取当前毫秒数(0-999)

        //return tm.tv_sec * 1000 + tm.tv_usec / 1000;
        return myDate.getSeconds() + myDate.getMilliseconds() / 1000;
    },




    onTouchBegan : function(touch, event){

        this.m_startPoint=touch.getLocation();

        this.isTouch=true;

        this.m_startTime=this.getCurrentTime();

        //处理长按事件
        this.schedule(this.updatelongprogress,1);

        return true;
    },

    onTouchMoved : function(touch, event){
        this.isMoved=true;
        var curPoint=touch.getLocation();
        var prePoint = touch.getPreviousLocation();
        this.onMove(prePoint, curPoint);
    },

    onTouchEnded : function(touch, event){
        this.isTouch=false;
        this.pressTimes=0;
        this.unschedule(this.updatelongprogress);

        //如果刚完成长按事件 则把按下次数清零 长按状态置空 直接返回 不继续执行
        if (this.m_longProgress ) {
            this.touchCounts=0;
            this.m_longProgress=false;

            return;
        }

        this.m_endPoint=touch.getLocation();

        var endTime=this.getCurrentTime();

        var timeDis=endTime - this.m_startTime;

        var dir = this.GetSwipDir(this.m_startPoint, this.m_endPoint,timeDis);

        if ( dir != this.E_SWIP_DIR.E_INVAILD) {
            this.onSwip(this.m_startPoint, this.m_endPoint, dir);
            return;
        }

        //做连击判断
        if (this.isMoved) {
            this.isMoved=false;
            return;
        }
        if (this.touchCounts == 2) {
            this.onThreeClick(this.m_endPoint);
            this.touchCounts=0;
        }
        else if (this.touchCounts == 1) {
            this.scheduleOnce(this.updateDoubleDelay, 0.25);
            this.touchCounts++;
        }
        else if (this.touchCounts == 0) {
            this.scheduleOnce(this.updateSingleDelay, 0.25);
            this.touchCounts++;
        }

    },
    onTouchCancel : function(touch, event){
        this.onTouchEnded(touch, event);
    },

    GetSwipDir : function(startPos, endPos, timeDis) {
        if (timeDis < this.minSwiptime) {
            return this.E_SWIP_DIR.E_INVAILD;
        }

        if (abs(endPos.x - startPos.x) > this.minSwipdistance) {
            if (endPos.x > startPos.x) {
                return this.E_SWIP_DIR.E_RIGHT;
            }else{
                return this.E_SWIP_DIR.E_LEFT;
            }
        }
        if (abs(endPos.y - startPos.y) > this.minSwipdistance) {
            if (endPos.y > startPos.y) {
                return this.E_SWIP_DIR.E_UP;
            }else{
                return this.E_SWIP_DIR.E_DOWN;
            }
        }
        return this.E_SWIP_DIR.E_INVAILD;
    },


    onSingleCLick : function(pos){},        //单击
    onDoubleClick : function(pos){},        //双击
    onThreeClick : function(pos){},         //3连击
    onLongPressed : function(pos){},        //长按
    onMove : function(prePoint, curPoint){},          //移动
    onSwip : function(startPos, endPos, dir){},   //滑动



});

