// Create web server   

// Import Module
const express = require('express');
const router = express.Router();
const commentController = require('--/controllers/comments.js')

// Handle Request
router.get('/',commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.get('/create', commentController.comment_create_post);
router.get('/:id/delete', commentController.comment_delete);
