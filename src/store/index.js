  import Vue from 'vue';
  import Vuex from 'vuex';
  import MyData from '@/MyData.js';
  Vue.use(Vuex)

  const debug = process.env.NODE_ENV !== 'production'

  export default new Vuex.Store({
    modules: {
      // menu,
    },
    strict: debug,
    state: {
      resource: require('@/static/resource.json'),
      currentPageName: '',
      currentPage: null,//当前选中的页面resource信息
      currentSprite: null,//当前选中的精灵resource信息
      currentSpriteName: '',
      videolist: [],
    },
    getters: {
      getSpriteInfo: (state) => (name) => {
        return state.resource[state.currentPageName][name];
      },

    },
    actions: {

    },
    mutations: {
      initPSDResource(resource) {
        state.resource = resource;
      },
      changePage(state,name) {
        state.currentPage = resource[name];
        state.currentPageName = name;
        console.log('mutations:切换页面:',state.currentPageName,state.currentPage);
      },
      changeSprite(state,name)
      {
        state.currentSprite=state.currentPage[name];
        state.currentSpriteName=name;
        console.log('mutations:切换精灵:',state.currentSpriteName,state.currentSprite);
      },
      updateSpriteInfo(state,data)
      {
        console.log(data);
        state.currentSprite=Object.assign(state.currentSprite,data);
        console.log('mutations:更新精灵信息:',state.currentSprite);
      },
      changeVideoInfo(state, payload) {
        // console.log('mutations:changeVideoInfo', payload)
        // state.videoInfo = {
        //   ...state.videoInfo,
        //   ...payload
        // }
      },

      addVideo(state, payload) {
        // console.log('mutations:addVideo', payload)
        // state.videolist.push(payload.vd);
      }
    }

  })