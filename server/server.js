const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'upi_projekt'
    }
)

app.get('/', (req, res) => {return res.json("From backend side")});

app.get("/users", (req, res)=>{
    const sql = "SELECT * FROM users WHERE users.mail = \"markomaric@nekimail.com\"";
    db.query(sql, (err, data) => {
        if (err) { res.send(err); }
        else { res.send(data); }
    })
})


app.listen(8081, (req, res) => {
    console.log("listening on port 8081");
})