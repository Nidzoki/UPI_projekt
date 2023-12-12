function kolizijaProvjera(dogadaji1,dogadaji2){

    //priprema koda
var dict_kol_provjera=[]
var dict_brojac=0
var kolizije=[]
var kolizije_brojac=0

//Prolazak svih elemenata iz niza dogadaja dogadaji1
for (let i = 0; i < dogadaji1.length; i++) {
    const dogadaj_ = dogadaji1[i];
    //dogadaj iz dogadaji1 sprema se u dict_kol_provjera i povecavanje brojaca
    dict_kol_provjera[dict_brojac]=dogadaj_;
    dict_brojac++;
    //u varijablu niz_dogadaj spremamo podatke iz trenutnog elementa u dogadaji1
    let niz_dogadaj=[]
    niz_dogadaj={
        naziv:dogadaj_[0],
        pocetak_vr:dogadaj_[1],
        kraj_vr:dogadaj_[2]
    }
   //prolazimo elemente niza dogadaji2
    for (let j = 0; j < dogadaji2.length; j++) {
        const razlaganje=dogadaji2[j]
        
        let sljedeci=[]
        sljedeci={
            naziv:razlaganje[0],
            pocetak_vr:razlaganje[1],
            kraj_vr:razlaganje[2]
        }
        //logika uporedbe : ako pocinje prije nego niz_dogadaj zavrsava ili zavrsava nakon sto niz_dogadaj pocne
        if (
        (niz_dogadaj.pocetak_vr==sljedeci.pocetak_vr && niz_dogadaj.kraj_vr==sljedeci.kraj_vr) ||
        (niz_dogadaj.pocetak_vr<sljedeci.pocetak_vr && sljedeci.pocetak_vr<niz_dogadaj.kraj_vr) ||
        (sljedeci.pocetak_vr<niz_dogadaj.pocetak_vr && niz_dogadaj.pocetak_vr<sljedeci.kraj_vr)
        ) 
        {
            console.log(niz_dogadaj.naziv +" i "+sljedeci.naziv + " se preklapaju" )
            kolizije[kolizije_brojac]=[niz_dogadaj.naziv,sljedeci.naziv]
            kolizije_brojac++;
        }
        else{dict_kol_provjera[dict_kol_provjera.length+1]=razlaganje}
    }
}
return kolizije;
}
module.exports={kolizijaProvjera};