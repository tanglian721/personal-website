import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        show_hide: false
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {
        mobile() {
            if (screen.width < 1280) {
                return true
            } else {
                false
            }
        },
        project_toggle(state) {
            return state.show_hide
        },
    }
});