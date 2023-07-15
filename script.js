//your JS code here. If required.
const div = document.createElement('div');
div.id = 'line';

div.style.width = '200px';
div.style.height = '2px';
div.style.backgroundColor = 'black';
document.body.appendChild(div);

let i = 0;
setInterval(function() {
    // console.log(i);
  i++;
  div.style.transform = `rotate(${i%360}deg)`;
}, 25);