import { useState, useRef, useEffect } from 'react';
import { DayPilot, DayPilotCalendar, DayPilotNavigator } from "@daypilot/daypilot-lite-react";
import '../App.css'
import NavUpper from '../components/NavUpperSch';
import { useLocation } from 'react-router-dom';

const styles = {
    wrap: {
        display: "flex"
    },
    left: {
        marginRight: "10px"
    },
    main: {
        flexGrow: "1"
    }
};

function WeekSchedule() {

    const location = useLocation();
    const nazivRasporeda = location.state;

    const calendarRef = useRef()

    const editEvent = async (e) => {
        const dp = calendarRef.current.control;
        const modal = await DayPilot.Modal.prompt("Update event text:", e.text());
        if (!modal.result) { return; }
        e.data.text = modal.result;
        dp.events.update(e);
    };


    const [calendarConfig, setCalendarConfig] = useState({
        viewType: "Week",
        durationBarVisible: false,
        timeRangeSelectedHandling: "Enabled",
        onTimeRangeSelected: async args => {
            const dp = calendarRef.current.control;
            const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
            dp.clearSelection();
            if (!modal.result) { return; }
            dp.events.add({
                start: args.start,
                end: args.end,
                id: DayPilot.guid(),
                text: modal.result
            });
        },
        onEventClick: async args => {
            await editEvent(args.e);
        },
        contextMenu: new DayPilot.Menu({
            items: [
                {
                    text: "Delete",
                    onClick: async args => {
                        const dp = calendarRef.current.control;
                        dp.events.remove(args.source);
                    },
                },
                {
                    text: "-"
                },
                {
                    text: "Edit...",
                    onClick: async args => {
                        await editEvent(args.source);
                    }
                }
            ]
        }),
        onBeforeEventRender: args => {
            args.data.areas = [
                {
                    top: 3,
                    right: 3,
                    width: 20,
                    height: 20,
                    symbol: "icons/daypilot.svg#minichevron-down-2",
                    fontColor: "#fff",
                    toolTip: "Show context menu",
                    action: "ContextMenu",
                },
                {
                    top: 3,
                    right: 25,
                    width: 20,
                    height: 20,
                    symbol: "icons/daypilot.svg#x-circle",
                    fontColor: "#fff",
                    action: "None",
                    toolTip: "Delete event",
                    onClick: async args => {
                        const dp = calendarRef.current.control;
                        dp.events.remove(args.source);
                    }
                }
            ];



        }
    });

    useEffect(() => {
        const events = [
            {
                id: 1,
                text: "Event 1",
                start: "2023-10-02T10:30:00",
                end: "2023-10-02T13:00:00",

            },

            {
                id: 4,
                text: "Event 4",
                start: "2023-10-01T11:30:00",
                end: "2023-10-01T14:30:00",
                backColor: "#cc4125",

            },
        ];

        const startDate = "2023-12-10";

        calendarRef.current.control.update({ startDate, events });
    }, []);

    const [date, setDate] = useState(new Date())//nista zasad

    return (
        <>
            <NavUpper id="navSchGornja" naziv={nazivRasporeda} raspored={nazivRasporeda} />
            <div id="gl" style={styles.wrap}>

                <div id="mon" style={styles.left}>
                    <DayPilotNavigator style={{backgroundColor: "white"}}
                        selectMode={"week"}
                        startDate={"2023-12-10"}
                        selectionDay={"2023-12-10"}
                        onTimeRangeSelected={args => {
                            calendarRef.current.control.update({
                                startDate: args.day
                            });
                        }}
                    />

                </div>

                <div id="day" style={styles.main}>
                    <DayPilotCalendar {...calendarConfig}  ref={calendarRef} />
                </div>

            </div>
        </>
    );
}

export default WeekSchedule
