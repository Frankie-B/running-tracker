const goal = 25;
let entries = [];


const entriesWrapper = document.querySelector('#entries');
document.querySelector('#target').innerText = goal;

const addNewEntry = (newEntry) => {
  entriesWrapper.removeChild(entriesWrapper.firstElementChild);

  const listItem = document.createElement('li');
  const listValue = document.createTextNode(newEntry.toFixed(1));

  listItem.appendChild(listValue);
  entriesWrapper.appendChild(listItem);
}

const reducer = (total, currentValue) => {
  return total + currentValue;
};

const calcTotal = () => {
  const totalValue = entries.reduce(reducer).toFixed(1);
  document.querySelector('#total').innerText = totalValue
  document.querySelector('#progressTotal').innerText = totalValue

};

const calcAverage = () => {
  const average = (entries.reduce(reducer) / entries.length).toFixed(1);
  document.querySelector('#average').innerText = average;
}

const weeklyHigh = () => {
  const high = Math.max(...entries)
  document.querySelector('#high').innerText = high;
}

const handleSubmit = (e) => {
  e.preventDefault();
  const entry = Number(document.querySelector('#entry').value);
  if (!entry) return;

  document.querySelector('form').reset()

  entries.push(entry);
  addNewEntry(entry);

  calcTotal();
  calcAverage();
  weeklyHigh();
};

const form = document.querySelector('form').addEventListener('submit', handleSubmit);