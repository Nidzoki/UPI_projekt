import express from 'express';

const app=express()

app.use(express.json())


console.log(await registracijaKorisnika("Luka", "Lukic", "treciluka@nesto.com", "lukas pass", "lukas pass", "2024-01-22T23:00:00.000Z"))