const app = require('./settings/start');

const properties = require('./config/properties');
const port = process.env.PORT || properties.PORT;
// const db = require('./config/database');

app.listen(port, function () {
    console.log('Server is running on port ' + port);
});
