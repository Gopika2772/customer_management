// const db = require("../db");
// const bcrypt = require("bcrypt");


// const adminRegister = (req, res) => {
//     var q = "SELECT * FROM admin WHERE email = ? OR adminName = ? OR adminId=?";

//     db.query(q, [req.body.email, req.body.adminName, req.body.adminId], (err, data) => {
//         if (err) return res.status(500).json(err);
//         if (data.length) return res.status(409).json("Admin already exists!");


//         const salt = bcrypt.genSaltSync(10);
//         const hash = bcrypt.hashSync(req.body.password, salt);

//         q = "INSERT INTO admin(`adminName`,`email`,`password`) VALUES (?)";
//         const values = [req.body.adminName, req.body.email, hash];

//         db.query(q, [values], (err, data) => {
//             if (err) return res.status(500).json(err);
//             return res.status(200).json("Admin Authorized.");
//         });
//     });
// }

// const adminLogin = (req, res) => {
//     const query = "SELECT * FROM  admin WHERE adminId=? OR adminName=? "
//     db.query(q, [req.body.adminName, req.body.adminId], (err, data) => {
//         if (err) return res.status(500).json(err);
//         if (data.length === 0) return res.status(404).json("Admin not found!");

//         const isPasswordCorrect = bcrypt.compareSync(
//             req.body.password,
//             data[0].password
//         );
//         if (isPasswordCorrect(req.body.password)) {
//             res.status(200).json("Admin Logged in");
//         }

//         if (!isPasswordCorrect)
//             return res.status(400).json("Wrong  Admin username or password!");
//     });
// };

const db = require("../db");
const bcrypt = require("bcrypt");


const adminRegister = (req, res) => {
    var q = "SELECT * FROM admin WHERE email = ? OR adminName = ?";
    console.log(req.body);

    db.query(q, [req.body.email, req.body.adminName], (err, data) => {
        if (err) return console.log(err);
        // if (data.length) return res.json("User already exists!");
        if (data.length) return console.log(false);
        const salt = bcrypt.genSaltSync(2);
        const hash = bcrypt.hashSync(req.body.password, salt);

        q = "INSERT INTO admin(`adminName`,`email`,`password`) VALUES (?)";
        const values = [req.body.adminName, req.body.email, hash];

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            // return res.json("User has been created.");
            return res.json(data);
        });
    });
}

const adminLogin = (req, res) => {
    const q = "SELECT * FROM  admin WHERE email=?"
    console.log(req.body.email);
    db.query(q, [req.body.email], (err, data) => {
        console.log(data, "data");
        if (err) return console.log(err);
        // if (data.length === 0) return res.json("User not found!");
        if (data.length === 0) return res.json({ bool: false });

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );

        if (isPasswordCorrect) {
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
const updateUser = (req, res) => {

    const q =
        "UPDATE userdetails SET `username`=?,`email`=?,`address`=?,`phonenumber`=? `dob`=?";

    const values = [req.body.username, req.body.email, req.body.address, req.body.phonenumber, req.body.dob];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("updated user details");
    });
};

const deleteUser = (req, res) => {
    const q = "DELETE FROM user WHERE `email` = ?";

    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.status(403).json("Admin not deleted");

        return res.json("user deleted");
    });

};

module.exports = { adminRegister, adminLogin, updateUser, deleteUser }