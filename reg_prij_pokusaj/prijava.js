/* import express from 'express';
//const express = require('express');
const app=express()
app.use(express.json()) */

async function provjeriMail(mail){
    
    const user = await fetch(`http://localhost:8080/users/searchByMail/${mail}`)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    return (user !== undefined)
}
async function provjeriLozinku(mail,lozinka){

    const user = await fetch(`http://localhost:8080/users/searchByMail/${mail}`)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    
    if(user !== undefined)
        return (user.password === lozinka)
    return false
}
export default async function prijavaKorisnika(mail, lozinka)
{   
    
    var boolHomepage = false
    let user = null;
    let id = null
    if(provjeriMail(mail) && provjeriLozinku(mail, lozinka)){

        console.log("Oba uvjeta su zadovoljena")
        user = await fetch(`http://localhost:8080/users/searchByMail/${mail}`)
        .then(response => response.json())
        .catch(error => console.error('Error', error))
        if(user !== undefined){
            boolHomepage=true
            id = user.ID
        }
    }
    else{
        return {boolHomepage, undefined}
    }
    
    return {boolHomepage, id}
}


async function userExists(mail)
{   
    const user = await fetch(`http://localhost:8080/users/searchByMail/${mail}`)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))

    return (user !== undefined)
}
export async function registracijaKorisnika(name, surname, mail, password, repeatPassword, birthday)
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
        
        const userDetails = await fetch(`http://localhost:8080/users/searchByMail/${mail}`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))

        console.log(userDetails)
        boolPrijava=true
        return ({boolPrijava, userDetails})
    }
    return console.error("Error");
}

// testiranje

/* console.log(await prijavaKorisnika('ante@nesto.co','loz123'))

console.log(await prijavaKorisnika("ante@nesto.com","stajaznamvise"))
 */

