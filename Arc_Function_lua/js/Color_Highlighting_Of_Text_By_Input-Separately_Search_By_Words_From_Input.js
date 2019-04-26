const mysearch = (key,orig,wrap) => {
    key = key.trim().replace(/[\\^$*+?.()|[\]{}]/g, '\\$&').replace(/\s+/g, '|');
    if (!key) return orig;
    return orig.replace(new RegExp('(<[^>]*>)|' + key, 'gi'), (NEW, old) => old ? old : wrap[0] + NEW + wrap[1]);
}
 
let input = document.querySelector('#myInput');
let txt = document.querySelector('#myUL').innerHTML;
//let txt2 = document.querySelector('#text2').innerHTML;
//let txt3 = document.querySelector('#text3').innerHTML;
 
input.addEventListener('input',() => {
    document.querySelector('#myUL').innerHTML = mysearch(input.value, txt, ['<span class="highlight">','</span>']);
    //document.querySelector('#text2').innerHTML = mysearch(input.value, txt2, ['<span class="highlight">','</span>']);
  //document.querySelector('#text3').innerHTML = mysearch(input.value, txt3, ['<span class="highlight">','</span>']);
});



/*--------------------------------------------------------------------------------------
ВЫДЕЛЯТЬ ТЕКСТ ВВОДОМ
Цветное выделение текста при вводе - отдельный поиск по словам из ввода
Color_Highlighting_Of_Text_By_Input-Separately_Search_By_Words_From_Input.js
---------------------
-------------
input - это ид инпута (<... id="input" ...>)   
text - это ид блока в котором искать и подсвечивать
text2 - это ид блока в котором искать и подсвечивать
text3 - это показано как продолжить скрипт, для еще большего количества блоков
-------------
-------------
CSS:
.highlight {
    background-color: yellow;
  }
-------------
-------------
Пример: Html:

<input type="text" id="input">

<div id="text">
    Lorem lorem ipsum dolor sit amet, maxime sed, illum veniam harum quos? 
    <ul>
        <li><a href="#"> Lorem ipsum dolor sit amet, </a></li>
        <li><a href="#"> consectetur adipisicing elit.</a></li>
    </ul>
</div>

<h2>Ниже</h2>

<div id="text2">
    Both the spellings ruble and rouble are used in English.
    <ul>
        <li><a href="#"> The Russian plurals that may be seen, </a></li>
        <li><a href="#"> according to Russian grammar.</a></li>
        <li><a href="#"> followed by genitive plural рублей rubley</a></li>
        <li><a href="#"> In several languages spoken in Russia</a></li>
        <li><a href="#"> Soviet banknotes had their value printed</a></li>
    </ul>
</div>
--------------------------------------------------------------------------------------*/
// http://www.cyberforum.ru/javascript-beginners/thread2437256.html#post13516318
// https://codepen.io/anon/pen/pBxZmL
// https://codepen.io/ArcCode/pen/oOaJzX