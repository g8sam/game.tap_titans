/**
 * Created by zhaojm on 14/11/17.
 */
game.CheckoutController = frame.BaseNodeController.extend({



    that : null,


    onLoad:function(){
        game.log.trace("game.CheckoutController->onLoad");
        // ccb加载完毕
        this.heroCtrl = this['hero'].controller;



    },

    onEnterTransitionDidFinish : function() {
        // 完全进入场景，在这里播放背景音乐等
        frame.log.trace("game.CheckoutController->onEnterTransitionDidFinish");
        this.playTimeLine('wudi');
    },


    //-------------------------------------------------------------------------

    onAgain : function(){
        //this.playTimeLine('wudi');
        frame.SceneManager.runScene(game.gameworld.mainscene);
    },

    onAfterWudi : function(){
        this.heroCtrl.bigattack0();
    },



});

