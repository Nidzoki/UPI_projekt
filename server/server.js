import express from 'express'

import {getUserById, getUserSchedules, getUsers, getUserByMail, deleteUser, updateUser} from './database.js'

import {getScheduleById, getSchedules, getScheduleEvents} from './database.js'

import {getEventById, getEvents, getEventReminders} from './database.js'

import {getReminderById, getReminders} from './database.js'

const app = express()

app.use(express.json())

// USER API

app.get('/users', async (req, res) => { // gets all users
    res.send(await getUsers())
})

app.get('/users/searchById/:id', async (req, res) => { // gets specific user by ID
    const id = req.params.id
    res.send(await getUserById(id))
})

app.get('/users/searchByMail/:mail', async (req, res) => { // gets specific user by mail
    const mail = req.params.mail
    res.send(await getUserByMail(mail))
})

app.get('/users/:id/schedules', async (req, res) => { // gets all schedules created by specific user
    res.send(await getUserSchedules(req.params.id))
})

app.post('/users', async (req, res)=>{  // creates new user
    const {name, surname, mail, password, birthday, theme} = req.body
    if(getUserByMail(mail) === undefined) {
        res.status(201).send(await createUser(name, surname, mail, password, birthday, theme))
    }
    else{
        console.log("User already exists")
        res.status(200).send("User alreaday exists!")
    }
    
})

app.put('/users/updateUser/:id', async (req, res) => { // updates specific user 
    res.send(updateUser(req.params.id, req.body.name, req.body.surname, req.body.mail, req.body.password, req.body.birthday, req.body.theme))
})

//SCHEDULE

app.get('/schedules', async (req, res) => {
    res.send(await getSchedules())
})

app.get('/schedules/:id', async (req, res) => {
    res.send(await getScheduleById(req.params.id))
})

app.get('/schedules/:id/events', async (req, res) => { // gets all events of specific schedule
    res.send(await getScheduleEvents(req.params.id))
})

//EVENT

app.get('/events', async (req, res) => {
    res.send(await getEvents())
})

app.get('/events/:id', async (req, res) => {
    res.send(await getEventById(req.params.id))
})

app.get('/events/:id/reminders', async (req, res) => { // gets all reminders of specific event
    res.send(await getEventReminders(req.params.id))
})

//REMINDER

app.get('/reminders', async (req, res) => {
    res.send(await getReminders())
})

app.get('/reminders/:id', async (req, res) => {
    res.send(await getReminderById(req.params.id))
})



app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something broke!")
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})