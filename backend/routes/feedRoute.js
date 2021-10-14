'use strict';

// import packages and dependencies
const feedController  = require('../controllers/feedController');
const express = require('express');
const router = express.Router();

/**
 * [START GET FEEDS]
 * Retrieve all feeds
 */
router.get('/', feedController.getAll);
// [END GET FEEDS]

/**
 * [START GET FEEDS BY TAG]
 * Retrieve feeds by Tag.
 */
router.get('/:tag', feedController.getByTag);
// [END GET FEEDS BY TAG]

module.exports = router;