import { createStore } from 'vuex';

export default createStore({
  state: {
    presentViewData:[],  //当前预览区数据
    presentIndex:0,   //当前点击/样式组件显示的样式
    presentStyle:{
        //当前样式
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
});
