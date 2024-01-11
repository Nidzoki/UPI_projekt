import express from 'express'

import {getUserById, getUserSchedules, getUsers, getUserByMail, getUserThatOwnsSchedule, createUser,deleteUser, updateUser} from './database.js'

import {getScheduleById, getScheduleByName, getSchedules, getScheduleEvents, createSchedule} from './database.js'

import {getEventById, getEvents, getEventReminders} from './database.js'

import {getReminderById, getReminders, deleteReminder} from './database.js'

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

app.delete('/users/deleteUser/:id', async (req, res) => { // deletes specific user --> yet to implement deletion of user schedules

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

app.get('/schedules/searchById/:id', async (req, res) => { // gets schedule by ID --> solved
    res.send(await getScheduleById(req.params.id))
})

app.get('/schedules/searchByName/:name', async (req, res) => { // gets schedule by name --> solved
    res.send(await getScheduleByName(req.params.name))
})

app.get('/schedules/:id/events', async (req, res) => { // gets all events of specific schedule --> solved
    res.send(await getScheduleEvents(req.params.id))
})

app.post('/schedules', async (req, res) => { // creates a new schedule --> solved
    const {userID, scheduleName, start, end, type} = req.body

    if(await getUserById(userID) === undefined) {
        res.status(serverResponse_NotFound).send("User not found") 
    }
    else{
        const userSchedules = await getUserSchedules(userID) // uzimam sve rasporede korisnika

        let isThereSameNameSchedules = false    // za sada se nijedan ne podudara po imenu

        for(let i = 0; i < userSchedules.length; i++) { // ali trazim koji se podudara

            const schedule = await getScheduleById(userSchedules[i].schedule)

            if(schedule.name === scheduleName){ // nasao sam ga pa mijenjam istinitost
                isThereSameNameSchedules = true
            }
        }

        if(isThereSameNameSchedules === true){ // ako se podudara = ne moze
            res.status(serverResponse_Conflict).send("Schedule with this name already exists")
        }
        else{ // ako se ne podudara = pravi novi
            res.status(serverResponse_OK).send(await createSchedule(userID, scheduleName, start, end, type)) 
        }
        
    }


})

app.put('/schedules/updateSchedule/:id', async (req, res) =>{ // --> curently working on...

    const schedule = await getScheduleById(req.params.id)

    if(schedule === undefined){
        res.status(serverResponse_NotFound).send("Schedule not found")
    }
    else{
        res.status(serverResponse_Gone).send("Not implemented yet")
    }
    
})

app.delete('/schedules/deleteSchedule/:id', async (req, res) =>{ // --> curently working on...

    const schedule = await getScheduleById(req.params.id)

    if(schedule === undefined){
        res.status(serverResponse_NotFound).send("Schedule not found")
    }
    else{
        res.status(serverResponse_Gone).send("Not implemented yet")
    }
    
})

//EVENT

app.get('/events', async (req, res) => {
    res.send(await getEvents())
})

app.get('/events/searchById/:id', async (req, res) => {
    res.send(await getEventById(req.params.id))
})

app.get('/events/:id/reminders', async (req, res) => { // gets all reminders of specific event
    res.send(await getEventReminders(req.params.id))
})

//REMINDER

app.get('/reminders', async (req, res) => {
    res.send(await getReminders())
})

app.get('/reminders/:id', async (req, res) => { // --> Solved
    const reminder = await getReminderById(req.params.id)
    if(reminder === undefined) {
        res.status(serverResponse_NotFound).send("Reminder does not exist")
    }
    else{
        res.status(serverResponse_OK).send(await getReminderById(req.params.id))
    }
})

app.delete('/reminders/deleteReminder/:id', async (req, res) =>{ // --> Solved

    const reminder = await getReminderById(req.params.id)
    if(reminder === undefined){
        res.status(serverResponse_NotFound).send("Reminder not found")
    }
    else{
        res.status(serverResponse_OK).send(await delereteReminder(req.params.id))
    }
    
})



app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something broke!")
})

app.listen(8080, () => {
    console.log('\nyour bugs have been displayed in 4K 60fps on port 8080,\nI sure hope you know what you are doing...')
})