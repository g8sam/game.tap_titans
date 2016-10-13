


此项目基于cocosbuilder，TP，等封装的MVC, frame是基于cocos2d-js 封装的js框架，games基于frame的各个游戏。


当需要切换游戏时，需要修改如下几个地方：

    1.boot.js 内，各个模块的配置。

    2.index.html 中的 宽高

    3.main.js 中的 资源尺寸设置，初始化的游戏，起始运行的scene


新建controller 的步骤：

    1.新建controller文件继承frame.BaseNodeController

    2.将js文件加入packege.json jsList

    3.注册controller

    4.ccb中绑定controller

    5.应用此controller


