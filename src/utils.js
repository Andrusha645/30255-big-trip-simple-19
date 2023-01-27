//import dayjs from 'dayjs';
const DATE_FORMAT = 'DD/MM/YYYY HH:mm';


function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}
const getRandomPositiveInteger = (a,b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function humanizeTaskDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

export {getRandomArrayElement, getRandomPositiveInteger, humanizeTaskDueDate};

