/**
 * Created by zhaojm on 14/11/18.
 */
frame.SceneManager = (function(){
    return {

        runScene: function(ccbiFileName) {
            frame.log.trace('frame.SceneManager->, ccbiFileName=', ccbiFileName);
            var scene = cc.BuilderReader.loadAsScene(ccbiFileName);
            cc.director.runScene(scene);
        },
        //replaseScene: function(ccbiFileName) {
        //    frame.log.trace('frame.SceneManager->, ccbiFileName=', ccbiFileName);
        //    var scene = cc.BuilderReader.loadAsScene(ccbiFileName);
        //
        //    cc.director.replaceScene(scene);
        //},

        pushScene: function(ccbiFileName) {
            frame.log.trace('frame.SceneManager->, ccbiFileName=', ccbiFileName);
            var scene = cc.BuilderReader.loadAsScene(ccbiFileName);

            cc.director.pushScene(scene);
        },

        popScene : function(){
            cc.director.popScene();
        },

    }
})();
