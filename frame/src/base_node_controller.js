/**
 * Created by zhaojm on 14/11/17.
 */

/**
 * 所有的子类从本层开始继承，需要实现的函数以本类为例
 * **/
frame.BaseNodeController = frame.BaseController.extend({


    parentCtrl : null,
    //----------------------------------------------------------------------------

    onInit: function() {
        // 构造函数，CCB还没有load
        frame.log.trace('frame.BaseNodeController->onInit');
    },

    onDestroy:function(){
        // 切换scene时的销毁动作
        frame.log.trace("frame.BaseNodeController->onDestroy");
    },


    onLoad:function(){
        // ccb加载完毕，可以操作CCB相关变量
        frame.log.trace("frame.BaseNodeController->onload");

    },

    onEnterTransitionDidFinish : function() {
        // 完全进入场景，在这里播放背景音乐等
        frame.log.trace("frame.BaseNodeController->onEnterTransitionDidFinish");
    },


    onKeyBackClicked : function() {
        // backClicked回调
        frame.log.trace('frame.BaseNodeController->onKeyBackClicked');
    },

    onUpdate:function (model) {
        // 刷新界面内容，调用this.update(model)
        frame.log.trace('frame.BaseNodeController->onUpdate');
    },



    //------------------------------------------------------------------------------------------------------

    // 播放ccb中的动画，
    playTimeLine : function(timeline){
        this.rootNode.animationManager.runAnimationsForSequenceNamed(timeline);
    },

    setParentCtrl : function(parentCtrl){
        this.parentCtrl = parentCtrl;
    },



});

