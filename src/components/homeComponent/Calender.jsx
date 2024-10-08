import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  // Import the calendar's styles

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log('Selected date:', newDate);
  };

  return (
    <div>
      <h2>Choose a date:</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
};

export default MyCalendar;
