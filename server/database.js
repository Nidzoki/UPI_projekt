import mysql from 'mysql2'

// Database connection

const pool = mysql.createPool(
    {
        host: process.env.HOST,
        user: 'root',
        password: '',
        database: 'upi_projekt'
    }
).promise()



///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//               USER DATA MANIPULATION
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// GET User data ---> solved

export async function getUsers(){   
    const [result] = await pool.query("SELECT * FROM users")
    return result
}

export async function getUserById(userID){
    const [result] = await pool.query("SELECT * FROM users WHERE id = ?", [userID])
    return result[0]
}

export async function getUserByMail(userMail){
    const [result] = await pool.query("SELECT * FROM users WHERE mail = ?", [userMail])
    return result[0]
}

export async function getUsersByName(userName){
    const [result] = await pool.query("SELECT * FROM users WHERE name = ?", [userName])
    return result
}
export async function getUsersBySurname(userSurname){
    const [result] = await pool.query("SELECT * FROM users WHERE surname = ?", [userSurname])
    return result
}

export async function getUsersOlderThan(userBirthday){
    const [result] = await pool.query("SELECT * FROM users WHERE birthday < ?", [userBirthday])
    return result
}

export async function getUsersYoungerThan(userBirthday){
    const [result] = await pool.query("SELECT * FROM users WHERE birthday > ?", [userBirthday])
    return result
}

export async function getUsersThatHaveBirthdayOn(userBirthday){
    const [result] = await pool.query("SELECT * FROM users WHERE birthday = ?", [userBirthday])
    return result
}

export async function getUserSchedules(userID){
    const [result] = await pool.query("SELECT schedule FROM user_schedule WHERE user = ?", [userID])
    return result
}

export async function getUserThatOwnsSchedule(scheduleID){
    const [result] = await pool.query("SELECT user FROM user_schedule WHERE schedule = ?", [scheduleID])
    return result
}



// CREATE new users ---> solved

export async function createUser(name, surname, mail, password, birthday, theme){
    const [user] = await pool.query(`
    INSERT INTO users (name, surname, mail, password, birthday, theme) 
    VALUES (?,?,?,?,?,?)
    `, [name, surname, mail, password, birthday, theme])
    return getUserById(user.insertId)
    }


// DELETE users ---> solved

export async function deleteUser(userID){

    const [result] = await pool.query(`
    DELETE FROM user_schedule
    WHERE user = ?
    `, [userID])

    const [user] = await pool.query(`
        DELETE FROM users
        WHERE ID = ?
    `, [userID])
    
    return user
}

// UPDATE user info ---> solved

export async function updateUser(userID, name, surname, mail, password, birthday, theme){
   const [user] = await pool.query(`
   UPDATE users
   SET name = ?,   
            surname = ?,
            mail =?,
            password = ?,
            birthday = ?,
            theme = ?
   WHERE ID = ?
   
   `, [name, surname, mail, password, birthday, theme, userID])
   return user
}


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//               SCHEDULE DATA MANIPULATION
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// GET Schedule data ---> solved

export async function getSchedules(){
    const [result] = await pool.query("SELECT * FROM schedules")
    return result
}

export async function getScheduleById(scheduleID){
    const [result] = await pool.query("SELECT * FROM schedules WHERE id = ?", [scheduleID])
    return result[0]
}

export async function getScheduleByName(scheduleName){
    const [result] = await pool.query("SELECT * FROM schedules WHERE name = ?", [scheduleName])
    return result
}

export async function getScheduleEvents(scheduleID){
    const [result] = await pool.query("SELECT event FROM schedule_event WHERE schedule = ?", [scheduleID])
    return result[0]
}

// CREATE new schedule --> solved

export async function createSchedule(userID, scheduleName, start, end, type){
    
    const [schedule] = await pool.query(`
    INSERT INTO schedules (name, start, end, type) 
    VALUES (?,?,?,?)
    `, [scheduleName, start, end, type])
    
    const [result] = await pool.query(`
    INSERT INTO user_schedule (schedule, user) 
    VALUES (?,?)
    `, [schedule.insertId, userID])

    return getScheduleById(schedule.insertId)
    }


// DELETE schedule

export async function deleteSchedule(scheduleID){
    const [result] = await pool.query(`
    DELETE FROM user_schedule
    WHERE schedule = ?
    `, [scheduleID])

    const [schedule] = await pool.query(`
        DELETE FROM schedule
        WHERE ID = ?
    `, [scheduleID])

    const [result2] = await pool.query(`
        DELETE FROM schedule_event
        WHERE ID = ?
    `, [scheduleID])
    
    return schedule
    }

// UPDATE schedule info

export async function updateSchedule(name, start, end, type, scheduleID){
    const [schedule] = await pool.query(`
    UPDATE schedules
    SET     name = ?,   
            start = ?,
            end =?,
            type = ?
    WHERE ID = ?
   
    `, [name, start, end, type, scheduleID])
    return schedule
    }

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//               EVENT DATA MANIPULATION
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// GET Event data

export async function getEvents(){   
    const [result] = await pool.query("SELECT * FROM events")
    return result
}

export async function getEventById(eventID){
    const [result] = await pool.query("SELECT * FROM events WHERE id = ?", [eventID])
    return result[0]
}

export async function getEventReminders(eventID){
    const [result] = await pool.query("SELECT reminder FROM event_reminder WHERE event = ?", [eventID])
    return result
}

// CREATE new event

export async function createEvent(){
    console.log("not implemented yet")
    return "not implemented yet"
    }


// DELETE event

export async function deleteEvent(){
    console.log("not implemented yet")
    return "not implemented yet"
    }

// UPDATE event info

export async function updateEvent(){
    console.log("not implemented yet")
    return "not implemented yet"
    }


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//               REMINDER DATA MANIPULATION
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// GET Reminder data

export async function getReminders(){   // --> solved
    const [result] = await pool.query("SELECT * FROM reminders")
    return result
}

export async function getReminderById(reminderID){ // --> solved
    const [result] = await pool.query("SELECT * FROM reminders WHERE ID = ?", [reminderID])
    return result[0]
}



// CREATE new reminder

export async function createReminder(eventID, time){ // --> not yet tested
    const [reminder] = await pool.query(`
    INSERT INTO reminders (time) 
    VALUES (?)
    `, [time])
    
    const [result] = await pool.query(`
    INSERT INTO event_reminders (reminder, event) 
    VALUES (?,?)
    `, [reminder.insertId, eventID])

    return getScheduleById(schedule.insertId)
    }


// DELETE reminder

export async function deleteReminder(reminderID){ // --> solved
    
    const [reminder] = await pool.query(`
        DELETE FROM reminders
        WHERE ID = ?
    `, [reminderID])
    
    const [result] = await pool.query(`
        DELETE FROM event_reminder
        WHERE reminder = ?
    `, [reminderID])
        
    return reminder
    }

// UPDATE reminder info

export async function updateReminder(){
    console.log("not implemented yet")
    return "not implemented yet"
    }