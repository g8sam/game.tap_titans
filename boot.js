/**
 * Created by zhaojm on 15/2/5.
 */
// 全局资源列表
var g_resources = [];
var g_res = {};

//(function(){
//
//    var readTxtFile = function(filename){
//        if(cc.sys.isNative){
//            return jsb.fileUtils.getStringFromFile(filename);
//        }else{
//            return cc.loader._loadTxtSync(filename);
//        }
//    };
//
//    var readTxtFileToJsonObj = function(filename){
//        return JSON.parse(readTxtFile(filename));
//    };
//
//
//    var modules = [];
//    modules.push('frame/');
//    //modules.push('games/game/');
//    modules.push('games/taptitans/');
//
//
//
//    // 规定的模块json名称
//    var jsonFile = 'package.json';
//
//    for(var i = 0; i < modules.length; i++){
//
//        var module = readTxtFileToJsonObj(modules[i] + jsonFile);
//
//        var jsList = module['jsList'];
//        g_res = module['res'];
//
//
//        cc.log("module = ", modules[i], "jslist= ", jsList);
//
//        // 加载各个js文件
//        cc.loader.loadJsWithImg(modules[i], jsList, function (err) {
//            if (err) throw err;
//        });
//
//        cc.log("module = ", modules[i], "res= ", g_res);
//
//        // 将资源文件 添加进 g_resources
//        for (var j in g_res) {
//            //g_resources.push(modules[i] + g_res[j]);      // debug
//            g_resources.push(g_res[j]);                     // release
//        }
//    }
//
//})();



(function(){

    g_res = {
        "hero_model_json":"res/json/hero_model.json",
        "moster_model_json":"res/json/moster_model.json",

        "hero_plist" : "res/img/hero.plist",
        "hero_png" : "res/img/hero.png",
        "effect_plist" : "res/img/effect.plist",
        "effect_png" : "res/img/effect.png",
        "ui_plist" : "res/img/ui.plist",
        "ui_png" : "res/img/ui.png",
        "checkout_plist":"res/img/checkout.plist",
        "checkout_png":"res/img/checkout.png",
        "number_plist":"res/img/number.plist",
        "number_png":"res/img/number.png",
        "loading_plist":"res/img/loading.plist",
        "loading_png":"res/img/loading.png",

        "gamescenebg_jpg" : "res/img/gamescenebg.jpg",
        "checkoutbg_png" : "res/img/checkoutbg.png",

        "moster0_atlas" : "res/skeletons/guaiwu1.atlas",
        "moster0_json" : "res/skeletons/guaiwu1.json",
        "moster0_png" : "res/skeletons/guaiwu1.png",
        "moster1_atlas" : "res/skeletons/guaiwu-2.atlas",
        "moster1_json" : "res/skeletons/guaiwu-2.json",
        "moster1_png" : "res/skeletons/guaiwu-2.png",
        "moster2_atlas" : "res/skeletons/guaiwu-3.atlas",
        "moster2_json" : "res/skeletons/guaiwu-3.json",
        "moster2_png" : "res/skeletons/guaiwu-3.png",
        "moster3_atlas" : "res/skeletons/guaiwu-4-2.atlas",
        "moster3_json" : "res/skeletons/guaiwu-4-2.json",
        "moster3_png" : "res/skeletons/guaiwu-4-2.png"
    };

    //g_res = {
    //    "hero_model_json":"games/taptitans/res/json/hero_model.json",
    //    "moster_model_json":"games/taptitans/res/json/moster_model.json",
    //
    //    "hero_plist" : "games/taptitans/res/img/hero.plist",
    //    "hero_png" : "games/taptitans/res/img/hero.png",
    //    "effect_plist" : "games/taptitans/res/img/effect.plist",
    //    "effect_png" : "games/taptitans/res/img/effect.png",
    //    "ui_plist" : "games/taptitans/res/img/ui.plist",
    //    "ui_png" : "games/taptitans/res/img/ui.png",
    //
    //
    //    "background_jpg" : "games/taptitans/res/img/background.jpg",
    //
    //
    //    "moster0_atlas" : "games/taptitans/res/skeletons/guaiwu1.atlas",
    //    "moster0_json" : "games/taptitans/res/skeletons/guaiwu1.json",
    //    "moster0_png" : "games/taptitans/res/skeletons/guaiwu1.png",
    //    "moster1_atlas" : "games/taptitans/res/skeletons/guaiwu-2.atlas",
    //    "moster1_json" : "games/taptitans/res/skeletons/guaiwu-2.json",
    //    "moster1_png" : "games/taptitans/res/skeletons/guaiwu-2.png",
    //    "moster2_atlas" : "games/taptitans/res/skeletons/guaiwu-3.atlas",
    //    "moster2_json" : "games/taptitans/res/skeletons/guaiwu-3.json",
    //    "moster2_png" : "games/taptitans/res/skeletons/guaiwu-3.png",
    //    "moster3_atlas" : "games/taptitans/res/skeletons/guaiwu-4-2.atlas",
    //    "moster3_json" : "games/taptitans/res/skeletons/guaiwu-4-2.json",
    //    "moster3_png" : "games/taptitans/res/skeletons/guaiwu-4-2.png"
    //};

    for (var j in g_res) {
        //g_resources.push(modules[i] + g_res[j]);
        g_resources.push(g_res[j]);
    }

})();
















