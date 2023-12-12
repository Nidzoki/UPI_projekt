const {kolizijaProvjera} = require("./kolizija.js");

const dogadaji1=[["dog1",11,13],["dog2",14,16]]
const dogadaji2=[["dog3",15,17]]
test("Provjerava koliziju dogadaja1 i dogadaja2 te vraca dog2 i dog3 koliziju",
 ()=>{expect(kolizijaProvjera(dogadaji1,dogadaji2)).toStrictEqual([["dog2","dog3"]])

})

const dogadaji3=[["dog1",11,13],["dog2",14,16],["dog3",20,21]]
const dogadaji4=[["dog4",17,19]]
test("Provjerava koliziju dogadaja3 i dogadaja4 te ne vraca koliziju",
 ()=>{expect(kolizijaProvjera(dogadaji3,dogadaji4)).toStrictEqual([])

})

const dogadaji5=[["dog1",11,13],["dog2",14,16]]
const dogadaji6=[]
test("Provjerava koliziju dogadaja5 i dogadaja6 te ne vraca koliziju",
()=>{expect(kolizijaProvjera(dogadaji5,dogadaji6)).toStrictEqual([])

})

const dogadaji7=[["dog1",5,6],["dog2",7,12],["dog3",12,16],["dog4",16,17],["dog5",18,19],["dog6",20,23]]
const dogadaji8=[["dog7",6,7],["dog8",8,11],["dog9",12,16],["dog10",17,18],["dog11",19,20],["dog12",22,23]]
test("Provjerava koliziju dogadaja7 i dogadaja8 te vraca kolizije ( dog2 , dog8 ), ( dog3 , dog9 ), ( dog6 , dog12 )",
 ()=>{expect(kolizijaProvjera(dogadaji7,dogadaji8)).toStrictEqual([["dog2","dog8"],["dog3","dog9"],["dog6","dog12"]])

})