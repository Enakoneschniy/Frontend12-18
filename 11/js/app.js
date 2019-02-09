'use strict';

let h1 =  document.createElement('h1');
h1.innerText = 'Hello Artem!';
h1.innerHTML = `
<ul>
    <li>sdgfh</li>
    <li>dsfghj</li>
</ul>
`;

//document.body.appendChild(h1);
console.log(h1);


const p = document.getElementById('text');
p.appendChild(h1);
document.getElementsByClassName('text');
document.getElementsByTagName('p');

const artem = document.getElementById('artem');
const link = document.getElementById('link');
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('form submited!!!');
});
link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Link Click!!!');
});
artem.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('AAAAAA');
});

document.addEventListener('click', onClick);

// document.removeEventListener('click', onClick);

function onClick(event) {
    // console.log(event.target.classList.contains('btn'));
    if(event.target.classList.contains('btn')) {
        alert('Hello Artem!');
    }
}
