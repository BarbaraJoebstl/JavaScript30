//get the node list
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    //takes everything from the node, that starts with "data-"
  console.log('change');
  const suffix = this.dataset.sizing || '';
  console.log(suffix);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
