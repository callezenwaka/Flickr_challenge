'use strict'

import { API_URL, util } from '@/services/Api'

export default {
  async getFeeds() {
    /** get feeds */
		return await util(`${API_URL}feeds/`, 'get');
  },
  
  async getFeedsByTag(tag) {
    /** get feeds by tag */
		return await util(`${API_URL}feeds/${tag}`, 'get');
	},
}