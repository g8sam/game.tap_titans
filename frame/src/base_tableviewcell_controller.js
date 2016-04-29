/**
 * Created by zhaojm on 14/11/17.
 */
frame.BaseTableViewCellController = frame.BaseNodeController.extend({

    that: null,

    onInit: function () {
        frame.log.trace('frame.BaseTableViewCellController->onInit');



    },

    onDestroy: function () {
        frame.log.trace("frame.BaseTableViewCellController->onDestroy");
    },

    onLoad: function () {
        // ccb加载完毕
        frame.log.trace("frame.BaseTableViewCellController->onload");

    },

    // 刷新界面的内容
    onUpdate: function (model) {
        frame.log.trace('frame.BaseTableViewCellController->onUpdate');
    },


//-------------------------------------------------------------------------------------

    setCellInfo : function(model){

    },

});



