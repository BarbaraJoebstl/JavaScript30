
const addStuff = document.querySelector('.add-stuff');
const stuffContainer = document.querySelector('.fifteen-stuff');
const stuffList = JSON.parse(localStorage.getItem('stuffstuff')) || [];

function addStuffToList(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    //es 6 magic
    text,
    done: false
  }
  stuffList.push(item);
  populateList(stuffList, stuffContainer);
  localStorage.setItem('stuffstuff', JSON.stringify(stuffList));
  this.reset();
};

function populateList(stuffstuff, stuffContainer) {
  stuffContainer.innerHTML = stuffstuff.map((item, i) => {
    return `
      <li>
        <input type="checkbox" data-index= ${i} id="item${i}" ${item.done ? 'checked': ''} />
        <label for="item${i}">${item.text}</label>
      </li>
      `;
  }).join('');
}

function toggleDone(e) {
  if(!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  stuffList[index].done = !stuffList[index].done;
  localStorage.setItem('stuffstuff', JSON.stringify(stuffList));
  populateList(stuffList, stuffContainer);
}

addStuff.addEventListener('submit', addStuffToList);
stuffContainer.addEventListener('click', toggleDone);

populateList(stuffList, stuffContainer);
