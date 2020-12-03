export default class EventDispatcher {
    constructor() {
        this.handleFunc = {};
    }

    add(type, func) {
        if (this.handleFunc[type]) {
            if (this.handleFunc[type].indexOf(func) === -1) {
                this.handleFunc[type].push(func);
            }
        } else {
            this.handleFunc[type] = [func];
        }
    };

    fire(type, e) {
        let target = this.handleFunc[type];
        if (target) {
            let count = target.length;
            for (var i = 0; i < count; i++) {
                target[i](e);
            }
        } else {
            console.log(type + '事件尚未加入监听');
        }

    };

    remove(type, func) {
        try {
            let target = this.handleFunc[type];
            let index = target.indexOf(func);
            if (index === -1) throw error;
            target.splice(index, 1);
        } catch (e) {
            console.error('别老想删除我有的东西！');
        }

    };

    once(type, func) {
        this.fire(type, func) ? this.remove(type, func) : null;
    }
}