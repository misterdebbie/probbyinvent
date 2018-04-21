console.log('chill nugget');

let colaObj = {
  name: 'cola fresh!!!',
  colaClicks: 0,
  url: 'http://res.cloudinary.com/devbov2b0/image/upload/v1524266150/bevv_adaaol.png',
  displayName: function () {
    let updateName = document.getElementById('colaName');
    updateName.textContent = this.name;
  },
  countClicks: function () {
   let colaEl = document.getElementById('colaTarget');
    colaEl.addEventListener('click', () => {
      console.log('you clicked the cola!');
      this.colaClicks += 1;
      console.log(this.colaClicks);
      if (this.colaClicks > 5){
        console.log('you clicked ' + this.colaClicks + ' times. STOP');
      }
      let totalColaClicks = document.getElementById('colaClicks');
      totalColaClicks.textContent = this.colaClicks;
    }, false);
  }
}
colaObj.displayName();
colaObj.countClicks();

let burgerObj = {
  name: 'cheeseburgerrrrrr',
  burgerClicks: 0,
  url: 'http://res.cloudinary.com/devbov2b0/image/upload/v1524266150/bevv_adaaol.png',
  displayName: function () {
    let updateName = document.getElementById('burgerName');
    updateName.textContent = this.name;
  },
  countClicks: function () {
   let burgerEl = document.getElementById('burgerTarget');
    burgerEl.addEventListener('click', () => {
      console.log('you clicked the burger!');
      this.burgerClicks += 1;
      console.log(this.burgerClicks);
      if (this.burgerClicks > 5){
        console.log('you clicked ' + this.burgerClicks + ' times. STOP');
      }
      let totalBurgerClicks = document.getElementById('burgerClicks');
      totalBurgerClicks.textContent = this.burgerClicks;
    }, false);
  }
}
burgerObj.displayName();
burgerObj.countClicks();

let test = 'YANG';
let el = document.createElement('p');
el.className = 'pink';
el.textContent = test;
el.addEventListener('click', () => {
  let total = 0;
  total += 1;
  console.log(`my name is ${test}`);
  document.body.style.backgroundColor = 'lightseagreen';
});
document.body.appendChild(el);

let closureTest = 5;
let myEl = document.createElement('p');
myEl.textContent = closureTest;
myEl.addEventListener('click', (function(closureCopy){
  return function(){
    console.log(`this is the ${closureCopy}`);
    console.log(closureCopy += 1);
    console.log(`this is the closureTest variable ${closureTest}`);
  };
})(closureTest));
document.body.appendChild(myEl);
