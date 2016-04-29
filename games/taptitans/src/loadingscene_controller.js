/**
 * Created by zhaojm on 14/11/17.
 */
game.LoadingSceneController = frame.BaseNodeController.extend({


    that : null,
    loadingBar : null,


    _className:"game.LoadingSceneController",
    onInit: function() {
        game.log.trace('game.LoadingSceneController->onInit');

        this.initWithResources(g_resources, function(){
            frame.SceneManager.runScene(game.gameworld.mainscene);
        });

    },



    onLoad:function(){
        // ccb加载完毕
        that = this;

        this.initLoadingBar();

        this.rootNode.schedule(this._startLoading, 0.3);


    },

    //-------------------------------------------------------------------------

    initWithResources: function (resources, cb) {
        if(cc.isString(resources))
            resources = [resources];
        this.resources = resources || [];
        this.cb = cb;
    },

    _startLoading: function () {
        var self = that;
        self.rootNode.unschedule(self._startLoading);
        var res = self.resources;
        cc.loader.load(res,
            function (result, count, loadedCount) {
                var percent = (loadedCount / count * 100) | 0;
                percent = Math.min(percent, 100);
                //self._label.setString("Loading... " + percent + "%");
                self.loadingBar.setPercentage(percent * 100);
            }, function () {
                if (self.cb)
                    self.cb();
            });
    },



    initLoadingBar : function(){
        // 初始化可下注进度条
        var spr = cc.Sprite.createWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame('loading1.png'));
        this.loadingBar = new cc.ProgressTimer(spr);
        this.loadingBar.setType(cc.ProgressTimer.TYPE_BAR);
        this.loadingBar.setMidpoint(cc.p(1, 0));
        this.loadingBar.setBarChangeRate(cc.p(1, 0));
        this.loadingBar.setPercentage(0);
        this.loadingBar.setPosition(cc.p(0, 0));
        this.loadingBar.setAnchorPoint(cc.p(0, 0));
        this.rootNode.addChild(this.loadingBar);
    },



});

