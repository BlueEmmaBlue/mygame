import Utils from "./utils";
import HTTP from "./HTTP";
import Alert from './components/alert';
import Detail from './components/detail';

export default class gameMgr{
    public static readonly Instance: gameMgr=new gameMgr();

    /** 版本信息 */
    SI=null;
    http:HTTP=null;
    utils:Utils=null;

    alert:Alert =null;
    detail:Detail=null;

    
}