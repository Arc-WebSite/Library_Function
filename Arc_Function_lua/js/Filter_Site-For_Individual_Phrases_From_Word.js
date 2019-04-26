function myFunction() {
    const words = document.querySelector('#myInput').value.toUpperCase().trim().split(/\s+/g);
    document.querySelectorAll('#myUL li').forEach(li => {
        const text = li.textContent.toUpperCase();
 
        if (words.every(x => text.indexOf(x) > -1)) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    });
}
 
jQuery("#myInput").keyup(myFunction);
//let input = document.querySelector('#myInput');
//input.addEventListener('keyup', () => myFunction());