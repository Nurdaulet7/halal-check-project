export default function isDateBeforeToday(dateString) {
  const dateParts = dateString.split(".");
  const date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
  const currentDate = new Date();
  return date > currentDate;
}
