import express from 'express'
//const express = require("express")
const app=express()
app.use(express.json())
//var obavijest
function prvoProvjera(ime, prezime, mail, lozinka, potvrda_lozinke)
{
    (req,rep)=>(app.fetch(`/users/searchByMail/${mail}`)
    .then(rep=rep.json())
    .then(trazeniMail=rep.mail)
    .catch(err=>console.log(err)))

    if (trazeniMail!=null) {
        uvjet1=false
    }

    if (ime, prezime, mail, lozinka, potvrda_lozinke != null && potvrda_lozinke===lozinka){
        uvjet2=false
    }

    return (uvjet1 && uvjet2)
}
export default function registracijaKorisnika(ime, prezime, mail, lozinka, potvrda_lozinke)
{ 
    var boolPrijava=false
    if(prvoProvjera(ime, prezime, mail, lozinka, potvrda_lozinke))
    {
        //sta je s rodendanom i temom neman pojma
        //nisan 100% sigurna kako integrirat enkripciju za lozinku -> pogledat promjene na server.js
        app.fetch(`/users`,{ime, prezime, mail, lozinka})
        boolPrijava=true
    }
    return boolPrijava
}