/**
 * Created by zhaojm on 15/2/5.
 */

game.ChangeMosterController = frame.BaseNodeController.extend({




    //-------------------------------------------------


    changeMoster : function(){
        this.playTimeLine('changeMoster');
    },

    onAfterChangeMoster : function(){
        this.parentCtrl.onAfterChangeMosterEffect();
    },


});

