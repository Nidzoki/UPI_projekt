run.bat i run_first_time.bat datoteke služe za pokretanjem development servera frontenda i backenda odjednom,
umjesto da idete sami po terminalima i mapama i podižete svaki server ručno

run_first_time.bat -> sadrži sve isto kao i run.bat + npm i, 
ta dodatna linija nam treba kako bi vite mogao raditi i pokrećete ga samo prvi put (mada bi trebao raditi i svaki drugi put, ali se onda
nepotrebno pokreće naredba "npm i" svaki put kada to uradite zajedno sa ostalim naredbama).
Alternativno možete ući u mapu client, otvoriti je u terminalu te napisati naredbu npm i,
onda možete nastaviti koristiti run.bat bez ikakvih problema.

run.bat -> skripta koja pokreće frontend i backend development servere, 
nju možete pokrenuti ako ste već ranije pokretali run_first_time.bat

run_blueprint.txt -> predložak naredbi koje se izvršavaju u gore navedenim skriptama

Ništa ne trebate ponovno pokretat, čim spremite file stanje bi se trebalo ažurirati na već otvorenom serveru
