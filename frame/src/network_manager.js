/**
 * Created by zhaojm on 14/11/21.
 */
frame.NetworkManager = cc.Class.extend({
    isoclient:null,
    ctor:function(isoClient){
        this.isoclient = isoClient;
        frame.netMsgDispatcher.registerMsg(frame.EventType.CONNECT, this.onCONNECT);
        frame.netMsgDispatcher.registerMsg(frame.EventType.DISCONNECT, this.onDISCONNECT);
        frame.netMsgDispatcher.registerMsg(frame.EventType.MESSAGE, this.onMESSAGE);
    },

    destroy:function(){
        frame.netMsgDispatcher.removeMsg(frame.EventType.CONNECT, this.onCONNECT);
        frame.netMsgDispatcher.removeMsg(frame.EventType.DISCONNECT, this.onDISCONNECT);
        frame.netMsgDispatcher.removeMsg(frame.EventType.MESSAGE, this.onMESSAGE);
    },

    onCONNECT:function(){
        frame.log.trace('frame.NetworkManager->onCONNECT');
    },
    onDISCONNECT:function(){
        frame.log.trace('frame.NetworkManager->onDISCONNECT');
    },
    onMESSAGE:function(message){
        frame.log.trace('frame.NetworkManager->onMESSAGE, message=', message);
    },



});