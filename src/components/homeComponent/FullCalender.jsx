import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const MyFullCalendar = () => {
  const [events, setEvents] = useState([
    { title: "Event 1", start: "2024-10-08" },
    { title: "Event 2", start: "2024-10-10" },
    {
      title: "Meeting",
      start: "2024-10-11T14:00:00",
      end: "2024-10-11T15:00:00",
    },
  ]);

  const handleEventClick = (info) => {
    alert(`Event: ${info.event.title}`);
  };

  const handleDateSelect = (info) => {
    const title = prompt("Enter event title");
    if (title) {
      setEvents([...events, { title, start: info.startStr, end: info.endStr }]);
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        selectable={true}
        select={handleDateSelect}
        editable={true}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
      />
    </div>
  );
};

export default MyFullCalendar;
