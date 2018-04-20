console.log('nugget');
let puppyEl = document.getElementById('puppyTarget');
let total = 0;
/*puppyEl.addEventListener('click', function(){
  console.log('you clicked the puppy');
  total += 1;
  console.log(total);
}, false);*/

puppyEl.addEventListener('click', () => {
  console.log('you clicked the puppy!');
  total += 1;
  console.log(total);
  if (total > 5){
    console.log('you clicked ' + total + ' times. STOP');
  }
}, false);
