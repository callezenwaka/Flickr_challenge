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
				// TODO: api call
        if (context.state.feeds && !!context.state.feeds.length) return context.state.feeds;
        
        const { data } = await feedApi.getFeeds();
        console.log(data);
				context.commit('GET_FEEDS', data);
				return data;
			} catch (error) {
				await context.dispatch('setMessage', { text: error.message, status: false });
				return;
			}
		},
		async getFeedsByTag(context, payload) {
			try {
        // TODO: check vuex store for data
        // const feeds = context.getters.getFeedBYTag(payload.keyword);
        // if (feeds) return context.commit('GET_FEEDS', feeds);
        console.log(payload.keyword)
        // TODO: else make api call
        const { data } = await feedApi.getFeedsByTag(payload.keyword);
        console.log(data);
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
