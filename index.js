let entries = [];


const entriesWrapper = document.querySelector('#entries');

const addNewEntry = (newEntry) => {
  entriesWrapper.removeChild(entriesWrapper.firstElementChild);
  // console.log(newEntry);
  const listItem = document.createElement('li');
  const listValue = document.createTextNode(newEntry);

  listItem.appendChild(listValue);
  entriesWrapper.appendChild(listItem);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const entry = Number(document.querySelector('#entry').value);
  // console.log(entry);
  if (!entry) return;
  document.querySelector('form').reset()
  entries.push(entry);
  // console.log(entries);
  addNewEntry(entry);
};

const form = document.querySelector('form').addEventListener('submit', handleSubmit);