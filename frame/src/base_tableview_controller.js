/**
 * Created by zhaojm on 14/11/17.
 */
frame.BaseTableViewController = frame.BaseNodeController.extend({

    that : null,
    tableView : null,
    onInit: function() {
        frame.log.trace('frame.BaseTableViewController->onInit');
    },

    onDestroy:function(){
        frame.log.trace("frame.BaseTableViewController->onDestroy");
    },

    onLoad:function(){
        // ccb加载完毕
        frame.log.trace("frame.BaseTableViewController->onload");


        var size = this.rootNode.getContentSize();
        var tableView = cc.TableView.create(this, size);
        tableView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);
        tableView.x = 0;
        tableView.y = 0;
        tableView.setDelegate(this);
        this.rootNode.addChild(tableView);
        tableView.setVerticalFillOrder(cc.TABLEVIEW_FILL_TOPDOWN);
        //tableView.setTouchPriority();
        tableView._touchListener.swallowTouches = true;     // 设置触摸不向下传递
        tableView.reloadData();

        this.tableView = tableView;

    },

    // 刷新界面的内容
    onUpdate:function (model) {
        frame.log.trace('frame.BaseTableViewController->onUpdate');
    },

    setTableViewVisible:function(b){
        this.tableView.setVisible(b);
    },




//-------------------------------------------------------------------------------------

    scrollViewDidScroll:function (view) {
    },
    scrollViewDidZoom:function (view) {
    },

    tableCellTouched:function (table, cell) {
        cc.log("cell touched at index: " + cell.getIdx());
        return true;
    },
    //tableCellTouched2:function () {
    //    cc.log("cell touched at index: ");
    //},

    tableCellSizeForIndex:function (table, idx) {
        //return cc.size(600, 162);
    },

    tableCellAtIndex:function (table, idx) {

        var cell = table.dequeueCell();

        if (!cell) {
            cell = new cc.TableViewCell();
            var node = this.getCellNode();
            cell.addChild(node);
            cell.cellCtrl = node.controller;

        }

        cell.cellCtrl.setCellInfo(this.getCellInfoByIndex(idx));

        return cell;
    },

    numberOfCellsInTableView:function (table) {
        //return 3;
    },

//--------------------------------------------------------------------------------------------
    getCellNode : function(){
        //new frame.CCBHelper.getNodeFromCCBIFile(game.gameworld.gameRoot + 'res/ccbs/tableViewCell.ccbi');
    },

    getCellInfoByIndex : function(idx){

    },


});



