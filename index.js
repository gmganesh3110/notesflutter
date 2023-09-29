const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const morgan = require('morgan');
const path = require('path')
const { default: mongoose } = require('mongoose');
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api", require('./routes/notesRoutes.js'));
app.use(express.static(path.join(__dirname, './build')))
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './build/web/index.html'))
})
mongoose
    .connect(process.env.DATABASE)
    .then(() => {
        console.log("Database Connected");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });
app.listen(process.env.PORT, () => {
    console.log('Port Connected')
});