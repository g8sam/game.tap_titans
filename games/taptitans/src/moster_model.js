/**
 * Created by zhaojm on 15/2/13.
 */
game.MosterModel = frame.CommonModel.extend({

    model : null,
    parseModel : function(jsonObject){
        this.model = jsonObject;
    },

    getMosterBloodByIndex : function(index){
        game.log.debug("game.MosterModel->getMosterBloodByIndex  index:", index);
        cc.assert(index >= 0 && index < 4, "index error");
        return this.model["moster" + index]["blood"];
    },

});