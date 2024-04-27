export default function formatIsoDateToDmy(isoDateString) {
  const [datePart] = isoDateString.split("T");
  const [year, month, day] = datePart.split("-");

  // Форматируем дату в формат DD.MM.YYYY
  return `${day}.${month}.${year}`;
}
