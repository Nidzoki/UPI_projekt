import express from 'express';

const app=express()
app.use(express.json())

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

// testiranje

/* console.log(await prijavaKorisnika('ante@nesto.co','loz123'))

console.log(await prijavaKorisnika("ante@nesto.com","stajaznamvise"))
 */

