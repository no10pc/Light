//--对话框辅助对象-begin
DialogHelper = function() {
    var m_title = ""; //设置标题
    var m_msg = ""; //设置消息正文
    var m_btns = null; //设置按钮
    this.dlgDiv = $("<div><p><span class=\"ui-icon ui-icon-alert\" style=\"float: left; margin: 0 7px 20px 0;\"></span></p></div>"); //这部分可根据情况自定义
    //todo:图标、高度、宽度、弹出模式等都应该可以设置。
    this.set_Title = function(val) {
        this.m_title = val;
    }
    this.get_Title = function() {
        return this.m_title;
    }
    this.set_Msg = function(val) {
        this.m_msg = val;
    }
    this.get_Msg = function() {
        return this.m_msg;
    }
    this.set_Buttons = function(val) {
        this.m_btns = val;
    }
    this.get_Buttons = function() {
        return this.m_btns;
    }
    this.open = function() {
        $dlg = this.dlgDiv.clone(); //这个克隆很重要,否则反复添加正文。
        $dlg.children().filter("p").html(this.dlgDiv.children().filter("p").html() + this.get_Msg()); //增加自定义消息
        $dlg.dialog({
            autoOpen: true,
            show: 'blind',
            hide: 'explode',
            position: 'center',
            height: 260,
            width: 460,
            modal: true,
            title: this.get_Title(),
            buttons: this.get_Buttons()
        });
    }
    //todo:考虑是否有内存泄露的可能    
}
//--对话框辅助对象-end