/**
 * Created by zhaojm on 14/11/18.
 */
frame.CCBHelper = (function(){
    return {

        getNodeFromCCBIFile: function(ccbiFileName) {
            frame.log.trace('frame.CCBHelper->, ccbiFileName=', ccbiFileName);
            var getNode = cc.BuilderReader.load(ccbiFileName);
            return getNode;
        },

    }
})();
