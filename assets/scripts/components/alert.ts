// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import gameMgr from "../gameMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Alert extends cc.Component {

   
    // LIFE-CYCLE CALLBACKS:
    _alert:cc.Node=null;
    _title1:cc.Label=null;
    _title2:cc.Label=null;
    _title3:cc.Label=null;
    _title4:cc.Label=null;
    _btnOk:cc.Node=null;
    _btnFx:cc.Node=null;
    _btnCallback=null;
    _detail:cc.Node=null;
    onLoad () {
        gameMgr.Instance.alert=this;
        this._alert=cc.find("Canvas/alert");
        console.log(alert,"----");
        this._title1=this._alert.getChildByName("event1").getComponent(cc.Label);
        this._title2=this._alert.getChildByName("event2").getComponent(cc.Label);
        this._title3=this._alert.getChildByName("event3").getComponent(cc.Label);
        this._title4=this._alert.getChildByName("event4").getComponent(cc.Label);
        this._btnOk=this._alert.getChildByName("btn_qd");
        this._btnFx=this._alert.getChildByName("btn_fx");

        this._btnOk.on(cc.Node.EventType.TOUCH_END,this.onBtnClick.bind(this))
        this._btnFx.on(cc.Node.EventType.TOUCH_END,this.onBtnClick1.bind(this))

    }

    onBtnClick(){
        if(this._btnCallback){
            this._btnCallback();
        };
        this._alert.active=false;
    }

    onBtnClick1(){
        if(this._btnCallback){
            this._btnCallback();
        };
        this._detail=cc.find("Canvas/detail");
        this._detail.active=true;
        this._alert.active=false;
    }
    /**
     * 
     * @param title 标题
     * @param content 内容
     * @param callback 确认回调
     * 显示弹出框
     */
    show(title1,title2,title3,title4,callback){
        this._title1.string=title1;
        this._title2.string=title2;
        this._title3.string=title3;
        this._title4.string=title4;
        if(callback){
            this._btnCallback=callback;
        }
        this._alert.active=true;

    }

    start () {

    }

    // update (dt) {}
}
