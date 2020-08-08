const dataBase = require("./db")
const createProffy = require("./createProffy")


dataBase.then(async (db) => {
    //Add data
    proffyValue = {
        name: "Mayk Brito",
        avatar: "https://avatars1.githubusercontent.com/u/65081707?s=460&u=2119321ec652bfb8e7ac0280a085c11393b69b1b&v=4",
        whatsapp: "992653686",
        bio: "Instrutor de Educação Física"
    }

    classValue = {
        subject: 1,
        cost: "20,00"
        //proffy_id comes from database
    }

    classScheduleValues = [
        // class id from database after class reg
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Check for data
    
    //Every Proffy
    const selectedProffys = await db.all("SELECT * FROM proffys")

    //Check for classes in a specific teacher
    //bring with every teacher's data
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffys_id = proffys.id)
        WHERE classes.proffys_id =1;
    `)

    // e.g. someone working from 8h - 18h
    // time_from must be less or equal to time_to
    // time_to must be greater
    const selectClassesSchedules = await db.all(`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = "1"
            AND class_schedule.weekday = "0"
            AND class_schedule.time_from <= "520"
            AND class_schedule.time_to > "1300"
    `)
})