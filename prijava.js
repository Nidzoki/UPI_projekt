import express from 'express';
//const express = import("express")
const app=express()
app.use(express.json())

function provjeriMail(mail){
    let trazeniMail="";
    (req,rep)=>(rep=app.fetch(`/users/searchByMail/${mail}`)
    .then(rep=rep.json())
    .then(trazeniMail=rep.mail)
    .catch(err=>console.log(err)))
    console.log(trazeniMail+"trazeni mail")
    

    var boolMail=true

    if(trazeniMail=null)
    {
        boolMail=false
    }

    return {boolMail }
}
function provjeriLozinku(mail,lozinka){

    let vracenaLozinka="";
    (req,rep)=>(app.fetch(`/users/searchByMail/${mail}`)
    .then(rep=rep.json())
    .then(vracenaLozinka=rep.password)
    .catch(err=>console.log(err)))

    var boolLozinka=false
    let idKorisnik=null;

    if(vracenaLozinka==lozinka){
        boolLozinka=true
        idKorisnik=user.id
    }
    return {boolLozinka, idKorisnik}
}
export default function prijavaKorisnika()
{   //let mail='ante@nekimail.com'
    //let lozinka='loz123'
    var boolHomepage=false
    let id=null;
    if(provjeriMail(mail)){
        if (provjeriLozinku(mail,lozinka).boolLozinka) {
            id=idKorisnik
            boolHomepage=true
        }
    }
    
    console.log(boolHomepage.toString())
    return {boolHomepage, id}
}
prijavaKorisnika()