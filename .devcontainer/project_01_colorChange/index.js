const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
 
  button.addEventListener('click', function (e) {
   
    if (e.target.id === 'green' ||e.target.id === 'red' || e.target.id === 'blue' || e.target.id === 'purple' ) {
     let bodyChange = body.style.backgroundColor = e.target.id; 
    } 
  } ); 
});


