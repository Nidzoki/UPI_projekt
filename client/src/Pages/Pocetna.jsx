import { useState, useEffect } from 'react';
import { List, Card, Button } from 'antd';
import NavLeft from "../components/navLeft";
import NavUpper from "../components/navUpper";
import { useNavigate, useLocation } from 'react-router-dom';

// let userID = 11 // TODO: get real user id

// const scheduleIDs = await fetch(`http://localhost:8080/users/${userID}/schedules`)
//   .then(response => response.json())
//   .catch(error => console.error('Error:', error), [])

// const scheduleList = [];

// for (let i = 0; i < scheduleIDs.length; i++) {
//   scheduleList.push(await fetch(`http://localhost:8080/schedules/searchById/${scheduleIDs[i].schedule}`)
//     .then(response => response.json())
//     .catch(error => console.error('Error:', error)))
// }

const Pocetna = (korisnikID) => {

  const scheduleList = [];
  const location = useLocation();
  const [schedules, setSchedules] = useState(scheduleList);

  const userID = location.state.userId
  console.log(userID);
  const scheduleIDs = async ()=>await fetch(`http://localhost:8080/users/${userID}/schedules`)
  .then(response => response.json())
  .catch(error => console.error('Error:', error))



for(let i = 0; i < scheduleIDs.length; i++) {
  scheduleList.push(async ()=>await fetch( `http://localhost:8080/schedules/searchById/${scheduleIDs[i].schedule}`)
  .then(response => response.json())
  .catch(error => console.error('Error:', error)))
} 


  const handleEdit = (scheduleId, scheduleType, scheduleName) => {
    if (scheduleType == "Month") {
      nav("/monthSchedule", { state: {id: scheduleId, naziv: scheduleName, tip:scheduleType }}) //poslati naziv navSch
    }
    else {
      nav("/weekSchedule", { state: {id: scheduleId, naziv: scheduleName, tip: scheduleType }}) //poslati naziv navSch
    }
    // console.log("Edit schedule: ", { state: scheduleId });
  };



  async function handleDelete(scheduleId) {
    // console.log("Schedule ID to delete: ", scheduleId);

    try {
      const response = await fetch(`http://localhost:8080/schedules/deleteSchedule/${scheduleId}`, {
        method: 'DELETE',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ scheduleId })
      });

      const data = await response.json();
      // console.log('Delete Response:', data);

      if (response.ok) {
        const updatedSchedules = schedules.filter(schedule => schedule.id !== scheduleId);
        setSchedules(updatedSchedules);
      }
      else { console.error('Error deleting schedule:', data) }
    }
    catch (error) { console.error('Error:', error) }
  }


  return (
    <div id="pocetna">
      <NavUpper id="navigacijaGornja" />
      <NavLeft id="navigacijaLijeva" style={{ position: "fixed" }} />
      <div id="pocetnaTijelo">
        <div style={{ margin: "10px" }}>
          {schedules.length === 0 ? (
            <p style={{ position: "absolute", top: "50%", left: "50%" }}>Create new schedule!</p>
          ) : (
            <List
              grid={{ gutter: 16, column: 4 }}
              dataSource={schedules}
              renderItem={(schedule) => (
                <List.Item>
                  <Card title={schedule.name}>
                    <Button type="primary" onClick={() => handleEdit(schedule.ID, schedule.type, schedule.name)}>
                      Edit
                    </Button>
                    <Button type="danger" onClick={() => handleDelete(schedule.ID)}>
                      Delete
                    </Button>
                  </Card>
                </List.Item>
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pocetna;
