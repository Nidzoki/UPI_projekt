import express from 'express';

const app=express()

app.use(express.json())

async function userExists(mail)
{   
    const user = await fetch(`http://localhost:8080/users/searchByMail/${mail}`)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))

    return (user !== undefined)
}
export default async function registracijaKorisnika(name, surname, mail, password, repeatPassword, birthday)
{   
    let theme = "a" // ne implementiramo pa cemo koristiti ovo
    var boolPrijava=false
    if(! await userExists(mail) && password === repeatPassword)
    {   console.log("we in")
       
    const payload = {
        "name":name,
        "surname": surname,
        "mail": mail,
        "password": password,
        "birthday": birthday,
        "theme": theme
    }

    
    const user = await fetch(`http://localhost:8080/users`,
        {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
            body: JSON.stringify(payload)
        } )
        .then(response => response.json())
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error('Error:', error))
        
        console.log(user)
        boolPrijava=true
    }
    return boolPrijava
}

console.log(await registracijaKorisnika("Luka", "Lukic", "treciluka@nesto.com", "lukas pass", "lukas pass", "2024-01-22T23:00:00.000Z"))