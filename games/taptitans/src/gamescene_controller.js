/**
 * Created by zhaojm on 14/11/17.
 */
game.GameSceneController = frame.BaseNodeController.extend({

    maxSecond : 60,

    heroCtrl : null,
    changeMosterCtrl : null,
    mosterMgr: null,
    uiCtrl : null,
    touchLayerCtrl : null,
    magicCircleCtrl : null,

    attackedNum:0,

    that : null,

    onLoad:function(){
        // ccb加载完毕
        game.log.trace("game.GameSceneController->onload");

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan
        }, this.rootNode);

        that = this;

        this.heroCtrl = this['hero'].controller;
        this.heroCtrl.setParentCtrl(this);
        this.changeMosterCtrl = this['changeMoster'].controller;
        this.changeMosterCtrl.setParentCtrl(this);

        this.mosterMgr = game.MosterManager.create();
        this['mosterContent'].addChild(this.mosterMgr);
        this.mosterMgr.setParentCtrl(this);

        this.uiCtrl = this['ui'].controller;
        this.uiCtrl.setParentCtrl(this);
        this.uiCtrl.setTime(this.maxSecond);

        this.touchLayerCtrl = this['touchlayer'].controller;

        //this.magicCircleCtrl = this['magiccircle'].controller;
        //
        //this.magicCircleCtrl.playTimeLine('magic');

        //var magicAction = this.createMagicAction();
        //var magic = cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("magiccircle/1.png"));
        //this.rootNode.addChild(magic);
        //var size = cc.winSize;
        //magic.setPosition(size.width / 2, size.height / 2);
        //magic.runAction(magicAction);


        // 秒针倒计时
        this.rootNode.schedule(this.onTimer, 1);


        //var numNode = game.AttackNumber.createNumber(12345);
        //this.rootNode.addChild(numNode);
        //numNode.setPosition(new cc.Point(cc.winSize.width / 2, cc.winSize.height / 2));


    },

    //-------------------------------------------------------------------------

    onTouchBegan : function(touch, event){

        //var pos = touch.getLocation();

        that.heroCtrl.attack(that.mosterMgr);


        return true;
    },

    changeMosterEffect : function(){
        this.changeMosterCtrl.changeMoster();
    },

    onAfterChangeMosterEffect : function(){
        this.mosterMgr.onAfterChangeMosterEffect();
    },

    createMagicAction:function(){
        var frames = [];
        for(var i = 1; i < 14; i++){
            var frame = cc.spriteFrameCache.getSpriteFrame("magiccircle/" + i + ".png");
            frames.push(frame);
        }
        var delay = 3 / 30;
        var anim  = cc.Animation.create(frames, delay);
        //cc.animationCache.addAnimation(anim, animation.name);
        var animate = cc.Animate.create(anim);

        return cc.repeatForever(animate);

    },

    onTimer:function(dt){
        that.maxSecond--;
        that.uiCtrl.setTime(that.maxSecond);
        if(that.maxSecond == 0){
            that.rootNode.unschedule(that.onTimer);
            cc.log("jiesuan.....");
            // TODO 结算
            //frame.SceneManager.runScene(game.gameworld.checkoutscene);

            var scene = cc.BuilderReader.loadAsScene(game.gameworld.checkoutscene);

            cc.director.runScene( cc.TransitionMoveInB.create(1, scene));
        }
    },


});

