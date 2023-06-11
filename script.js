const itemList = document.getElementById('item-list');
const addBtn = document.getElementById('add-btn');
const itemInput = document.getElementById('item-input');

const items = ['Item 1', 'Item 2', 'Item 3'];

function renderList() {
  itemList.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    itemList.appendChild(li);
    li.addEventListener('click', () => {
      removeItem(item);
    });
  });
}

function addItem(item) {
  items.push(item);
  renderList();
}

function removeItem(item) {
  const index = items.indexOf(item);
  if (index > -1) {
    items.splice(index, 1);
    renderList();
  }
}

renderList();

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const newItem = itemInput.value;
  if (newItem.trim() !== '') {
    addItem(newItem);
    itemInput.value = '';
  }
});
