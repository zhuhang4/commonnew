import * as YR from './YR';
import MyData from './MyData';
import EditHomeContoller from './vuepages/EditHomeContoller';
import store from './store';
//pixi实现的页面
export default class PageEdit extends PIXI.Container {
    constructor() {
        super();
        this.control=EditHomeContoller.getInstance();
        this.arr_editable = [];
        this.currentTarget=null;
        this.control.add('PageEdit_In', this.pageChangeHandler.bind(this));
        this.control.add('PageEdit_UpdateUI', this.updateSpriteFromInput.bind(this));
    }
    //arr:包含resourceJson信息的数组
    init(arr) {
        this.arr = arr;
        for (let item of arr) {
            //即：this['Page1']=Page1 对象
            this[item.name] = item.target;
        }
        this.control.editUpdate({data:arr});
    }
    pageChangeHandler(e) {
        if (this.currentPage && this.currentPage.parent) {
            this.removeChild(this.currentPage);
        }
        this.currentPage =this[e.name];
        this.addChild(this.currentPage);
        //对所有子对象添加点击事件
        this.getChildren(this.currentPage);
    }

    updateSpriteFromInput()
    {
        console.log('updateSpriteFromInput:',this.currentPage);
        // this.currentPage.gp[name]
        this.currentPage.update();
    }
 
    getChildren(target) {
        let arr_child = target.children;
        if (arr_child && arr_child.length > 0) {
            for (let i = 0; i < arr_child.length; i++) {
                this.getChildren(arr_child[i]);
            }
        }
        else if (arr_child && arr_child.length == 0) {
            // if (target.editype == 'bt') {
                target.alpha = 1;
                target.removeAllListeners();
                target.interactive=true;
                target.on('pointerdown', () => {
                    if(this.currentTarget)
                    {
                        TweenMax.killTweensOf(this.currentTarget);
                        this.currentTarget.alpha = 1;
                    }
                    target.alpha = 1;
                    TweenMax.killTweensOf(target);
                    TweenMax.to(target, 0.5, { alpha: 0.0, repeat: -1, yoyo: true, ease: Cubic.easeInOut });
                    // this.control.fire('Vue_EditUpdateSingleBT', { id: target.editid, stat: '' });
                    let spriteInfo=store.getters.getSpriteInfo(target.name);
                    // console.log(spriteInfo);
                    // let info={
                    //     x:target.x,
                    //     y:target.y,
                    //     width:target.width,
                    //     height:target.height,
                    //     alpha:target.alpha,
                    // }

                    this.control.selectAndUpdateSpriteInfo(spriteInfo,target.name);
                    this.currentTarget=target;
                });
            // }
            // else {
            //     target.alpha = 0.5;
            // }
        }
    }
    resize() {
        console.log('resize');
    }
}