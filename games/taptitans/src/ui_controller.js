/**
 * Created by zhaojm on 14/11/17.
 */
game.UIController = frame.BaseNodeController.extend({


    that : null,
    jineng_progress_list : [],
    bloodBar : null,

    onLoad:function(){
        // ccb加载完毕
        game.log.trace("game.UIController->onload");
        that = this;

        this.initProgressBar();
        this.initBloodBar();


        this.onCloseClicked();

    },


//-----------------------------------------------------------
    onRenwuClicked : function(){
        this['node_detail'].setVisible(true);
        //this['node_detail'].setEnabled(true);
        this['ccb_tableview'].controller.setTableViewVisible(true);
        frame.Utils.setBtnAllImg(this['btn_renwu'], 'btn_renwu_select.png');
        frame.Utils.setBtnAllImg(this['btn_jineng'], 'btn_jineng_normal.png');
    },

    onJinengClicked : function(){
        this['node_detail'].setVisible(true);
        //this['node_detail'].setEnabled(true);
        this['ccb_tableview'].controller.setTableViewVisible(true);
        frame.Utils.setBtnAllImg(this['btn_renwu'], 'btn_renwu_normal.png');
        frame.Utils.setBtnAllImg(this['btn_jineng'], 'btn_jineng_select.png');
    },

    onCloseClicked : function(){
        this['node_detail'].setVisible(false);
        //this['node_detail'].setEnabled(false);
        this['ccb_tableview'].controller.setTableViewVisible(false);
        frame.Utils.setBtnAllImg(this['btn_renwu'], 'btn_renwu_normal.png');
        frame.Utils.setBtnAllImg(this['btn_jineng'], 'btn_jineng_normal.png');
    },



    onJiNengIcon0Clicked : function(){
        this.parentCtrl.touchLayerCtrl.setTouchEnabled(true);
        this.parentCtrl.heroCtrl.bigattack0(this.parentCtrl.mosterMgr);
    },
    onJiNengIcon1Clicked : function(){
        this.parentCtrl.touchLayerCtrl.setTouchEnabled(true);
        this.parentCtrl.heroCtrl.bigattack1(this.parentCtrl.mosterMgr);
    },
    onJiNengIcon2Clicked : function(){
        // 攻击增强

    },
    onJiNengIcon3Clicked : function(){
        // 掉钱多

    },

    refreshBloodPercent : function(percent){
        this.bloodBar.setPercentage(percent * 100);
    },


    //----------------------------------------------
    // 功能函数--------------------------------------
    initBloodBar : function(){
        // 初始化可下注进度条
        var spr = cc.Sprite.createWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame('bloodline_red.png'));
        this.bloodBar = new cc.ProgressTimer(spr);
        this.bloodBar.setType(cc.ProgressTimer.TYPE_BAR);
        this.bloodBar.setMidpoint(cc.p(0, 0));
        this.bloodBar.setBarChangeRate(cc.p(1, 0));
        this.bloodBar.setPercentage(100);
        this.bloodBar.setPosition(cc.p(0, 0));
        this.bloodBar.setAnchorPoint(cc.p(0, 0));
        this['bloodLine'].addChild(this.bloodBar);
    },

    initProgressBar : function(){
        game.log.trace('game.UIController->initProgressBar');
        for(var i = 0; i < 4; i++){
            game.log.debug('index:->', i, 'icon_jineng_' + i, this['icon_jineng_' + i]);
            var pt = this.createProgressTimer('process_jineng.png', this['icon_jineng_' + i]);
            this.jineng_progress_list.push(pt);
        }

    },

    createProgressTimer: function (imgName, parentNode, zOrder) {
        var sprProgress = cc.Sprite.createWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame(imgName));
        // 初始化进度条
        var c = cc.color(46, 233, 21, 255);
        sprProgress.setColor(c);
        var pt = new cc.ProgressTimer(sprProgress);
        pt.setType(cc.ProgressTimer.TYPE_RADIAL);  // 扇形
        pt.setReverseDirection(true); //设置反方向进行旋转
        parentNode.addChild(pt);
        pt.setPosition(cc.p(0, 0));
        pt.setAnchorPoint(cc.p(0, 0));
        pt.setPercentage(100);  // 设置进度
        //if (typeof (zOrder) != "undefined")
        //    pt.setZOrder(zOrder);
        return pt;
    },

    // 开启进度条 旋转
    startProgressTimer: function (pt, time) {
        pt.setPercentage(100);  // 设置进度 100
        pt.getSprite().setColor(cc.color(46, 233, 21, 255));

        pt.runAction(
            cc.ProgressFromTo.create(time, 100, 0)
        );
        pt.getSprite().runAction(
            cc.Sequence.create(
                cc.TintTo.create(time * 0.3, 46, 233, 21),
                cc.TintTo.create(time * 0.2, 244, 255, 18),
                cc.TintTo.create(time * 0.2, 244, 153, 18),
                cc.TintTo.create(time * 0.3, 233, 21, 21)
            )
        );
    },

    stopProgressTimer: function (pt) {
        pt.getSprite().stopAllActions();
        pt.stopAllActions();
        pt.setPercentage(0);  // 设置进度 0
        pt.getSprite().setColor(cc.color(46, 233, 21, 255));
        pt.setColor(cc.color(46, 233, 21, 255));
    },


    setTime:function(second){
        cc.log("second=", second);
        cc.assert(second>=0 && second <= this.parentCtrl.maxSecond, "second error");

        var ge = second % 10;
        var ten = (second - ge) % 100 / 10;
        cc.log("T" + ten, "T" + ge);
        this['spr_num_ten'].setSpriteFrame(cc.spriteFrameCache.getSpriteFrame('T' + ten + '.png'));
        this['spr_num_ge'].setSpriteFrame(cc.spriteFrameCache.getSpriteFrame('T' + ge + '.png'));
    },




});

