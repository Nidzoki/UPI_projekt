import express from 'express'
import {getUserById, getUsers, getUserByMail} from './database.js'

const app = express()

app.use(express.json())

app.get('/users', async (req, res) => {
    res.send(await getUsers())
})

app.get('/users/searchbyid/:id', async (req, res) => {
    const id = req.params.id
    res.send(await getUserById(id))
})

app.get('/users/searchbymail/:mail', async (req, res) => {
    const mail = req.params.mail
    res.send(await getUserByMail(mail))
})

app.post('/users', async (req, res)=>{
    const {name, surname, mail, password, birthday} = req.body
    if(getUserByMail(mail) === undefined) {
        res.status(201).send(await createUser(name, surname, mail, password, birthday))
    }
    else{
        console.log("User already exists")
        res.status(200).send("User alreaday exists!")
    }
    
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something broke!")
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})