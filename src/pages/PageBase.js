import MyData from '../MyData';
export default class PageBase extends PIXI.Container {
    constructor() {
        super();
        // this.name = PageBase
    }
    update() {
        for (let i in this.gp) {
            this.gp[i].x = this.resource[i].left;
            this.gp[i].y = this.resource[i].top;
            this.gp[i].width = this.resource[i].width;
            this.gp[i].height = this.resource[i].height;
            this.gp[i].alpha = this.resource[i].alpha;
        }
    }
    In() {

    }

    Out() {

    }

    resize() {

    }
}