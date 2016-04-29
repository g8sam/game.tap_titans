// 
//  networkMsgRouter.js
//  framework
//
//  Created by weitongming on 13-12-12.

// constructor
frame.NetworkMsgRouter = cc.Class.extend({
    dispatcher:{}, 

    ctor:function () { //  这个是真正的构造函数，真正的初始化一般是在init里面
        // this._super(); // 没有父类时不能调用这个函数，所有的函数要调用prototype中的同名函数时都可以使用_super 的方式
        // cc.log(" in ctor new NetworkMsgRouter");
        this.dispatcher = frame.NotificationCenter; // 直接借用NotificationCenter来实现，这样ui之间的事件和网络的事件都使用统一的分发代码

        // 手动调用
        this.init();
    },

    // init 函数必须手动去调用才有效
    init:function () { 
        
        // cc.log(" in ctor new NetworkMsgRouter");
    },

    // 默认的析构函数
    destroy:function () {
    	this.dispatcher = null;
    },

    // 参数以数组的形式提供
    processMsg: function(msg, argArr) {
    	// cc.log('processMsg');

    	this.dispatcher.trigger(msg, argArr);
	},

	registerMsg:function(msg, callback, obj){
		// cc.log("register Msg");
		this.dispatcher.listen(msg, callback, obj);
	},

	removeMsg: function(msg, callback, obj){
		// cc.log('remove listener')
        this.dispatcher.ignore(msg, callback, obj);
    }
});




// function TestObj()
// {
// 	this.datas = 'testdata';
// }

// // var datas = 7; 回调的参数是数组
// TestObj.prototype.onMsg = function(args)
// {
// 	cc.log('in TestObj onMsg' + this + ' ' + (this.datas));

//     var jsonObj = args[0];
//     cc.log("receive data:" + JSON.stringify(jsonObj));

//  //    for (var i = 0; i < args.length; i++) {
// 	//    cc.log("arg"+i+"  = "+ (args[i]));
// 	// }
// };

// var t = new TestObj;

// ty.netMsgDispatcher.registerMsg(ty.EventType.MSG_LOG_OUT, t.onMsg, t);

// netMsgRouter.processMsg('testMsg', ['one', 'twoArg', 'thirdArg']);







