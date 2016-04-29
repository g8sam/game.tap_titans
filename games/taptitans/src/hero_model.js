/**
 * Created by zhaojm on 15/2/13.
 */
game.HeroModel = frame.CommonModel.extend({

    atkvalue0 : null,
    atkvalue1 : null,
    atkvalue2 : null,
    batkvalue0 : null,
    batkvalue1 : null,
    parseModel : function(jsonObject){
        this.atkvalue0 = jsonObject["attack0"]["atkValue"];
        this.atkvalue1 = jsonObject["attack1"]["atkValue"];
        this.atkvalue2 = jsonObject["attack2"]["atkValue"];
        this.batkvalue0 = jsonObject["bigattack0"]["atkValue"];
        this.batkvalue1 = jsonObject["bigattack1"]["atkValue"];
    },
});