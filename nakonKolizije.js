import express from "express";
const app=express
app.use(express.json())
async function pocetnoKrajnje(r_0_id,r_1_id){
    
    let p_vr0 = await fetch(`http://localhost:8081/schedules/searchById/${r_0_id}`)
    .then(odg=>odg.json())
    .catch(err=>console.log("Greska u trazenju rasporeda: " + err));
    p_vr0_=p_vr0.start
    
    let k_vr0 = await fetch(`http://localhost:8081/schedules/searchById/${r_0_id}`)
    .then(odg=>odg.json())
    .catch(err=>console.log("Greska u trazenju rasporeda: " + err))
    k_vr0_=k_vr0.end

    let p_vr1 = await fetch(`http://localhost:8081/schedules/searchById/${r_1_id}`)
    .then(odg=>odg.json())
    .catch(err=>console.log("Greska u trazenju rasporeda: " + err));
    p_vr1_=p_vr1.start

    let k_vr1 = await fetch(`http://localhost:8081/schedules/searchById/${r_1_id}`)
    .then(odg=>odg.json())
    .catch(err=>console.log("Greska u trazenju rasporeda: " + err))
    k_vr1_=k_vr1.end

    (k_vr0_<k_vr1_) ? kraj=k_vr1_ : kraj=k_vr0_ ;
    (p_vr0_<p_vr1_) ? pocetak=p_vr0_ : pocetak=p_vr1_ ;

    return {pocetak,kraj}
}
async function nadiTip(r_0_id){
    let tip = await fetch(`http://localhost:8081/schedules/searchById/${r_0_id}`)
    .then(odg=>odg.json())
    .catch(err=>console.log("Greska u trazenju rasporeda: " + err))
    k_vr1_=k_vr1.type
    return (tip_)
}
async function dodajDogadaje(dogadaji,rasp_id){
    for (let i = 0; index < dogadaji.length; i++) {
        const dog = array[i];

        let d1=dog[0]
        let d2=dog[1]
        let d3=dog[2]
        novi_dogad={raspo_id, d1, d2, d3}

        const dodaj_dogadaje = await fetch(`http://localhost:8081/events/${novi_dogad}`)
        .then(odg=>odg.json())
        .catch(err=>console.log("Greska u trazenju rasporeda: " + err))
    }
}
export default async function NakonKolizije(d0, d1, koliz,naziv,r_0_id,r_1_id){
    
    let pokor=pocetnoKrajnje(r_0_id,r_1_id)
    let poc=(await pokor).pocetak
    let kr=(await pokor).kraj

    ///////  TRIBA RISIT OVO SA USERIDOM AAAAAAA
    let user_id=2
    ////// NE ZNAN STA CU S OVIM
    
    const rasp_= await fetch(`http://localhost:8081/schedules/`)
    .then(odg=>odg.json())
    .catch(err=>console.log("Greska u stvaranju rasporeda: " + err))
    let tip=nadiTip(r_0_id)

    let novi_rasp={user_id, naziv, poc, kr, tip}

    const spojeni_raspored = await fetch(`http://localhost:8081/schedules/${novo}`)
    .then(odg=>odg.json())
    .catch(err=>console.log("Greska u trazenju rasporeda: " + err))
    raspo_id=spojeni_raspored.id

    
    let eve=dg0+dg1
    dodajDogadaje(eve,raspo_id)
}