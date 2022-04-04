const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();


const imagesRouter = require("./routes/api/images")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/images", imagesRouter);

const { DB_HOST, PORT = 3000 } = process.env;


mongoose.connect(DB_HOST)
    .then(() => app.listen(PORT))
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    })