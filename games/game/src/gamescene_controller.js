/**
 * Created by zhaojm on 14/11/17.
 */
game.GameSceneController = frame.BaseNodeController.extend({

    onInit: function() {
        game.log.trace('game.GameSceneController->onInit');
    },

    onDestroy:function(){
        game.log.trace("game.GameSceneController->onDestroy");
    },

    onLoad:function(){
        // ccb加载完毕
        game.log.trace("game.GameSceneController->onload");

    },

    // 刷新界面的内容
    onUpdate:function (model) {
        game.log.trace('game.GameSceneController->onUpdate');
    },

    onMenuItemClicked:function(){
        game.log.trace("game.GameSceneController->onMenuItemClicked");
        //this.rootNode.animationManager.runAnimationsForSequenceNamed("ccbfiletimeline");
        //this['ccb2'].controller.rootNode.animationManager.runAnimationsForSequenceNamed("node");
        //this['ccb1'].controller.rootNode.animationManager.runAnimationsForSequenceNamed("node");
        frame.SceneManager.runScene('games/game/res/ccbs/node');
    },


});

