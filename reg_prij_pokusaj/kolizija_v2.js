/* import express from "express";
import { NakonKolizije } from "./nakonKolizije";
const app=express
app.use(express.json())
 */
async function traziRaspored_id(raspored){

    const rasp_ = await fetch(`http://localhost:8080/schedules/searchBName/${raspored}`)
    .then(odg=>odg.json())
    .catch(err=>console.log("Greska u trazenju rasporeda: " + err))

    const rasp_id=rasp_.id
    return rasp_id
}
async function vratiDogadaje(raspored_id){
    const dogad = await fetch(`http://localhost:8080/${raspored_id}/events`)
    .then(odg=>odg.json())
    .catch(err=>console.log("Greska u trazenju rasporeda: " + err))
    let d1=dogad.name
    let d2=dogad.start
    let d3=dogad.end
    return {d1,d2,d3}
}
function kolizijaGlavno(dog_0, dog_1)
{
var kol_provjera_niz=[]
var kol_provjera_brojac=0
var kolizije_niz=[]
var kolizije_brojac=0

for (let i = 0; i < dog_0.length; i++) {

    const dogadaj_ = dog_0[i];

    kol_provjera_niz[kol_provjera_brojac]=dogadaj_;
    kol_provjera_brojac++;
    
    let niz_dogadaj=[]
    niz_dogadaj={
        naziv:dogadaj_[0],
        pocetak_vr:dogadaj_[1],
        kraj_vr:dogadaj_[2]
    }

    for (let j = 0; j < dog_1.length; j++) {
        const razlaganje=dog_1[j]
        
        let sljedeci=[]
        sljedeci={
            naziv:razlaganje[0],
            pocetak_vr:razlaganje[1],
            kraj_vr:razlaganje[2]
        }
        
        if (
        (niz_dogadaj.pocetak_vr==sljedeci.pocetak_vr && niz_dogadaj.kraj_vr==sljedeci.kraj_vr) ||
        (niz_dogadaj.pocetak_vr<sljedeci.pocetak_vr && sljedeci.pocetak_vr<niz_dogadaj.kraj_vr) ||
        (sljedeci.pocetak_vr<niz_dogadaj.pocetak_vr && niz_dogadaj.pocetak_vr<sljedeci.kraj_vr)
        ) 
        {
            console.log(niz_dogadaj.naziv + " i " + sljedeci.naziv + " se preklapaju." )
            kolizije_niz[kolizije_brojac]=[niz_dogadaj.naziv,sljedeci.naziv]
            kolizije_brojac++;
        }
        else{kol_provjera_niz[kol_provjera_niz.length+1]=razlaganje}
    }
}
return kolizije;
}
export default async function kolizijaProvjera(raspored_0,raspored_1){
    //POSALJITE IMENA RASPOREDA ZA SPAJANJE U FUNKCIJU
 var spojeniRaspored=false;
 var obavijest="Imate preklapanja, ne mozemo spojiti rasporede"
 const r_0_id= traziRaspored_id(raspored_0);
 const r_1_id= traziRaspored_id(raspored_1);
 
 if (r_0_id !== undefined && r_1_id !== undefined) {

    const dogadaji_0=vratiDogadaje(r_0_id);
    const dogadaji_1= vratiDogadaje(r_1_id);  

    if (dogadaji_0 !== undefined && dogadaji_1 !== undefined) {

        let konacno=kolizijaGlavno(dogadaji_0, dogadaji_1)
        if(konacno=[])
        {
            spojeniRaspored=true
            obavijest=""
        }

        let tip = await fetch(`http://localhost:8080/schedules/searchById/${r_0_id}`)
        .then(odg=>odg.json())
        .catch(err=>console.log("Greska u trazenju rasporeda: " + err))
        let tip_=tip.type
        
        NakonKolizije(dogadaji_0, dogadaji_1,konacno, (raspored_0+" - "+raspored_1+" mix"),r_0_id,r_1_id,tip_)
    }
}
return(spojeniRaspored, obavijest)

}

kolizijaProvjera("conflictschedule","conflictschedule")