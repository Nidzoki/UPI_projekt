@ECHO OFF
cd server
start cmd.exe /k npm start
cd ..
cd client
npm i
start cmd.exe /k npm run dev
pause
