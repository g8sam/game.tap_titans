/**
 * Created by zhaojm on 14/11/20.
 */

frame.Log = cc.Class.extend({

    level:0,
    tag:'',

    ctor:function(tag, level){
        this.levelMap = {
            'DEBUG':0,
            'TRACE':1,
            'INFO':2,
            'WARN':3,
            'ERROR':4,
            'NONE':5,
        };

        this.tag = tag || 'frame';

        this.level = this.levelMap[level] || this.levelMap['DEBUG'];

        cc.log('frame.Log->ctor, tag=', tag, 'level=', level);
    },

    _isNeedLog:function(type){
        if(type in this.levelMap){
            return this.levelMap[type] >= this.level;
        }
        return false;
    },

    closeAllLog:function(){
        this.level = this.levelMap['NONE'] || 5;
    },

    setLogLevel:function (strLevel) {
        this.level = this.LevelMap[strLevel] || 2; // 默认是2
    },

    setLogTag:function(tag){
          this.tag = tag || 'frame';
    },

    _Log:function(type, args){

        if (this._isNeedLog(type)){
            // 统一日志格式
            var curDate = new Date();
            var day = curDate.getFullYear() + '-' + (curDate.getMonth() + 1) + '-' + curDate.getDate();
            var curTime = curDate.toLocaleTimeString() + ':' + curDate.getMilliseconds();

            var msg = '';
            for(var i=0;i<args.length;i++){
                msg += ' ' + args[i];
            }

            var str = '[' + day + ' '+ curTime + '][<' + this.tag + '><' + type + '>]\t' + msg + '\n';

            cc.log(str);

        }

    },

    destroy:function(){
        delete this.levelMap;
    },

    debug:function(){
        this._Log('DEBUG', arguments);
    },

    trace:function(){
        this._Log('TRACE', arguments);
    },

    info:function(){
        this._Log('INFO', arguments);
    },

    warn:function(){
        this._Log('WARN', arguments);
    },

    error:function(){
        this._Log('ERROR', arguments);
    },

});

var test = function(){
    var _Log = new frame.Log('game', 'INFO');
    _Log.debug('debug');
    _Log.info('info');
    _Log.error('error', 'error', 'error', 'error');
    _Log.warn('warn');
    _Log.trace('trace');
    _Log.debug('debug', 'debug', 'debug');
};

//test();