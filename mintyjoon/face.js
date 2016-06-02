const face = document.getElementById('face');
const freshen = document.getElementById('freshen');
const minty = require('minty');

freshen.addEventListener('click', () => {
  face.src = 'think.png';
  face.style.width = '155px';
  face.style.height = '70px';
  face.style.left = '190px';
  face.style.top = '15px';
  setTimeout(() => {
    face.src = 'surp.png';
  }, 900);
  setTimeout(() => {
    face.src = 'mface.png';
    face.style.width = '120px';
    face.style.height = '60px';
    face.style.left = '210px';
    face.style.top = '25px';
  }, 1800);

    const test = minty.wrap(
    (function() {
      editor.getValue();
    })()
);

console.log(test);

});
