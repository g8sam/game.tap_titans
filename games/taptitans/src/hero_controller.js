/**
 * Created by zhaojm on 14/11/17.
 */
game.HeroController = frame.BaseNodeController.extend({

    ACTION_STATE : {
        idle : 0,
        attack0 : 1,
        attack1 : 2,
        attack2 : 3,
        bigattack0 : 4,
        bigattack1 : 5
    },

    actionstate : 0,

    that : null,

    model : null,

    onInit: function() {
        game.log.trace('game.GameSceneController->onInit');
        this.model = new game.HeroModel(game.gameworld.jsonPath + "hero_model.json");
    },


    onLoad:function(){
        // ccb加载完毕
        game.log.trace("game.GameSceneController->onload");
        that = this;
        this.idle();
    },



//---------------------------------------------------------------------
    idle : function(){
        this.actionstate = this.ACTION_STATE.idle;
        this.playTimeLine('idle');
    },
    attack : function(mosterMgr) {

        switch (this.actionstate) {
            case this.ACTION_STATE.attack0:
                this.attack1(mosterMgr);
                break;
            case this.ACTION_STATE.attack1:
                this.attack2(mosterMgr);
                break;
            case this.ACTION_STATE.attack2:
                this.attack0(mosterMgr);
                break;
            case this.ACTION_STATE.idle:
                this.attack0(mosterMgr);
                break;
            default :
                this.attack0(mosterMgr);
                break;
        }
    },

    attack0 : function(mosterMgr){
        this.actionstate = this.ACTION_STATE.attack0;
        this.playTimeLine('attack0');
        mosterMgr.attacked(this.model.atkvalue0);
    },
    attack1 : function(mosterMgr){
        this.actionstate = this.ACTION_STATE.attack1;
        this.playTimeLine('attack1');
        mosterMgr.attacked(this.model.atkvalue1);
    },
    attack2 : function(mosterMgr){
        this.actionstate = this.ACTION_STATE.attack2;
        this.playTimeLine('attack2');
        mosterMgr.attacked(this.model.atkvalue2);
    },

    bigattack0 : function(mosterMgr){
        this.actionstate = this.ACTION_STATE.bigattack0;
        this.playTimeLine('bigattack0');
        mosterMgr.attacked(this.model.batkvalue0);
    },

    bigattack1 : function(mosterMgr){
        this.actionstate = this.ACTION_STATE.bigattack1;
        this.playTimeLine('bigattack1');
        mosterMgr.attacked(this.model.batkvalue1);
    },

    onAfterAttack : function () {
        game.log.trace("onAfterAttack");
        this.idle();
    },

    onAfterBigAttack : function(){
        this.parentCtrl.touchLayerCtrl.setTouchEnabled(false);
        this.idle();
    },

    onAttack : function(){

    },

});

