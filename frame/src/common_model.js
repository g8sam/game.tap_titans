/**
 * Created by zhaojm on 14/11/20.
 */
frame.CommonModel = cc.Class.extend({

    ctor : function(jsonFile){
        var jsonObj = frame.FileHelper.readTxtFileToJsonObj(jsonFile);
        this.parseModel(jsonObj);
    },


    parseModel : function(jsonObject){

    },



});

