@ECHO OFF
cd server
start cmd.exe /k nodemon start
cd ..
cd client
npm run dev
pause
