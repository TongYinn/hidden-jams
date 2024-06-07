const express = require('express');
const cors = require('cors');
const artistRoutes = require('./routes/artistRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api/artists', artistRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
