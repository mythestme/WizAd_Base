const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

const usersList = require('./local/users_data.json');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/api/login',(req, res) => {
    let userName = req.body.email;
    let password = req.body.password;

    let user = usersList.find(user=> user.email=== userName && user.password === password);

    if (user) {
        res.status(200).json({ success: true });
    } else {
        res.statusCode = 401; res.json({ success: false });
    }
});

app.post('/api/signup', (req, res) => {
    let userName = req.body.email;
    let password = req.body.password;
    let newUser = {
        id: usersList[usersList.length-1].id + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        ip_address: req.body.ip_address,
        country: req.body.country,
        password: req.body.password
    }

    usersList.push(newUser);
    fs.writeFile('./local/users_data.json', JSON.stringify(usersList), (err) => {
        if (err){
            console.log(err);
            res.statusCode = 500;
            res.json({ success: false });
        }
        else {
             console.log('The file has been saved!');
             res.statusCode = 201;
             res.json({ success: true });
        }

    });
});

app.listen(7000, () => console.log('App listening on port 7000!'));