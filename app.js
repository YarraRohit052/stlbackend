const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");
const sensordataRoutes = require('./routes/sensordataRoutes');
const expDataRoutes = require("./routes/experimentdataRoutes");
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use("/api", sensordataRoutes);
app.use("/exp", expDataRoutes);

const port=process.env.PORT || 1000;

mongoose.set('strictQuery', false);
mongoose
    .connect(
        'mongodb+srv://streetlight:123aes456@cluster0.ujfpnve.mongodb.net/?retryWrites=true&w=majority'
    )
    .then((result) => {
        console.log("app is running...")
        app.listen(port);
    }).catch((err) => {
        console.log(err);
    })
