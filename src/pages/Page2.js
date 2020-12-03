import * as YR from "../YR";
import MyData from '../MyData';
import PageBase from "./PageBase";
import store from '@/store';
export default class Page2 extends PageBase{
    constructor()
    {
        super();
        this.name="Page2";
        this.con=new PIXI.Container();
        this.gp=YR.Easy.CreateJSONGroup(window.resource["Page2"],this.con);
        this.resource=store.state.resource[this.name];
        this.addChild(this.con);
    }
    
    In()
    {
        
    }

    Out()
    {

    }

    resize()
    {

    }
}