/**
 * Created by zhaojm on 14/11/20.
 */
game.GameWorld = cc.Class.extend({

    gameRoot : null,
    resPath : null,
    ccbPath : null,

    ctor:function(){
        game.log.trace('game.GameWorld->ctor');

        this.gameRoot = "games/taptitans/";
        //this.gameRoot = "";

        //this.resPath = this.gameRoot + "res/";              // debug
        this.resPath = "res/";                            // release

        this.ccbPath = this.resPath + 'ccbs/';
        this.jsonPath = this.resPath + 'json/';

        this.builderReaderResourcePath = this.resPath;
        cc.BuilderReader.setResourcePath(this.builderReaderResourcePath);


        this.mainscene = this.ccbPath + 'GameScene.ccbi';
        this.checkoutscene = this.ccbPath + 'Checkout.ccbi';
        this.loadingscene = this.ccbPath + 'LoadingScene.ccbi';

    },

    destroy:function(){

    },
});