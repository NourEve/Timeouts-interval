
let i = 0;
let txt = 'Prout';
let speed = 300;

function typeWriter() {
    let newTxt = document.getElementById("newParag");
  if (i < txt.length) {
    newTxt.innerHTML += txt[i];
    i++;
  }
  else if (i == txt.length) {
    newTxt.textContent='';
    i=0;
  }
  setTimeout(typeWriter, speed);
}
typeWriter();


