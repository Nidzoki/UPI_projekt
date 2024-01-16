import { useState, useEffect } from 'react';
import { Button, Calendar, Card, Modal, Input, Radio, Badge } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import NavUpper from '../components/NavUpperSch';
import '../App.css';
import { useLocation } from 'react-router-dom';

const kalendarStil = {
    height: 'auto',
    width: '1200px',
    margin: 'auto',
    marginTop: '20px',
    padding: '10px',
};

const radioStil = {
    borderRadius: "100%",
    width: "10px",
    height: "10px"
}

const margina = {
    margin: "5px"
}

function Mjesecni() {
    //pogledaj imal i koji event, nema -> divno!! -> useEffect

    const location = useLocation();
    const podaci = location.state


    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState([]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [addEvent, setAddEvent] = useState(false);
    const [eventName, setEventName] = useState({
        id: 0,
        name: "",
        start: "",
        type: "none",
    });


    useEffect(() => {
        const fetchEventDetails = async (eventsId) => {
            try {
                const updateEvents = [];
    
                for (let i = 0; i < eventsId.length; i++) {
                    const response = await fetch(`http://localhost:8080/events/searchById/${eventsId[i].event}`);
                    const data = await response.json();
                    updateEvents.push(data);
                }
    
                setEvents(updateEvents);
            } catch (error) {
                console.error('Error fetching schedule details:', error);
            }
        };
    
        fetch(`http://localhost:8080/schedules/${podaci.id}/events`)
            .then(res => res.json())
            .then(data => {
                fetchEventDetails(data);
            })
            .catch(error => console.error('Error fetching user events:', error));
    }, [podaci.id]);
    



    const [editEvent, setEditEvent] = useState();
    const [checkIfEdit, setChecker] = useState(false);

    async function editElement(index) {
        const eventToEdit = events.find((day) => day.ID === index);
        setEditEvent(eventToEdit);
        setChecker(true)
        setAddEvent(true);
        console.log(editEvent)

        try {
            const response = await fetch(`http://localhost:8080/events/updateEvent/${index}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ eventToEdit })
            });

            const data = await response.json();

            if (response.ok) {
                const updatedEvents = events.filter(event => event.ID !== index);
                setEvents(updatedEvents);
            }
            else { console.error('Error updating event:', data) }
        }
        catch (error) { console.error('Error:', error) }
    }

    const handleAddEvent = () => {
        if (selectedDate !== null) {
            if (checkIfEdit) {
                setChecker(false)
                setEventName(...editEvent)
                setAddEvent(true)
            }
            else {
                setEventName({
                    ID: 0,
                    name: "",
                    start: selectedDate,
                    type: "none",
                })
            }
            setAddEvent(true);
        }
    };


    const handleDateSelect = (value) => {
        const formattedDate = value.format('DD. MM. YYYY.');
        setSelectedDate(formattedDate);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    async function handleDeleteEvent(index) {
        const broj = events.findIndex(day => day.ID === index);
        if (broj !== -1) {
            try {
                const response = await fetch(`http://localhost:8080/events/deleteEvent/` + index, {
                    method: 'DELETE',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                });

                const data = await response.json();

                if (response.ok) {
                    console.log("IZBRISANO!!!")
                }
                else { console.error('Error deleting schedule:', data) }
            }
            catch (error) { console.error('Error:', error) }
        }

        const updatedEvents = [...events];
        updatedEvents.splice(broj, 1);
        setEvents(updatedEvents);
    }



    async function handleOk() {
        if (eventName.title !== "") {
            setAddEvent(false);
    
            const jedanEvent = { scheduleID: podaci.id, name: eventName.title, start: selectedDate, end: selectedDate };
            try {
                const response = await fetch(`http://localhost:8080/events`, {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(jedanEvent)
                });
    
                const data = await response.json();
                console.log("Data: ", data);
    
                if (response.ok) {
                    setEvents([...events, data]);
                    setEventName({ ...eventName, date: selectedDate, ID: data.ID, title: data.name });
                    console.log("Event name: ", eventName);
                } else {
                    console.error('Error creating event:', data);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            alert("You need to put a title to create a new event");
        }
    }
    

    function handleCancelAdd() {
        setEventName({
            id: 0,
            name: "",
            start: "",
            type: "none",
        })
        setAddEvent(false)
    }


    const CellRender = (value) => {
        const formattedDate = value.format('DD. MM. YYYY.');
        const matchingDays = events.filter((day) => day.start === formattedDate);
        if (matchingDays.length > 0) {
            return (
                <ul>
                    {matchingDays.map((item) => (
                        <li key={item.ID}>
                            <Badge status={"default"} text={item.name} />
                        </li>
                    ))}
                </ul>
            );
        }

        return null;
    }


    function promjenaPodataka(event) {
        const { name, value } = event.target;
        setEventName({ ...eventName, [name]: value });
    }


    return (
        <div className="tablica">
            <NavUpper data={podaci} />
            <Calendar id="kalendar" onSelect={handleDateSelect} cellRender={CellRender} style={kalendarStil} />

            {selectedDate && (
                <Modal
                    title={`Events on ${selectedDate} `}
                    open={isModalVisible}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="cancel" onClick={handleCancel}> Cancel </Button>,
                        <Button key="addNew" onClick={handleAddEvent}> Add event</Button>,
                    ]}>
                    {addEvent && (
                        <form style={{ height: "200px", border: "1px solid #d3d3d3", borderRadius: "10px" }}>
                            <Input type="text" name="title" value={eventName.title} onChange={promjenaPodataka}
                                placeholder="Event name" style={{ width: '95%', margin: "5px" }} />

                            <Input type="text" name="description" placeholder="Description" value={eventName.description} onChange={promjenaPodataka}
                                style={{ width: '95%', height: "30%", margin: "5px", alignSelf: "center" }} />
                            <Radio.Group onChange={promjenaPodataka} name="type" style={{ margin: "5px" }}>
                                <Radio value="none">None</Radio>
                                <Radio value="default"><div style={{ ...radioStil, backgroundColor: 'blue' }} /></Radio>
                                <Radio value="success"><div style={{ ...radioStil, backgroundColor: 'green' }} /></Radio>
                                <Radio value="warning"><div style={{ ...radioStil, backgroundColor: 'orange' }} /></Radio>
                                <Radio value="error"><div style={{ ...radioStil, backgroundColor: 'red' }} /></Radio>
                            </Radio.Group> <br />

                            <Button type="primary" onClick={handleOk}
                                style={margina}>Ok</Button>

                            <Button onClick={handleCancelAdd} style={margina}>Cancel</Button>
                        </form>)}

                    {events.map((day) => {
                        if (day.start === selectedDate) {
                            return (
                                <Card key={day.ID} title={day.name}>
                                    <Button type="primary" onClick={() => editElement(day.ID)} style={margina}>Edit event</Button>
                                    <Button icon={<DeleteOutlined />} onClick={() => handleDeleteEvent(day.ID)} style={margina}>
                                        Delete
                                    </Button>
                                </Card>
                            );
                        }
                        return null;
                    }
                    )
                    }
                </Modal>
            )}


        </div>
    );

}
export default Mjesecni;
