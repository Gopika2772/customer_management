const db = require("../db");
const bcrypt = require("bcrypt");


const allUsers = (req, res) => {
    db.query("SELECT * FROM userdetails", (error, results) => {
        if (!error) {
            res.json(results)
        }
        else {
            console.log(error);
        }
    })
}


const userRegister = (req, res) => {
    var q = "SELECT * FROM userdetails WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return console.log(err);
        // if (data.length) return res.json("User already exists!");
        if (data.length) return res.json(false);

        const salt = bcrypt.genSaltSync(2);
        const hash = bcrypt.hashSync(req.body.password, salt);

        q = "INSERT INTO userdetails(`username`,`email`,`password`, `address`,`phonenumber`, `dob`) VALUES (?)";
        const values = [req.body.username, req.body.email, hash, null, null, null];

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.json("User has been created.");
            // return res.json(data);
        });
    });
}

const userLogin = (req, res) => {
    const q = "SELECT * FROM  userdetails WHERE email=?"
    console.log(req.body.email);
    db.query(q, [req.body.email], (err, data) => {
        console.log(data, "data");
        if (err) return res.status(500).json(err);
        // if (data.length === 0) return res.json("User not found!");
        if (data.length === 0) return res.json(false);

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );

        if (isPasswordCorrect) {
            console.log("s");
            // res.json("User Logged in");
            res.json({
                bool: true,
                data: data[0]
            });
        }
        else {
            res.json(false);
            // res.json("Wrong username or password!");
        }

        // if (!isPasswordCorrect) {
        //     console.log(err, "err");
        // }
    });
};

const singleUser = (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM userdetails WHERE user_id = ?", [id], (error, results) => {
        if (!error) {
            console.log(results);
            res.json(results)
        }
        else {
            console.log(error);
        }
    })
}

const update = (req, res) => {

    const id = req.params.id

    db.query("UPDATE userdetails SET `username`=?,`email`=?,`address`=?,`phonenumber`=?, `dob`= ? WHERE user_id = ?", [req.body.username, req.body.email, req.body.address, req.body.phonenumber, req.body.dob, id], (err, data) => {
        if (err) return console.log(err);
        // return res.json("updated user details");
        return res.json(data);
    });
};

const deleteUser = (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM userdetails WHERE user_id = ?", [id], (error, results) => {
        if (!error) {
            res.json("Deleted Successfully")
        }
        else {
            console.log(error);
        }
    })
}



module.exports = { userRegister, userLogin, update, singleUser, allUsers, deleteUser }