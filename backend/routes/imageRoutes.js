// routes/imageRoutes.js

const express = require('express');
const router = express.Router();
const { likeImage, getLikeCount, setUserPrivateKey } = require('./Controllers/imageController');

// Route to set the user's address (to be called when connecting MetaMask)
// router.post('/setUserPrivateKey', (req, res) => {
//     const { address } = req.body;
//     setUserPrivateKey(address); // Set user address in the controller
//     res.json({ success: true });
// });

// Route to like an image
router.post('/like', likeImage);

// Route to get the like count
router.get('/like/:imageId', getLikeCount);

module.exports = router;
