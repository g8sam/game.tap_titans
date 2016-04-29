/**
 * Created by zhaojm on 14/11/20.
 */
game.GameWorld = cc.Class.extend({

    gameRoot : null,

    ctor:function(){
        game.log.trace('game.GameWorld->ctor');

        this.gameRoot = "games/game/";

        this.builderReaderResourcePath = this.gameRoot + "res/";
        cc.BuilderReader.setResourcePath(this.builderReaderResourcePath);


        this.mainscene = this.gameRoot + 'res/ccbs/GameScene.ccbi';
    },

    destroy:function(){

    },
});