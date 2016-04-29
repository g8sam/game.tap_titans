/**
 * Created by zhaojm on 14/11/20.
 */
// game模块在本文件中进行组装初始化，也就是不能在其他文件中进行 new
game.init = function () {
    frame.log.trace('game.init');

    game.log = new frame.Log('game', 'DEBUG');
    game.gameworld = new game.GameWorld();

    cc.spriteFrameCache.addSpriteFrames(g_res.ui_plist, g_res.ui_png);
    cc.spriteFrameCache.addSpriteFrames(g_res.effect_plist, g_res.effect_png);
    cc.spriteFrameCache.addSpriteFrames(g_res.number_plist, g_res.number_png);
    //cc.spriteFrameCache.addSpriteFrames(g_res.loading_plist, g_res.loading_png);

    frame.registerController('game.GameSceneController', game.GameSceneController);
    frame.registerController('game.HeroController', game.HeroController);
    frame.registerController('game.ChangeMosterController', game.ChangeMosterController);
    frame.registerController('game.TableViewController', game.TableViewController);
    frame.registerController('game.TableViewCellController', game.TableViewCellController);
    frame.registerController('game.UIController', game.UIController);
    frame.registerController('game.TouchLayerController', game.TouchLayerController);
    frame.registerController('game.CheckoutController', game.CheckoutController);
    frame.registerController('game.HeroCheckoutController', game.HeroCheckoutController);
    frame.registerController('game.LoadingSceneController', game.LoadingSceneController);

};
