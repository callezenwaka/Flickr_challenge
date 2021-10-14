'use strict';

// import packages and dependencies
const axios = require('axios');

/**
 * [START GET FEEDS]
 * @param {object} req Cloud Function request context.
 * @param {object} res Cloud Function response context.
 * @param {object} next Cloud Function next context.
 * @return {object} json feeds
 * Retrieve and return feeds
 */
exports.getAll = async (req, res, next) => {
    const API_URL = `https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&nojsoncallback=1`;
    try {
        const { data } = await axios.get(API_URL);
        
        res.json(data ? data.items : {});
        
    } catch (e) {
        // console.log(e);
        res.json(e);
    }
}
// [END GET FEEDS]

/**
 * [START GET FEEDS BY TAG]
 * @param {object} req Cloud Function request context.
 * @param {object} res Cloud Function response context.
 * @param {object} next Cloud Function next context.
 * @return {object} json feeds
 * Retrieve and return feeds by tag
 */
exports.getByTag = async (req, res, next) => {
	const API_URL = `https://api.flickr.com/services/feeds/photos_public.gne?tags=${req.params.tag}&tagmode=any&lang=en-us&format=json&nojsoncallback=1`;
    try {
        const { data } = await axios.get(API_URL);
        
        res.json(data ? data.items : {});
        
    } catch (e) {
        // console.log(e);
        res.json(e);
    }
}
// [END GET FEEDS BY TAG]