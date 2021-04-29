// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import gameMgr from "../gameMgr";

const {ccclass, property} = cc._decorator;


@ccclass
export default class Detail extends cc.Component {

    _detail:cc.Node=null;
    _paper:cc.Node=null;
    _btnClose:cc.Node=null;
    _alert:cc.Node=null;



    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        gameMgr.Instance.detail=this;
        this._detail=cc.find("Canvas/detail")
        this._paper=this._detail.getChildByName("paper");
        this._btnClose=this._paper.getChildByName("btn_close");
        this._btnClose.on(cc.Node.EventType.TOUCH_END,this.onBtnClick.bind(this));
        this._detail.active=false;
    }

    onBtnClick(){
        console.log('1111关闭');
        this._detail.active=!this._detail.active;
        this._alert=cc.find("Canvas/alert");
        this._alert.active=!this._alert.active;
    }

    start () {

    }

    // update (dt) {}
}
