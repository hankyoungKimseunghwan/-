var imgNum = 1;
var img = new Image();
var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var scrollYPos = 0;

img.src = "./images/crow/old_face_0.png";

window.addEventListener('scroll', function(e) {
    scrollYPos = Math.round(window.scrollY / 20);
    
    console.log("scroll y: " + window.scrollY + ", " + scrollYPos);
    
    if (scrollYPos == 0) scrollYPos = 0;
    if (scrollYPos > 90) scrollYPos = 90;
    player(scrollYPos);
});

function player(num) {
    img.src = "./images/crow/old_face_" + num + ".png";
}

img.addEventListener('load', function(e) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, 0, 0);
});