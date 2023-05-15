const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const morgan = require('morgan')
const mongoose = require('mongoose');
// https://mongoosejs.com/docs/queries.html
const cors = require('cors');

app.use(morgan('tiny'))

// configure cors
app.use(cors());

// configure dotEnv
dotEnv.config({ path: './config/config.env' });

// configure express to receive the form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.get('/', (request, response) => {
    response.send(`<h2>Welcome to BigBasket Express Server</h2>`);
});
// configure the router
//app.use('/api', require('./router/productRouter'));
app.use("/user", require("./router/userRouter"))
// connect to Mongo DB Database
mongoose.connect(process.env.MONGO_DB_LOCAL_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then((response) => {
    console.log(`Connected to Mongo DB Successfully...........`);
}).catch((err) => {
    console.error(err);
    process.exit(1); // stop the node js process if unable to connect to mongodb
});



app.listen(port, hostname, () => {
    console.log(`Express Server is Started at http://${hostname}:${port}`);
});
