var elements = document.getElementsByClassName('copy');
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function() {
    var style = this.closest('.right_function').getElementsByClassName("image_copy")[0].style;
    style.display = 'inline';
	//---10sec------
	if (this.timerId) clearInterval(this.timerId);
    this.timerId = setTimeout(function() {
      style.display = 'none';
    },10000);
    //---------
  }
}
//---потеря фокуса------
window.onblur = function() {
  var elements = document.getElementsByClassName('image_copy');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
  }
}