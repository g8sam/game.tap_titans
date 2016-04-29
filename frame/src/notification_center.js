//
//  notification_center.js
//  framework
//
//  Created by weitongming on 13-12-12.

//全局的事件监听模块，可用于对象之间的消息传递，所以没有提供构造函数
frame.NotificationCenter = (function(){
    var events = {},
    registerEvent = function(eName, handler, scope){
        events[eName] = events[eName] || [];
        events[eName].push({
            scope: scope || this,
            handler: handler
        });
    },
    removeEvent = function(eName, handler, scope){
        scope = scope || this;
        var fns = events[eName]

        if(!fns) 
            return;

        events[eName] = fns.filter(function(fn){
            return fn.scope!=scope || fn.handler!=handler
        });
    },
    // 
    triggerEvent = function(eventName,params){
        var fns = events[eventName],i,fn;
        
        if(!fns) {
          return;
        }
        // cc.log('12222222222');

        // for (var i = 0; i < params.length; i++) {
        //    cc.log("arg"+i+"  = "+ params[i]);
        // }

        for(i=0;fn=fns[i];i++){
            // fn.handler.apply(fns.scope, params||[]);
            // 用call直接把各个参数回调出去
            fn.handler.call(fn.scope, params);
        }
    };

    // 获取当前事件有多少个观察者
    var getObsCount = function( eventName) {
        events[eventName] = events[eventName] || [];
        return events[eventName].length;
    };

    return {
        listen: registerEvent,
        ignore: removeEvent,
        trigger: triggerEvent,
        count: getObsCount
    }
})();
