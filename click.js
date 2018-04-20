console.log('nugget');
let colaEl = document.getElementById('colaTarget');
let colaTotal = 0;

let colaObj = {
  name: 'cola fresh'
};
let updateName = document.getElementById('colaName');
updateName.textContent = colaObj.name;

colaEl.addEventListener('click', () => {
  console.log('you clicked the cola!');
  colaTotal += 1;
  console.log(colaTotal);
  if (colaTotal > 5){
    console.log('you clicked ' + colaTotal + ' times. STOP');
  }
  let totalColaClicks = document.getElementById('colaClicks');
  totalColaClicks.textContent = colaTotal;
}, false);

let burgerEl = document.getElementById('burgerTarget');
let burgerTotal = 0;

let burgerObj = {
  name: 'cheeseburgerrrr'
};

let updateBurger = document.getElementById('burgerName');
updateBurger.textContent = burgerObj.name;

burgerEl.addEventListener('click', () => {
  console.log('you clicked the burgerrrrr!');
  burgerTotal += 1;
  console.log(burgerTotal);
  if (burgerTotal > 3){
    console.log('you clicked ' + burgerTotal + ' times. STOP');
  }
  let totalBurgerClicks = document.getElementById('burgerClicks');
  totalBurgerClicks.textContent = burgerTotal;
}, false);
