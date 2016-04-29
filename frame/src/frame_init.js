/**
 * Created by zhaojm on 14/11/20.
 */
// frame模块在本文件中进行组装初始化，也就是不能在其他文件中进行 new
frame.init = function () {
    cc.log('frame.init');

    frame.log = new frame.Log('frame', 'DEBUG');
    frame.gameworld = new frame.GameWord();
    //frame.netMsgDispatcher  =  new frame.NetworkMsgRouter();
    //frame.sioclient = new frame.SocketIOClient();
    //frame.networkManeger = new frame.NetworkManager(frame.sioclient);

    //frame.sceneManager = new frame.SceneManager();


    //frame.sioclient.connect('ws://tools.itharbors.com:4000');
    //frame.sioclient.connect('ws://127.0.0.1:8888/game');
    //frame.sioclient.connect('ws://192.168.1.103:3000');
}

