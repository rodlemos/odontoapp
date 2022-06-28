import {
  eachDayOfInterval,
  endOfWeek,
  format,
  getDate,
  getDay,
  startOfWeek,
} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

function getDayDate(date: Date) {
  return format(date, "dd/MM/yyyy", { locale: ptBR });
}

function getWeekDays() {
  const now = new Date();
  const week = eachDayOfInterval({
    start: startOfWeek(now, { weekStartsOn: 1 }),
    end: endOfWeek(now, { weekStartsOn: 1 }),
  });

  return week;
}

function getDayName(date: Date, fullname = false) {
  let dayName = "";

  if (fullname) {
    dayName = format(date, "EEEE", { locale: ptBR });
  } else {
    dayName = format(date, "EEEEEE", { locale: ptBR });
  }

  return dayName.charAt(0).toUpperCase() + dayName.slice(1);
}

export { getDayDate, getWeekDays, getDayName };
