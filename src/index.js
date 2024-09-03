const express = require('express');
const bodyparser = require('body-parser');
const apiRouter = require('./routes');
const {PORT} = require('./config/server.config');
const connectToDB = require('./config/db.config');

const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(bodyparser.text());

console.log("Routing for /api");
app.use('/api', apiRouter);

app.listen(PORT, async () => {
    console.log(`server started at port: ${PORT}`);
    await connectToDB();
})

