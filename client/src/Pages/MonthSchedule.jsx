import { useState } from 'react';
import { Button, Calendar, Card, Modal, Input, Radio, Badge } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import NavUpper from '../components/NavUpperSch';
import '../App.css';

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
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState([]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [addEvent, setAddEvent] = useState(false);
    const [eventName, setEventName] = useState({
        id: 0,
        title: "",
        description: "",
        date: "",
        type: "none",
    });

    

    const handleDateSelect = (value) => {
        const formattedDate = value.format('DD. MM. YYYY.');
        setSelectedDate(formattedDate);
        setIsModalVisible(true);
    };


    // const handleMonthClick = (value) => {
    //     setModalVisible(true);
    //     setSelectedMonth(value);
    // };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleAddEvent = () => {
        if (selectedDate !== null) {
            setEventName({
                id: events.length,
                title: "",
                description: "",
                date: selectedDate,
                type: "none"
            })
            setAddEvent(true);
        }
    };

    function handleDeleteEvent(index) {
        const broj = events.findIndex(day => day.id === index);
        if (broj !== -1) {
            const updatedEvents = [...events];
            updatedEvents.splice(broj, 1);
            setEvents(updatedEvents);
        }
    }


    const handleOk = () => {
        if (eventName.title !== "") {
            setAddEvent(false);
            setEventName({ ...eventName, date: selectedDate });
            setEvents([...events, eventName])
        }
        else { alert("You need to put title so you can make new event") }
    }

    function handleCancelAdd() {
        setEventName({
            id: 0,
            title: "",
            description: "",
            date: "",
            type: "none",
        })
        setAddEvent(false)
    }



    const CellRender = (value) => {
        const formattedDate = value.format('DD. MM. YYYY.');
        const matchingDays = events.filter((day) => day.date === formattedDate);

        if (matchingDays.length > 0) {
            return (
                <ul className="events">
                    {matchingDays.map((item) => (
                        <li key={item.id}>
                            <Badge status={item.type} text={item.title} />
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

    function boja(tip) {
        switch (tip) {
            case "default":
                return "blue"
            case "success":
                return "green";
            case "warning":
                return "orange";
            case "error":
                return "red";
        }

    }

    return (
        <div className="tablica">
            <NavUpper id="navSchGornja" />
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
                        if (day.date === selectedDate) {

                            return (
                                <Card key={day.id} title={day.title}>
                                    {day.type !== "none" && (
                                        <div style={{ ...radioStil, backgroundColor: boja(day.type) }}></div>
                                    )}
                                    <p>{day.description}</p>
                                    <Button type="primary" style={margina}>Edit event</Button>
                                    <Button icon={<DeleteOutlined />} onClick={() => handleDeleteEvent(day.id)} style={margina}>
                                        Delete
                                    </Button>
                                </Card>
                            );
                        }
                        return null;
                    })}
                </Modal>
            )}


        </div>
    );
}

export default Mjesecni;
