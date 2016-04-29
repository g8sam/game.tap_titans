/**
 * Created by zhaojm on 14/11/17.
 */
/**
 * 本类用于底层封装，不要直接继承此类，从baseNodeController开始继承
 * **/
frame.BaseController = cc.Class.extend({
    ctor: function () {
        frame.log.trace("frame.BaseController->ctor");
        this.view = {
            ccbRootNode: null,

        };

        this.model = {

        };

        this.init();
    },


    // 初始化的函数
    init: function() {
        frame.log.trace('frame.BaseController->init');

        this.onInit();
    },

    onInit: function() {
        frame.log.trace('frame.BaseController->onInit');
    },

    destroy:function (){
        frame.log.trace("frame.BaseController->destroy");
        this.onDestroy();
    },

    onDestroy:function(){
        frame.log.trace("frame.BaseController->onDestroy");

    },

    onDidLoadFromCCB:function(){
        frame.log.trace("frame.BaseController->onDidLoadFromCCB");
        // 将ccb的根节点放到view上面统一管理
        this.view.ccbRootNode = this.rootNode;
        var that = this;
//
        this.view.ccbRootNode.onEnterTransitionDidFinish = function() {
            that.onEnterTransitionDidFinish();
        };
//
        // 加上这个之后默认动画就停止了
//        this.view.ccbRootNode.onEnter = function() {
//            that.onEnter();
//        };
//
        this.view.ccbRootNode.onExit = function() {
            that.onExit();
        };

        this.view.ccbRootNode.backClicked = function(){
            that.onKeyBackClicked();
        };

        this.onLoad();
    },

    onLoad:function(){
        // ccb加载完毕
        frame.log.trace("frame.BaseController->onload");
    },

    // 场景onEnterTransitionDidFinish的回调
    onEnterTransitionDidFinish : function() {
        // 完全进入场景，在这里播放背景音乐等
        frame.log.trace("frame.BaseController->onEnterTransitionDidFinish");
    },

    // onExit的回调
    onExit : function() {
        // 退出场景
        frame.log.trace("frame.BaseController->onRootNodeExit");
        this.destroy();
    },

    // backClicked回调
    onKeyBackClicked : function() {
        frame.log.trace('frame.BaseController->onKeyBackClicked');
    },

    // 刷新界面的内容，参数一般是数据模型
    update:function (model) {
        frame.log.trace('frame.BaseController->update');
        this.onUpdate(model);
    },

    // 刷新界面的内容
    onUpdate:function (model) {
        frame.log.trace('frame.BaseController->onUpdate');
    },
});
