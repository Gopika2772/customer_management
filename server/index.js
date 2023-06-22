const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require('./db');
const User = require("./routes/user.routes")
const Admin = require("./routes/admin.routes")

db.connect((err) => {
    if (err) {
        console.log("something went wrong");
    }
    else {
        console.log("mysql connected");
    }
})

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


app.use("/", User)
app.use("/", Admin)


app.listen(8080, () => {
    console.log("server running on 8080");
})



