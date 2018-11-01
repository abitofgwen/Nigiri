// Find buttons & page
let popbutton = document.getElementById('popup');
let awaybutton = document.getElementById('close');
let popwindow = document.getElementById('popupwindow');

// Functions
let toggle = function() {
  popwindow.classList.toggle('pop-up');
  popwindow.classList.toggle('away');
  setTimeout(function(){
    popwindow.classList.toggle('out');
  },250);
}
// Event listeners
popbutton.addEventListener('click', toggle);
awaybutton.addEventListener('click', toggle);