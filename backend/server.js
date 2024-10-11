// server.js
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const imageRoutes = require('./routes/imageRoutes');
require('dotenv').config();

const app = express();
app.use(cors()); 

const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use('/api/images', imageRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
