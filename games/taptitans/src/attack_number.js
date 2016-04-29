/**
 * Created by zhaojm on 15/3/3.
 */
game.AttackNumber = {
    createNumber : function(num){

        var node = cc.Node.create();
        node.setContentSize(new cc.Size(200, 80));

        var a = num;

        var spriteList = [];
        //var numlist = [];


        while(a > 0){
            var n = a % 10;
            //numlist.push(n);

            a = (a - n) / 10;

            cc.log(n);

            var s = cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame('hong' + n + '.png'));
            node.addChild(s);
            s.setAnchorPoint(new cc.Point(0, 0));
            var p = new cc.Point(0, 0);
            if(spriteList.length != 0){
                var lastSprite = spriteList[spriteList.length - 1];
                p = lastSprite.getPosition() + lastSprite.getContentSize();
            }
            s.setPosition(p);
            spriteList.push(s);

        }


        return node;
    },

};