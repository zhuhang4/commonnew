import * as YR from '@/YR';
import EventDispatcher from './EventDispatcher.js';
import store from '../store';
export default class EditHomeContoller extends EventDispatcher {
    constructor() {
        super();
    }
    static getInstance() {
        if (!EditHomeContoller.instance) {
            EditHomeContoller.instance = new EditHomeContoller();
        }
        return EditHomeContoller.instance;
    }
    //更新Vue页面
    editUpdate(payload)
    {
        this.fire("Vue_EditUpdate",payload);
    }
    //选中精灵，并通知更新
    selectAndUpdateSpriteInfo(spriteInfo,name)
    {
        this.fire('Vue_EditUpdateSingleBT',{info:spriteInfo});
        store.commit('changeSprite',name)
    }
    inputAndUpdateSpriteInfo(spriteInfo)
    {
        store.commit('updateSpriteInfo',spriteInfo)
        this.fire('PageEdit_UpdateUI',{info:spriteInfo});
    }

    //更新pixi页面
    changePage(name) {
        this.fire("PageEdit_In", {name:name});
        store.commit('changePage',name)
    }
}