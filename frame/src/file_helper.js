/**
 * Created by zhaojm on 14/12/1.
 */
frame.FileHelper = (function(){
  return {
      readTxtFile:function(filename){
          cc.log('frame.FileHelper->readTxtFile, isNative=', cc.sys.isNative);
          if(cc.sys.isNative){
              return jsb.fileUtils.getStringFromFile(filename);
          }else{
              return cc.loader._loadTxtSync(filename);
          }
      },

      readTxtFileToJsonObj:function(filename){
          return JSON.parse(this.readTxtFile(filename));
      },
  }
})();

var test = function(){
    var jsonObj = frame.FileHelper.readTxtFileToJsonObj('res/shilaimudongzuo.json');
    cc.log('jsonObj=', jsonObj);
};
//test();