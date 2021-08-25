const express = require('express');

const router = express.Router();
const postController = require('../controller/post_controller');

router.get('/likes',postController.likes);
router.get('/comment',postController.comment);
router.get('/share',postController.share);



module.exports = router;