import { createUser, getUserByMail } from "../server/database"
import express from express
const express = require("express")
const app=express()
app.use(express.json())
var obavijest
function prvoProvjera(ime, prezime, mail, lozinka, potvrda_lozinke)
{
    if (getUserByMail(mail)!=null) {
        obavijest="Vec postoji korisnik s tim mailom. Imate li vec racun?"
        uvjet1=false
    }
    if (ime, prezime, mail, lozinka, potvrda_lozinke != null && potvrda_lozinke===lozinka){
        uvjet2=false
        obavijest="Sva polja moraju biti popunjena i lozinke se moraju podudarati."
    }
    return (uvjet1 && uvjet2)
}
//samo zovemo ovu, gornja funkcija je odvojena za laksu citljivost
function registracijaKorisnika(ime, prezime, mail, lozinka, potvrda_lozinke)
{ 
    if(prvoProvjera())
    {
        //sta je s rodendanom i temom neman pojma
        //nisan 100% sigurna kako integrirat enkripciju za lozinku -> pogledat promjene na server.js
        app.post('/users', createUser(ime,prezime,mail,lozinka))
        obavijest="Uspjesno ste registrirani!"
    }
    return obavijest
}