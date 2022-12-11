import React from "react";
import { CalendarList } from "react-native-calendars";

import useCalendar from "@hooks/useCalendar";

function Calendar() {
  const { setSelectedDate, marked } = useCalendar();

  return (
    <CalendarList
      horizontal
      pagingEnabled
      minDate="2022-01-01"
      maxDate="2023-01-01"
      markedDates={marked}
      onDayPress={(day) => {
        setSelectedDate(day.dateString);
      }}
      theme={{
        selectedDayBackgroundColor: "#009688",
        arrowColor: "#009688",
        dotColor: "#009688",
        todayTextColor: "#009688",
      }}
    />
  );
}

export default Calendar;
