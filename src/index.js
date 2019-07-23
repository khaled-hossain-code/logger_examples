const app = require('./config/express');

// listen to requests
app.listen(8010, () => console.info(`server started on port 8010`));

module.exports = app;