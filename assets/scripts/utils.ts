export default class Utils{
    //点击事件函数包装
    addClickEvent(node:cc.Node,target:cc.Node,component,handler){
        console.log(1112222);
        let eventHandeler: cc.Component.EventHandler=new cc.Component.EventHandler();
        eventHandeler.target=target;
        eventHandeler.handler=handler;
        eventHandeler.component=component;
        let clickEvent=node.getComponent(cc.Button).clickEvents;
        let isEvent=false;
        for(let i=0;i<clickEvent.length;i++){
            let event:cc.Component.EventHandler=clickEvent[i];
            if(event){
                if(event.component===null){
                    clickEvent.slice(i,1);
                }
                if(event.component===component&&event.target===target&&event.handler===handler){
                    isEvent=true;
                }
            }

            if(!isEvent){
                clickEvent.push(eventHandeler);
            }
        }
    }

    //增加预制体函数包装
    addPrefab(callback,parentNode:cc.Node,path,...arrComponent){
        console.log(path);
        cc.loader.loadRes(path,(err,prefab)=>{
            if(err){
                console.log(err);
                callback(false);
                return;
            }
            if(prefab===null){
                callback(false);
                return;
            }
            let node:cc.Node=cc.instantiate(prefab);
            if(arrComponent.length>0){
                for(let i=0;i<arrComponent.length;i++){
                    if(node.getComponent(arrComponent[i])===null){
                        node.addComponent(arrComponent[i]);
                    }
                }
            }
            parentNode.addChild(node);
            node.x=0;
            node.y=0;
            callback(true);
        })

       

    }
} 