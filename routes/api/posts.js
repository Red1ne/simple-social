const express = require('express');
const router = express.Router();

//@route  GET api/posts
//@desc   Test Posts Route
//access  Public
router.get('/', (req, res) => res.send('Posts Route is working'));

module.exports = router;
