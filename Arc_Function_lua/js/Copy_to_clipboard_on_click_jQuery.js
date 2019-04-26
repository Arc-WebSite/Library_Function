function selectText(elementId) {
var doc = document,
text = doc.getElementById(elementId),
range,
selection;
if (doc.body.createTextRange) {
range = document.body.createTextRange();
range.moveToElementText(text);
range.select();
} else if (window.getSelection) {
selection = window.getSelection();
range = document.createRange();
range.selectNodeContents(text);
selection.removeAllRanges();
selection.addRange(range);
}}
$(".copy").click(function() {
selectText(this.id);
document.execCommand("copy");
/*------------------------------------------------------*/
window.getSelection().removeAllRanges();//Снять выделение
/*------------------------------------------------------*/
});