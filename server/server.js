
import cors from 'cors';
import express from 'express';
import { createUser, deleteUser, getUserById, getUserByMail, getUserSchedules, getUserThatOwnsSchedule, getUsers, updateUser } from './database.js'; // --> solved

import { createSchedule, deleteSchedule, getScheduleById, getScheduleByName, getScheduleEvents, getSchedules, updateSchedule } from './database.js'; // --> solved

import { createEvent, deleteEvent, getEventById, getEventReminders, getEvents, updateEvent } from './database.js'; // -->solved

import { createReminder, deleteReminder, getReminderById, getReminders, updateReminder } from './database.js'; // --> solved

const serverResponse_OK = 200
const serverResponse_Created = 201
const serverResponse_NotFound = 404
const serverResponse_Conflict = 409
const serverResponse_Gone = 410
const serverResponse_InternalServerError = 500

const port_number = 8080

const app = express()

app.use(express.json())
app.use(cors())
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//                       USER API                          --> SOLVED COMPLETELY
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

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

// NAPOMENA -----> Nije moguće mijenjati mail korsnika jer se onda logika previse nepotrebno zakomplicira
app.put('/users/updateUser/:id', async (req, res) => { // updates specific user --> solved 
    
    const user = await getUserById(req.params.id)

    if(user === undefined){
        res.status(serverResponse_NotFound).send("User not found")
    }
    else{
        res.status(serverResponse_OK).send(await updateUser(req.params.id, req.body.name, req.body.surname, req.body.password, req.body.birthday, req.body.theme))
    }
})

app.delete('/users/deleteUser/:id', async (req, res) => { // deletes specific user --> solved

    if(await getUserById(req.params.id) === undefined){
        res.status(serverResponse_NotFound).send("User not found")
    }
    else {
        //delete all user schedules
        const schedules = await getUserSchedules(req.params.id)

            for(let i = 0; i < schedules.length; i++) {
                //delete all events of the schedule
                const events = await getScheduleEvents(schedules[i].schedule)

                for(let j = 0; j < events.length; j++){  
                    //delete all reminders of the event
                    const reminders = await getEventReminders(events[j].event)

                    for(let k = 0; k < reminders.length; k++){
                        await deleteReminder(reminders[k].reminder)
                    }

                    await deleteEvent(events[j].event)
                }

                await deleteSchedule(schedules[i].schedule)
            }
            
        res.status(serverResponse_OK).send(await deleteUser(req.params.id))
    }
})

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//                    SCHEDULE API                         --> SOLVED COMPLETELY
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

app.get('/schedules', async (req, res) => { // gets all schedules --> solved
    res.status(serverResponse_OK).send(await getSchedules())
})

app.get('/schedules/searchById/:id', async (req, res) => { // gets schedule by ID --> solved
    const schedule = await getScheduleById(req.params.id)

    if(schedule === undefined){
        res.status(serverResponse_NotFound).send("Schedule doesn't exist")
    }
    else{
        res.status(serverResponse_OK).send(schedule)
    }
})

app.get('/schedules/searchByName/:name', async (req, res) => { // gets schedule by name --> solved

    const schedule = await getScheduleByName(req.params.name)

    if(schedule === undefined){
        res.status(serverResponse_NotFound).send("Schedule doesn't exist")
    }
    else{
        res.status(serverResponse_OK).send(schedule)
    }
})

app.get('/schedules/:id/events', async (req, res) => { // gets all events of specific schedule --> solved
    
    if(await getScheduleById(req.params.id) === undefined){
        res.status(serverResponse_NotFound).send("Schedule doesn't exist")
    }
    else{
        res.status(serverResponse_OK).send(await getScheduleEvents(req.params.id))
    }
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

app.put('/schedules/updateSchedule/:id', async (req, res) =>{ // --> solved

    const schedule = await getScheduleById(req.params.id)

    if(schedule === undefined){
        res.status(serverResponse_NotFound).send("Schedule not found")
    }
    else
    {
        if(req.body.name === schedule.name){
            res.status(serverResponse_OK).send(await updateSchedule(req.body.name, req.body.start, req.body.end, req.body.type, req.params.id))
        }
        else
        {
            const user = (await getUserThatOwnsSchedule(req.params.id))

            const userSchedules = await getUserSchedules(user.user) // uzimam sve rasporede korisnika

            let isThereSameNameSchedules = false    // za sada se nijedan ne podudara po imenu

            for(let i = 0; i < userSchedules.length; i++) { // ali trazim koji se podudara

                const schedule = await getScheduleById(userSchedules[i].schedule)

                if(schedule.name === req.body.name){ // nasao sam ga pa mijenjam istinitost
                    isThereSameNameSchedules = true
                    console.log("isti rasporedi")
                }
            }

            if(isThereSameNameSchedules === true){
                res.status(serverResponse_Conflict).send("Schedule with the same name already exist")
            }
            else
            {
                res.status(serverResponse_OK).send(await updateSchedule(req.body.name, req.body.start, req.body.end, req.body.type, req.params.id))
            }
        }
    }
})

app.delete('/schedules/deleteSchedule/:id', async (req, res) =>{ // --> solved

    const schedule = await getScheduleById(req.params.id)

    if(schedule === undefined){
        res.status(serverResponse_NotFound).send("Schedule not found")
    }
    else{
        // delete all events connected to this schedule
        const events = await getScheduleEvents(req.params.id)
        
        console.log(events)

        for(let i = 0; i < events.length; i++){ // delete every event in schedule
            // foreach event delete his reminders
            const reminders = await getEventReminders(events[i].event)
        
            for(let j = 0; j < reminders.length; j++){
                await deleteReminder(reminders[j].reminder)
            }

            // then delete the event
        
            await deleteEvent(events[i].event)
        }
        // then delete the schedule
        res.status(serverResponse_OK).send(await deleteSchedule(req.params.id))
    }
})

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//                       EVENT API                         --> SOLVED COMPLETELY
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

app.get('/events', async (req, res) => { // --> solved
    res.status(serverResponse_OK).send(await getEvents())
})

app.get('/events/searchById/:id', async (req, res) => { // --> solved
    const event = await getEventById(req.params.id)
    if(event === undefined){
        res.status(serverResponse_NotFound).send("Event doesn't exist")
    }
    else{
        res.status(serverResponse_OK).send(event)
    }
    
})

app.get('/events/:id/reminders', async (req, res) => { // gets all reminders of specific event ---> solved
    if(await getEventById(req.params.id) === undefined){
        res.status(serverResponse_NotFound).send("Event doesn't exist")
    }
    else{
        res.status(serverResponse_OK).send(await getEventReminders(req.params.id))
    }
    
})

app.post('/events', async (req, res)=>{  // creates new event --> solved

    const {scheduleID, name, start, end} = req.body
    
    if(await getScheduleById(scheduleID) === undefined) {
        res.status(serverResponse_NotFound).send("Schedule doesn't exist")
    }
    else{
        res.status(serverResponse_Created).send(await createEvent(scheduleID, name, start, end))
    }
})

app.put('/events/updateEvent/:id', async (req, res) =>{ // --> solved

    const event = await getEventById(req.params.id)

    if(event === undefined){
        res.status(serverResponse_NotFound).send("Event not found")
    }
    else{
        res.status(serverResponse_OK).send(await updateEvent(req.params.id, req.body.name, req.body.start, req.body.end))
    }
    
})

app.delete('/events/deleteEvent/:id', async (req, res) =>{ // --> solved
    
    const event = await getEventById(req.params.id)

    if(event === undefined){
        res.status(serverResponse_NotFound).send("Event not found")
    }
    else{
        // delete all reminders connected to this event
        const reminders = await getEventReminders(req.params.id)
        
        for(let i = 0; i < reminders.length; i++){
            await deleteReminder(reminders[i].reminder)
        }

        // then delete the event
        res.status(serverResponse_OK).send(await deleteEvent(req.params.id))
    }
    
})

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//                    REMINDER API                         --> SOLVED COMPLETELY
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

app.get('/reminders', async (req, res) => { // --> solved
    res.status(serverResponse_OK).send(await getReminders())
})

app.get('/reminders/:id', async (req, res) => { // --> solved
    const reminder = await getReminderById(req.params.id)
    if(reminder === undefined) {
        res.status(serverResponse_NotFound).send("Reminder does not exist")
    }
    else{
        res.status(serverResponse_OK).send(await getReminderById(req.params.id))
    }
})

app.post('/reminders', async (req, res)=>{  // creates new reminder --> solved

    const {eventID, time} = req.body
    
    if(await getEventById(eventID) === undefined) {
        res.status(serverResponse_NotFound).send("Event doesn't exist")
    }
    else{
        res.status(serverResponse_Created).send(await createReminder(eventID, time))
    }
})

app.put('/reminders/updateReminder/:id', async (req, res) =>{ // --> solved

    const reminder = await getReminderById(req.params.id)

    if(reminder === undefined){
        res.status(serverResponse_NotFound).send("Reminder not found")
    }
    else{
        res.status(serverResponse_OK).send(await updateReminder(req.params.id, req.body.time))
    }
    
})

app.delete('/reminders/deleteReminder/:id', async (req, res) =>{ // --> solved

    const reminder = await getReminderById(req.params.id)
    if(reminder === undefined){
        res.status(serverResponse_NotFound).send("Reminder not found")
    }
    else{
        res.status(serverResponse_OK).send(await deleteReminder(req.params.id))
    }
    
})

// Touch NOTHING behind this line

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(serverResponse_InternalServerError).send("Something broke!")
})

app.listen(port_number, () => {
    console.log('\nyour bugs have been displayed in 4K 60fps on port 8080,\nI sure hope you know what you are doing...')
})