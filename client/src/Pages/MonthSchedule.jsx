// import { useState } from 'react';
// import { Button, Calendar, Card, Modal } from 'antd';
// import { DeleteOutlined } from '@ant-design/icons';
// import NavUpper from '../components/NavUpperSch';
// import "../App.css"
// import { useLocation } from 'react-router-dom';

// function Mjesecni() {
//     const location = useLocation();
//     const nazivRasporeda = location.state;
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [events, setEvents] = useState({
//         key:0,
//         date:"",
//         about:"",
//         color:""
//     });
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [selectedEventIndex, setSelectedEventIndex] = useState(null);

//     const handleDateSelect = value => {
//         const formattedDate = value.format('DD. MM. YYYY.');
//         setSelectedDate(formattedDate);
//         setIsModalVisible(true);
//     };

//     const handleCancel = () => {
//         setIsModalVisible(false);
//         setSelectedEventIndex(null);
//     };


//     const handleAddEvent = () => {
//         if (selectedDate !== null) {
//             const newEvent = { details: 'Event details' };
//             const updatedEvents = { ...events };

//             if (updatedEvents[selectedDate]) {
//                 updatedEvents[selectedDate].push(newEvent);
//             } else {
//                 updatedEvents[selectedDate] = [newEvent];
//             }

//             setEvents(updatedEvents);
//         }
//     };

//     const handleDeleteEvent = () => {
//         if (selectedDate !== null && selectedEventIndex !== null) {
//             const updatedEvents = { ...events };
//             updatedEvents[selectedDate].splice(selectedEventIndex, 1);
//             setEvents(updatedEvents);
//             setSelectedEventIndex(null);
//         }
//     };

//     const CellRender = value => {
//         const formattedDate = value.format('DD. MM. YYYY.');
//         const eventsForDate = events[formattedDate];

//         if (eventsForDate && eventsForDate.length > 0) {
//             return (
//                 <div>
//                     {eventsForDate.map((event, index) => (
//                         <div key={index} className="event-indicator">
//                             <span className="event-dot" />
//                         </div>
//                     ))}
//                 </div>
//             );
//         }

//         return null;
//     };


//     return (
//         <div className="tablica">
//             <NavUpper id="navSchGornja" naziv={nazivRasporeda} raspored={nazivRasporeda}/>
//             <Calendar id="kalendar" onSelect={handleDateSelect} CellRender={CellRender} style={kalendarStil} />

//             {selectedDate && (
//                 <Modal
//                     title={`Događaji za ${selectedDate}: `}
//                     open={isModalVisible}
//                     onCancel={handleCancel}
//                     footer={[
//                         <Button key="cancel" onClick={handleCancel}>
//                             Zatvori
//                         </Button>,
//                         <Button key="addNew" onClick={handleAddEvent}>
//                             Dodaj događaj
//                         </Button>,
//                     ]}
//                 >
//                     {events[selectedDate] && events[selectedDate].length > 0 ? (
//                         events[selectedDate].map((event, index) => (
//                             <Card key={index} title={`Event ${index + 1}`}>
//                                 <p>{event.details}</p>
//                                 <Button
//                                     type="danger"
//                                     icon={<DeleteOutlined />}
//                                     onClick={() => setSelectedEventIndex(index)}
//                                 >
//                                     Izbriši
//                                 </Button>
//                             </Card>
//                         ))
//                     ) : (
//                         <p>Nema događaja za ovaj datum</p>
//                     )}
//                     {selectedEventIndex !== null && (
//                         <Button type="danger" onClick={handleDeleteEvent}>
//                             Potvrdi brisanje
//                         </Button>
//                     )}
//                 </Modal>
//             )}
//         </div>
//     );
// }

// export default Mjesecni;

import { Badge, Calendar } from 'antd';
// import dayjs from 'dayjs';

//warning -> žuta
//success -> zelena
//error -> crvena



const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};
const kalendarStil = {
    height: 'auto',
    width: '1000px',
    margin: 'auto',
    marginTop: '20px',
    padding: "10px"
};


function MonthSchedule(){
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    return <Calendar cellRender={cellRender} style={kalendarStil} />;
}

export default MonthSchedule;

