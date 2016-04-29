/**
 * Created by zhaojm on 14/11/20.
 */
game.init = function () {
    frame.log.trace('game.init');

    game.log = new frame.Log('game', 'DEBUG');
    game.gameworld = new game.GameWorld();

    frame.registerController('game.GameSceneController', game.GameSceneController);
    frame.registerController('game.NodeController', game.NodeController);


    //game.log.debug(frame.gameworld.builderReaderResourcePath + 'img/game.plist');
    //game.log.debug(frame.gameworld.builderReaderResourcePath + 'img/game.png');
    //cc.spriteFrameCache.addSpriteFrames(
    //    //ccs.spriteFrameCacheHelper.addSpriteFrameFromFile(
    //    frame.gameworld.builderReaderResourcePath + 'img/game.plist', frame.gameworld.builderReaderResourcePath + 'img/game.png'
    //);
};
