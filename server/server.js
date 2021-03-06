const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/rooms/:id', express.static(path.join(__dirname, '/../client/')));
require('./routes.js')(app);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
