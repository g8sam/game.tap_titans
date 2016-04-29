/**
 * Created by zhaojm on 14/11/20.
 */
/** @expose */
window.io;
var socketIO = socketIO || window.io;
//cc.log("socketIO=", socketIO);
frame.SocketIOClient = cc.Class.extend({
    _socketIO:null,
    _sioClient:null,

    ctor:function(){
        frame.log.trace('frame.SocketIOClient->ctor');
        this._socketIO = socketIO;
        //frame.log.debug('frame.SocketIOClient->ctor, this._socketIO:', this._socketIO);
    },

    connect:function(host){
        frame.log.trace('frame.SocketIOClient->connect, host=', host);
        if (this._socketIO == null){
            frame.log.error('frame.SocketIOClient->, this._socketIO is null');
            return;
        }
        var sioclient = this._socketIO.connect(host, {
            //'reconnect': true,
            //'connect timeout':10000,
            //'reconnection delay':500,
            'reconnection limit':5, // defalut is 10
        });


        sioclient.on("connect", this.onconnect);// 连接成功
        sioclient.on('connecting', this.onconnecting);    // 正在连接
        sioclient.on("disconnect", this.ondisconnect); // 断开连接
        sioclient.on("connect_failed", this.onconnect_failed);    // 连接失败
        sioclient.on("error", this.onerror);          // 错误发生，并且无法被其他事件类型所处理
        sioclient.on("message", this.onmessage);
        sioclient.on('anything', this.onanything);    //
        sioclient.on('reconnecting', this.onreconnecting);
        sioclient.on('reconnect', this.onreconnect);
        sioclient.on('reconnect_failed', this.onreconnect_failed);

        this._sioClient = sioclient;

        //frame.log.debug('frame.SocketIOClient->connect, sioClient=' + this._sioClient);
    },

    disconnect:function(){
        frame.log.trace('frame.SocketIOClient->disconnect');
        if(this._sioClient != null) {
            this._sioClient.disconnect();
        }else{
            frame.log.warn('frame.SocketIOClient->disconnect, this._sioClient is null');
        }
    },

    emit:function(action, data, func){
        frame.log.trace('frame.SocketIOClient->emit, data=', data);
        if(this._sioClient != null) {
            this._sioClient.emit(action, data, func);
        }else{
            frame.log.error('frame.SocketIOClient->send, this._sioClient is null');
        }
    },
    send:function(data){
        frame.log.trace('frame.SocketIOClient->send, data=', data);
        if (this._sioClient != null) {
            this._sioClient.send(data);
        }else{
            frame.log.error('frame.SocketIOClient->send, this._sioClient is null');
        }
    },

    on:function(action, func){
        frame.log.trace('frame.SocketIOClient->on, action=', action);
        if(this._sioClient != null) {
            this._sioClient.on(action, func);
        }else{
            frame.log.warn('frame.SocketIOClient->send, this._sioClient is null');
        }
    },

    //on--------------------------------------------------------------------//
    onconnect:function(){
        frame.log.trace('frame.SocketIOClient->onconnect');
        frame.netMsgDispatcher.processMsg(frame.EventType.CONNECT);
    },
    onconnecting:function(){
        frame.log.trace('frame.SocketIOClient->onconnecting');
    },
    ondisconnect:function(){
        frame.log.trace('frame.SocketIOClient->ondisconnect');
        frame.netMsgDispatcher.processMsg(frame.EventType.DISCONNECT);
    },
    onconnect_failed:function(){
        frame.log.trace('frame.SocketIOClient->onconnect_failed');
    },
    onerror:function(){
        frame.log.trace('frame.SocketIOClient->onerror');
    },
    onmessage:function(message, callback){
        frame.log.trace('frame.SocketIOClient->onmessage, message=', message);
        frame.netMsgDispatcher.processMsg(frame.EventType.MESSAGE, message);
    },
    onanything:function(data, callback){
        frame.log.trace('frame.SocketIOClient->onanything, data=', data);
    },
    onreconnecting:function(){
        frame.log.trace('frame.SocketIOClient->onreconnecting');
    },
    onreconnect:function(){
        frame.log.trace('frame.SocketIOClient->onreconnect');
    },
    onreconnect_failed:function(){
        frame.log.trace('frame.SocketIOClient->onreconnect_failed');
    },

});




var test = function(){
    var socketIOClient = new frame.SocketIOClient();

    socketIOClient.connect('ws://tools.itharbors.com:4000');// is ok
    //socketIOClient.connect('ws://localhost:3000');

    socketIOClient.on('testevent', function(data){
        frame.log.trace('testevent, data=', data);
    });

    socketIOClient.send('test send');

    socketIOClient.emit('testevent', 'test event', function(data){
        frame.log.trace('testevent callback..data=', data);
    });

};

//test();

