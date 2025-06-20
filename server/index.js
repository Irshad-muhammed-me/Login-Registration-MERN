const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeModel = require("./models/Empoloye");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employe");

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json('Success');
                } else {
                    res.json('No Record Existed');
                }
            } else {
                res.json('No Record Existed');
            }
        })
        .catch(err => res.json(err));
});

app.post('/register', (req, res) => {
    EmployeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
