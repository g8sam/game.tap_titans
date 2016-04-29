/**
 * Created by zhaojm on 15/1/14.
 */


game.MosterManager = cc.Node.extend({

    parentCtrl : null,

    mosterData : null,
    model : null,

    currentBlood : null,
    totalBlood : null,


    currentMoster : null,
    currentMosterIndex : null,
    //mosterList : [],

    ctor : function(){
        this._super();

        var size = cc.winSize;
        this.setPosition(cc.p(size.width / 2, size.height / 2 - 70));
        //this.mosterData = [
        //    {jsonfile: game.gameworld.gameRoot + g_res.moster0_json, atlasfile: game.gameworld.gameRoot + g_res.moster0_atlas},
        //    {jsonfile: game.gameworld.gameRoot + g_res.moster1_json, atlasfile: game.gameworld.gameRoot + g_res.moster1_atlas},
        //    {jsonfile: game.gameworld.gameRoot + g_res.moster2_json, atlasfile: game.gameworld.gameRoot + g_res.moster2_atlas},
        //    {jsonfile: game.gameworld.gameRoot + g_res.moster3_json, atlasfile: game.gameworld.gameRoot + g_res.moster3_atlas},
        //];
        this.mosterData = [
            {jsonfile: g_res.moster0_json, atlasfile: g_res.moster0_atlas},
            {jsonfile: g_res.moster1_json, atlasfile: g_res.moster1_atlas},
            {jsonfile: g_res.moster2_json, atlasfile: g_res.moster2_atlas},
            {jsonfile: g_res.moster3_json, atlasfile: g_res.moster3_atlas},
        ];

        this.currentMosterIndex = 0;

        this.model = new game.MosterModel(game.gameworld.jsonPath + "moster_model.json");

    },

    onEnter:function(){
        this._super();

        this.onAfterChangeMosterEffect();
    },

    setParentCtrl : function(parentCtrl){
        this.parentCtrl = parentCtrl;
    },

    animationStateEvent: function(obj, trackIndex, type, event, loopCount) {
        var entry = this.currentMoster.getCurrent();
        var animationName = (entry && entry.animation) ? entry.animation.name : 0;

        switch(type)
        {
            case sp.ANIMATION_EVENT_TYPE.START:
                //cc.log(trackIndex + " start: " + animationName);
                break;
            case sp.ANIMATION_EVENT_TYPE.END:
                //cc.log(trackIndex + " end:" + animationName);

                //this.currentMoster.setAnimation(0, 'idle', true);
                //this._spineboy.setAnimation(0, 'walk', true);
                break;
            case sp.ANIMATION_EVENT_TYPE.EVENT:
                //cc.log(trackIndex + " event: " + animationName);
                break;
            case sp.ANIMATION_EVENT_TYPE.COMPLETE:
                //cc.log(trackIndex + " complete: " + animationName + "," + loopCount);
                //if(this._flipped){
                //    this._flipped = false;
                //    this.currentMoster.setScaleX(1);
                //}else{
                //    this._flipped = true;
                //    this.currentMoster.setScaleX(-1);
                //}
                this.currentMoster.setAnimation(0, 'idle', true);

                break;
            default :
                break;
        }
    },

    nextMoster : function(){
        var currentIndex = this.currentMosterIndex;
        currentIndex = currentIndex + 1 < this.mosterData.length ?  currentIndex + 1 : 0;
        this.setCurrentMoster(currentIndex);
    },

    setCurrentMoster:function(index){
        cc.assert(index < this.mosterData.length, 'index error');
        if(this.currentMosterIndex == index) {
            return;
        }
        this.currentMosterIndex = index;
        this.removeChild(this.currentMoster);
        this.parentCtrl.changeMosterEffect();
    },

    onAfterChangeMosterEffect : function(){
        this.currentMoster = this.createMoster(this.currentMosterIndex);
        this.addChild(this.currentMoster);
    },

    createMoster : function(index){
        cc.assert(index < this.mosterData.length, 'index error');
        cc.log("mosterdata:", this.mosterData[index].jsonfile, this.mosterData[index].atlasfile);
        // 创建
        var moster = sp.SkeletonAnimation.create(this.mosterData[index].jsonfile, this.mosterData[index].atlasfile, 0.5);
        // 设置位置
        //moster0.setPosition(cc.p(size.width / 2, size.height / 2 - 60));
        // 设置动作
        moster.setAnimation(0, 'idle', true);

        // 设置混合
        moster.setMix('idle', 'attacked', 0.1);
        moster.setMix('idle', 'attacked2', 0.1);
        moster.setMix('attacked', 'idle', 0.1);
        moster.setMix('attacked2', 'idle', 0.1);
        // 设置监听
        moster.setAnimationListener(this, this.animationStateEvent);

        // 当要连续播放不同的动画时，用addAnimation
        //moster0.addAnimation(0, 'attacked', false);
        // 设置播放速度
        moster.setTimeScale(1);
        // 设置骨骼隐藏显示
        //moster.setDebugBones(true);

        this.totalBlood = this.currentBlood = this.model.getMosterBloodByIndex(index);
        this.parentCtrl.uiCtrl.refreshBloodPercent(this.currentBlood / this.totalBlood);
        return moster;

    },

    idle : function(){

        this.currentMoster.setAnimation(0, 'idle', true);
    },

    attacked : function(atkvalue){
        //this._spineboy.setAnimation(0, 'jump', false);
        this.currentMoster.setAnimation(0, 'attacked', false);
        if(this.currentBlood <= 0){
            return;
        }
        this.currentBlood -= atkvalue;
        if(this.currentBlood <= 0){
            this.nextMoster();
        }
        game.log.debug("currentBlood:", this.currentBlood, "totalBlood:", this.totalBlood, "percent:", this.currentBlood / this.totalBlood);
        this.parentCtrl.uiCtrl.refreshBloodPercent(this.currentBlood / this.totalBlood);
    },

    //attacked2 : function(){
    //
    //    this.currentMoster.setAnimation(0, 'attacked2', false);
    //},


});

game.MosterManager.create = function() {
    return new game.MosterManager();
};

var test = function(){
    var mosterMgr = game.MosterManager.create();
};
//test();