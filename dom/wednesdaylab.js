var spanCount = 0;


document.addEventListener('DOMContentLoaded', function () {
    var button = document.createElement("button");
    button.innerHTML = "Do Something";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    button.addEventListener("click", function () {
        alert("You look like a million bucks!");
    });
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    var p = document.createElement("p");
    p.innerText = "blablablabla";
    document.body.appendChild(p);
    p.addEventListener('click', function () {
        p.style.color = getRandomColor()
    });

    var btn = document.createElement('button');
    var t = document.createTextNode("Justin Timothy Huntley");
     var span = document.createElement("span");

    body.appendChild(btn);
    btn.addEventListener("click", span);
    btn.appendChild(span);
    
})

    function pleaseJustWork() {
var x = document.createElement('Button');

var belleDivDevoe =  document.createElement('div');
x.appendChild(belleDivDevoe);
x.appendChild(belleDivDevoe);



var array = ['Noah', 'Emma', 'Liam', 'Olivia','William', 'Ava', 'Mason', 'Sophia', 'James', 'Isabella'];
// document.body.getElementById("colordiv").addEventListener("mouseover", function(){
//     "#colordiv".style.backgroundColor = 'black';
// });
// var div = document.getElementById("colordiv")
// div.addEventListener('mouseover', function () {
//     div.style.backgroundColor = black();
// });

