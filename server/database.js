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

// GET User data

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



// CREATE new users

export async function createUser(name, surname, mail, password, birthday, theme){
    const [user] = await pool.query(`
    INSERT INTO users (name, surname, mail, password, birthday, theme) 
    VALUES (?,?,?,?,?,?)
    `, [name, surname, mail, password, birthday, theme])
    return getUserById(user.insertId)
    }


// DELETE users

export async function deleteUser(userID){
    const [user] = await pool.query(`
        DELETE FROM users
        WHERE ID = ?
    `, [userID])

    return user
}

// UPDATE user info

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

// GET Schedule data

export async function getSchedules(){   
    const [result] = await pool.query("SELECT * FROM schedules")
    return result
}

export async function getScheduleById(scheduleID){
    const [result] = await pool.query("SELECT * FROM schedules WHERE id = ?", [scheduleID])
    return result[0]
}

export async function getScheduleEvents(scheduleID){
    const [result] = await pool.query("SELECT event FROM schedule_event WHERE schedule = ?", [scheduleID])
    return result
}

// CREATE new schedule

export async function createSchedule(userID, scheduleName, start, end, type){
    
    const [schedule] = await pool.query(`
    INSERT INTO schedules (name, start, end, type) 
    VALUES (?,?,?,?)
    `, [scheduleName, start, end, type])
    console.log(schedule)
    const [result] = await pool.query(`
    INSERT INTO user_schedule (schedule, user) 
    VALUES (?,?)
    `, [schedule.insertId, userID])
    return getUserById(userID + schedule.id)
    }


// DELETE schedule

export async function deleteSchedule(){
    console.log("not implemented yet")
    return "not implemented yet"
    }

// UPDATE schedule info

export async function updateSchedule(){
    console.log("not implemented yet")
    return "not implemented yet"
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

export async function getReminders(){   
    const [result] = await pool.query("SELECT * FROM reminders")
    return result
}

export async function getReminderById(reminderID){
    const [result] = await pool.query("SELECT * FROM reminders WHERE id = ?", [reminderID])
    return result[0]
}

// CREATE new reminder

export async function createReminder(){
    console.log("not implemented yet")
    return "not implemented yet"
    }


// DELETE reminder

export async function deleteReminder(){
    console.log("not implemented yet")
    return "not implemented yet"
    }

// UPDATE reminder info

export async function updateReminder(){
    console.log("not implemented yet")
    return "not implemented yet"
    }