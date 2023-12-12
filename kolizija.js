{/*
const vp=new Date(10/11/2023)
const vk=new Date(10/11/2023)
const dogadaji1=[["dog1",vp.setHours(11),vk.setHours(13)],["dog2",vp.setHours(14),vk.setHours(16)]]
const dogadaji2=[["dog3",vp.setHours(15),vk.setHours(17)]]

-> komplikacije prilikom korištenja DATE
-> za početak ću koristit int
*/}
const dogadaji1=[["dog1",11,13],["dog2",14,16]]
const dogadaji2=[["dog3",15,17]]
var dict_kol_provjera=new Object([])
for (let i = 0; i < dogadaji1.length; i++) {
    const d = dogadaji1[i];
    dict_kol_provjera[i]={
        naziv: d[0],
        pocetak_vr: d[1],
        kraj_vr: d[2],
    }
}
for (let i = 0; i < dogadaji2.length; i++) {
    const d = dogadaji2[i];
    dict_kol_provjera[dict_kol_provjera.length+i]={
        naziv: d[0],
        pocetak_vr: d[1],
        kraj_vr: d[2],
    }
}
for (let i = 0; i < dict_kol_provjera.length; i++) {
    const niz_dogadaj = dict_kol_provjera[i];
    for (let j = i+1; j < dict_kol_provjera.length; j++) {
        const sljedeci = dict_kol_provjera[j];
        if (sljedeci.pocetak_vr<niz_dogadaj.kraj_vr || sljedeci.kraj_vr<niz_dogadaj.pocetak_vr ) {
            console.log(niz_dogadaj.naziv +" i "+sljedeci.naziv + " se preklapaju" )
        }
    }
}
console.log(dict_kol_provjera[0],dict_kol_provjera[1],dict_kol_provjera[2])