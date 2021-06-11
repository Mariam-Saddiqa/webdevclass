var id = null;

function mymove() {
  var elem = document.getElementById("block");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos ==655) {            // window.innerHeight
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.bottom = pos + 'px';
    }
  }
}