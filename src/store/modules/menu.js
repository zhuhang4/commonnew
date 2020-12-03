const state = {
    currentpage: null,
    list: [{
            idx: '0',
            name: '滤镜',
            icon_class: 'el-icon-magic-stick'
        },
        {
            idx: '1',
            name: '图形',
            icon_class: 'el-icon-edit'
        },
        {
            idx: '2',
            name: '贴纸',
            icon_class: 'el-icon-picture-outline-round'
        },
        {
            idx: '3',
            name: '声音',
            icon_class: 'el-icon-microphone'
        },
        {
            idx: '4',
            name: '剪辑',
            icon_class: 'el-icon-scissors'
        },
    ]
}
const getters = {
    currentPageName: (state) => {
        return state.currentpage.name
    },
    currentPageIdx: (state) => {
        if (state.currentpage) {
            return state.currentpage.idx;
        } else {
            return -1;
        }
    }
}
const actions = {

}
const mutations = {
    changepage(state, idx) {
        let page = state.list.find((e) => {
            return e.idx == idx
        });
        if (!page) {
            console.log('mutations::::::::::未找到指定页面')
        } else {
            name = page.name;
        }
        state.currentpage = page;
        console.log('mutations::::::::::改变功能页', page.name);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}