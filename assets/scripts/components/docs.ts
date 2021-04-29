// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import gameMgr from "../gameMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class docs extends cc.Component {

   

    onLoad () {
        this.initButton();
    }

    /** 绑定事件按钮 */
    initButton(){
        let node:cc.Node=cc.find("Canvas/scene_hall/bottom").getChildByName("zj");
        // this.initButtonHandler(node.getChildByName("shop"));
        // this.initButtonHandler(node.getChildByName("zj"));
        node.on(cc.Node.EventType.TOUCH_END,this.onBtnClick.bind(this))


    }

    initButtonHandler(node:cc.Node){
        console.log(111);
        gameMgr.Instance.utils.addClickEvent(node,this.node,"docs","onBtnClick");
    }

    onBtnClick(event:cc.Event){
        console.log(event.target.name);
        let node:cc.Node=cc.find("Canvas/alert");
        node.active=!node.active;
    }

    start () {

    }

    
}
