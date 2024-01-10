import express from 'express'

import {getUserById, getUserSchedules, getUsers, getUserByMail, createUser,deleteUser, updateUser} from './database.js'

import {getScheduleById, getSchedules, getScheduleEvents, createSchedule} from './database.js'

import {getEventById, getEvents, getEventReminders} from './database.js'

import {getReminderById, getReminders} from './database.js'

const serverResponse_OK = 200
const serverResponse_Created = 201
const serverResponse_NotFound = 404
const serverResponse_Conflict = 409
const serverResponse_Gone = 410

const app = express()

app.use(express.json())

// USER API --> SOLVED COMPLETELY

app.get('/users', async (req, res) => { // gets all users --> solved
    
    res.status(serverResponse_OK).send(await getUsers())
})

app.get('/users/searchById/:id', async (req, res) => { // gets specific user by ID --> solved
    
    const user = await getUserById(req.params.id)

    if(user === undefined){
        res.status(serverResponse_NotFound).send(user)
    }
    else{
        res.status(serverResponse_OK).send(user)
    }
})

app.get('/users/searchByMail/:mail', async (req, res) => { // gets specific user by mail --> solved
    
    const user = await getUserByMail(req.params.mail)

    if(user === undefined){
        res.status(serverResponse_NotFound).send(user)
    }
    else{
        res.status(serverResponse_OK).send(user)
    }
    
})

app.get('/users/:id/schedules', async (req, res) => { // gets all schedules created by specific user --> solved
    
    const schedules = await getUserSchedules(req.params.id)

    if(schedules.length === 0){
        res.status(serverResponse_NotFound).send(schedules)
    }
    else{
        res.status(serverResponse_OK).send(schedules)
    }
})

app.post('/users', async (req, res)=>{  // creates new user --> solved

    const {name, surname, mail, password, birthday, theme} = req.body
    
    if(await getUserByMail(mail) === undefined) {
        res.status(serverResponse_Created).send(await createUser(name, surname, mail, password, birthday, theme))
    }
    else{
        console.log("User already exists")
        res.status(serverResponse_OK).send("User alreaday exists!")
    }
})

// NAPOMENA -----> Nije moguće mijenjati mail korsnika jer se onda logika previse zakomplicira
app.put('/users/updateUser/:id', async (req, res) => { // updates specific user --> solved 
    
    const user = await getUserById(req.params.id)

    if(user === undefined){
        res.status(serverResponse_NotFound).send("User not found")
    }
    else if(user.mail === req.body.mail){
        res.status(serverResponse_OK).send(await updateUser(req.params.id, req.body.name, req.body.surname, req.body.mail, req.body.password, req.body.birthday, req.body.theme))
    }
    else{
        res.status(serverResponse_Conflict).send("Mail has to be the same as before!!!")
    }
})

app.delete('/users/deleteUser/:id', async (req, res) => { // deletes specific user --> solved

    if(await getUserById(req.params.id) === undefined){
        res.status(serverResponse_NotFound).send("User not found")
    }
    else {
        res.status(serverResponse_OK).send(await deleteUser(req.params.id))
    }
})

//SCHEDULE

app.get('/schedules', async (req, res) => { // gets all schedules --> solved
    res.send(await getSchedules())
})

app.get('/schedules/:id', async (req, res) => { // gets schedule by ID --> solved
    res.send(await getScheduleById(req.params.id))
})

app.get('/schedules/:id/events', async (req, res) => { // gets all events of specific schedule
    res.send(await getScheduleEvents(req.params.id))
})

app.post('/schedules', async (req, res) => { // creates a new schedule
    const {userID, scheduleName, start, end, type} = req.body
    
    if(await getUserById(userID) === undefined) {
        res.status(serverResponse_NotFound).send("User not found")
    }
    else{
        res.status(serverResponse_OK).send(await createSchedule(userID, scheduleName, start, end, type))
    }


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