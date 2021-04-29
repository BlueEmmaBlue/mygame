// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import gameMgr from "../gameMgr";
import HTTP from "../HTTP";
import {Api} from "../urlApi";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AppStart extends cc.Component {

    @property(cc.Node)
    bg :cc.Node=null;

    @property(cc.Node)
    lab: cc.Node=null;

    _lab:cc.Label=null;


    onLoad(){
        this._lab=this.lab.getComponent(cc.Label);
        this.lab.active=false;
        // this.scheduleOnce(()=>{
        //     this.bg.active=false;
        //     this.init();
        // },2)
    }

    init(){
        this.lab.active=true;
        // this._lab.string="正在链接服务器";
        // gameMgr.Instance.http=new HTTP();
        // this.getSevertInfo()
    }

    getSevertInfo(){
        let xhr=null;
        let complete=false;
        console.log(111);
        

        let fnRequest=function(){
            xhr=gameMgr.Instance.http.sendRequest(Api.get_serverInfo,null,(ret)=>{
                console.log(ret);
                xhr=null;
                complete=true;
                if(ret.version==null){
                    console.log("版本号获取失败");
                    this._lab.string="版本号获取失败";
                }else{
                    gameMgr.Instance.SI=ret;
                }
            });
            setTimeout(fn,5000);
        }

        let fn=function(){
            if(!complete){
                if(xhr){
                    xhr.abort();
                    this._lab="连接失败，即将重试"
                    setTimeout(()=>{
                        fnRequest()
                    },5000)
                }else{

                }
            }
        }
        
    }

    start () {}

    

    // update (dt) {}
}
