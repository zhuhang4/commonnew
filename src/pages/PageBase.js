import MyData from '../MyData';
import store from '@/store';
export default class PageBase extends PIXI.Container {
    constructor() {
        super();
        // this.name = PageBase
    }
    update() {
        let res=store.getters.getResource[this.name];
        for (let i in this.gp) {
            let sp=this.gp[i];
            // sp.alpha = res[i].alpha;
            sp.width = res[i].width;
            sp.height = res[i].height;
            sp.anchor.set(res[i].pivot.x,res[i].pivot.y);
            sp.x=Number(res[i].left)+sp.width*res[i].pivot.x;
            sp.y=Number(res[i].top)+sp.height*res[i].pivot.y;
        }
    }
    changePivot(target,x,y)
    {

        Z_ASCII




        
       
    }
    changeImage()
    {
        // this.gp[i].texture
    }
    In() {

    }

    Out() {

    }

    resize() {

    }
}