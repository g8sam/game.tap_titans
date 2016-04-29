/**
 * Created by zhaojm on 14/11/17.
 */
game.TouchLayerController = frame.BaseNodeController.extend({


    that : null,
    _touchListener : null,


    onLoad:function(){
        // ccb加载完毕
        game.log.trace("game.UIController->onload");

        //cc.eventManager.addListener(this.touchListener, this.rootNode);
        this.setTouchEnabled(false);



    },


//-----------------------------------------------------------
    onTouchBegan : function(touch, event){

        return true;
    },

    setTouchEnabled:function (e) {
        if(this._touchListener)
            cc.eventManager.removeListener(this._touchListener);
        this._touchListener = null;
        if (!e) {
            //this._dragging = false;
            //this._touchMoved = false;
            //this._touches.length = 0;
        } else {
            var listener = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: true   ,       // true 为不向下传递
                onTouchBegan: this.onTouchBegan
            });
            this._touchListener = listener;
            cc.eventManager.addListener(listener, this.rootNode);
        }
    },



});

