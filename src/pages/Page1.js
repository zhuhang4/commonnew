import * as YR from "../YR";
import MyData from '../MyData';
import store from '@/store';
import PageBase from "./PageBase";
export default class Page1 extends PageBase{
    constructor()
    {
        super();
        this.name="Page1";
        this.con=new PIXI.Container();
        this.gp=YR.Easy.CreateJSONGroup(window.resource["Page1"],this.con);
        this.resource=store.state.resource[this.name];
        this.addChild(this.con);
    }
    
}