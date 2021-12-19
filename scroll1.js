//document.addEventListener('DOMContentLoaded', setVal);



var targetScrollPos;
var scrollPos = 0;
var nowScrollPos = 0;

let nowIndex = 0;
var menu = document.querySelectorAll('#menus ul li');
var contents = document.querySelectorAll('.targetItem');


let home = document.querySelector('#goHome');

let scrollInterval;

for( var i =0; i < menu.length; i++)
{
menu[i].addEventListener('click', menuClick);

    function menuClick()
    {
        clearInterval(scrollInterval);
        var index = this.getAttribute('clickVal');
        targetScrollPos = contents[index].offsetTop;

        //console.log(targetScrollpos);

        //window.scroll(0, targetScrollpos );

        scrollInterval = setInterval(moveTo, 50);
    }
}
home.addEventListener('click', homeClick);


function homeClick()
{
    clearInterval(scrollInterval);
    targetScrollPos = contents[0].offsetTop;
    scrollInterval = setInterval(moveTo, 50);
}


window.addEventListener('scroll', scrollFn);

function scrollFn()
{
    nowScrollPos = pageYOffset;
    scrollPos = nowScrollPos;
}

function moveTo()
{
    scrollPos += (targetScrollPos - nowScrollPos) * 0.2;
    window.scroll(0, Math.round(scrollPos));

    if( Math.abs(targetScrollPos - scrollPos) < 1)
    {
        window.scroll(0, targetScrollPos);
        nowScrollPos = targetScrollPos;
        clearInterval(scrollInterval);
    }

    //requestAnimationFrame(moveTo);
}

