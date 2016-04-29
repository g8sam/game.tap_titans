/**
 * Created by zhaojm on 14/11/20.
 */

frame.registerController = function(controllerName, controllerClass){
    frame.log.trace('frame.registerController, controllerName=', controllerName);

    // 由于cc.BuilderReader 的注册函数是直接注册的dict，在里面封装了创建cc.Class的过程，这样不利于实现继承，所以将创建Class的过程拿到外面，封装自己的注册函数
    cc.BuilderReader._controllerClassCache[controllerName] = controllerClass;
};
