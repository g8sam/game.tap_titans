/**
 * Created by zhaojm on 14/11/20.
 */
game.NodeController = frame.BaseNodeController.extend({

    onInit: function() {
        game.log.trace('game.nodeController->onInit');
    },

    onDestroy:function(){
        game.log.trace("game.nodeController->onDestroy");
    },

    onLoad:function(){
        game.log.trace("game.nodeController->onload");

    },

    onUpdate:function (model) {
        game.log.trace('game.nodeController->onUpdate');
    },

});