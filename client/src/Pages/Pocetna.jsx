import { useState } from 'react';
import { List, Card, Button } from 'antd';
import NavLeft from "../components/navLeft";
import NavUpper from "../components/navUpper";
import { useNavigate, Link, Navigate, Route, useLocation } from 'react-router-dom';



const Pocetna = () => {

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
  const handleEdit = (scheduleId) => {
    //otvori u tom rasporedu i pročitaj sve podatke
    console.log("Edit schedule: ", scheduleId);
  };

  const handleDelete = (scheduleId) => {
    const updatedSchedules = schedules.filter(schedule => schedule.id !== scheduleId);
    console.log("Delete schedule: ", updatedSchedules);
    setSchedules(updatedSchedules);
  };
  

  return (
    <div id="pocetna">
      <NavUpper id="navigacijaGornja"/>
      <NavLeft id="navigacijaLijeva"  style={{position: "fixed"}}/>
      <div id="pocetnaTijelo">
        <div style={{margin: "10px"}}>
        {schedules.length === 0 ? (
          <p style={{ position: "absolute", top: "50%", left: "50%" }}>Create new schedule!</p>
        ) : (
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={schedules}
            renderItem={(schedule) => (
              <List.Item>
                <Card title={schedule.name}>
                  <Button type="primary" onClick={() => handleEdit(schedule.id)}>
                    Edit
                  </Button>
                  <Button type="danger" onClick={() => handleDelete(schedule.id)}>
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
