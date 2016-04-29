/**
 * Created by zhaojm on 15/2/11.
 */
frame.Utils = (function(){
    return {
        setBtnAllImg : function (button, imgName) {
            button.setNormalImage(cc.Sprite.createWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame(imgName)));
            button.setSelectedImage(cc.Sprite.createWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame(imgName)));
            button.setDisabledImage(cc.Sprite.createWithSpriteFrame(cc.spriteFrameCache.getSpriteFrame(imgName)));
        },
    }
})();