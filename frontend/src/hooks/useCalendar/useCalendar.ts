import React from "react";

const useCalendar = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();

  const date = `${year}-${month}-${day}`;

  const [selectedDate, setSelectedDate] = React.useState(date);

  const marked = {
    [selectedDate]: { selected: true },
  };

  return { selectedDate, setSelectedDate, marked };
};

export default useCalendar;
