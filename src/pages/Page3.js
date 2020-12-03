import * as YR from "../YR";
import MyData from '../MyData';
import store from '@/store';
export default class Page3 extends PIXI.Container{
    constructor()
    {
        super();
        this.name="Page3";
        this.con=new PIXI.Container();
        this.gp=YR.Easy.CreateJSONGroup(window.resource["Page3"],this.con);
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