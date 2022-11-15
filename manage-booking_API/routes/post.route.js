const express = require('express');

const router = express.Router();

const postController = require('../controllers/post.controller');

router.route('/getAll').get(postController.getAll);
router.route('/:id').get(postController.getPostById);
router.route('/addPost').post(postController.addPost);

module.exports = router;