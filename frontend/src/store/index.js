import Vue from 'vue'
import Vuex from 'vuex'
import feedApi from '@/services/feedApi';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feeds: [],
  },
  getters: {
    feeds: state => state.feeds,
    feedBYTag: state => tag => {
      return state.feeds.filter(feed => feed.tag === tag)
    },
  },
  mutations: {
    GET_FEEDS(state, feeds) {
			state.feeds = feeds;
		},
  },
  actions: {
    async getFeeds(context) {
			try {
				// TODO: check store for data
        if (context.state.feeds && !!context.state.feeds.length) return context.state.feeds;
        // TODO: make api call
        const { data } = await feedApi.getFeeds();
				context.commit('GET_FEEDS', data);
				return data;
			} catch (error) {
				// await context.dispatch('setMessage', { text: error.message, status: false });
				return;
			}
		},
		async getFeedsByTag(context, payload) {
			try {
        // TODO: make api call
        const { data } = await feedApi.getFeedsByTag(payload.keyword);
        context.commit('GET_FEEDS', data);
        return data;
      } catch (error) {
        // await context.dispatch('setMessage', {text: error.message || `Fetching failed!`, status: false});
        return;
      }
		},
  },
  modules: {
  }
})
