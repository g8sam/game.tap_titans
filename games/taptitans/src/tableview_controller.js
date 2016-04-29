/**
 * Created by zhaojm on 14/11/17.
 */
game.TableViewController = frame.BaseTableViewController.extend({

    tableModel : null,
//-------------------------------------------------------------------------------------

    scrollViewDidScroll:function (view) {
    },
    scrollViewDidZoom:function (view) {
    },

    tableCellTouched:function (table, cell) {
        cc.log("cell touched at index: " + cell.getIdx());
    },

    tableCellSizeForIndex:function (table, idx) {
        return cc.size(600, 162);
    },

    //tableCellAtIndex:function (table, idx) {
    //
    //    var cell = table.dequeueCell();
    //
    //    if (!cell) {
    //        cell = new cc.TableViewCell();
    //        var node = new frame.CCBHelper.getNodeFromCCBIFile(game.gameworld.gameRoot + 'res/ccbs/tableViewCell.ccbi');
    //        cell.addChild(node);
    //
    //
    //    }
    //
    //    return cell;
    //},

    numberOfCellsInTableView:function (table) {
        return 3;
    },

//-----------------------------------------------------------------------
    getCellNode : function(){
        var node = new frame.CCBHelper.getNodeFromCCBIFile(game.gameworld.ccbPath + 'tableViewCell.ccbi');
        return node;
    },

    getCellInfoByIndex : function(idx){
        var cellModel = null;
        return cellModel;
    },





});



