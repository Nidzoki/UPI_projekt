import { getUserByMail } from "../server/database"
import express from express
const express = require("express")
const app=express()
app.use(express.json())
var obavijest
function provjeriMail(mail){
    boolMail=true
    if(getUserByMail(mail)=null)
    {
        obavijest="Netocan mail. Jeste li se registrirali?"
        boolMail=false
    }
    return boolMail
}
function provjeriLozinku(mail,lozinka){
    const user = getUserByMail(mail)
    boolLozinka=false
    if(user.password=lozinka){
        boolLozinka=true
        idKorisnik=user.id
    }
    return {boolLozinka, idKorisnik}
}
function prijavaKorisnika(mail, lozinka)
{
    //ideja je da klikom na prijavu ako je uspjesna, korisnik ide na homepage pa je ovaj bool kao i ostali za provjeru moze li se dalje
    boolHomepage=false
    if(provjeriMail){
        
        if (provjeriLozinku(mail,lozinka).boolLozinka) {
            id=idKorisnik
            boolHomepage=true
        }
    }
    return boolHomepage
}