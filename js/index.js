var ele;
for (i = 0; i < 6; i++)
    document.getElementsByClassName("svg")[i].addEventListener("click", function () {
        document.getElementsByClassName("info")[0].addEventListener("click", function () {
            document.querySelector(iconName).style.display = "none";
            setTimeout(function () {
                document.querySelector('.center').style.transform = "translateX(0px)";
                svg.style.transform = "translate(0, 0)";
                for (j = 0; j < 6; j++) {
                    if ((j + 1) != ele.charAt(ele.length - 1))
                        document.getElementsByClassName("svg")[j].style.width = "100%";
                        document.getElementsByClassName("svg")[j].classList.remove('slide' + (j + 1));
                }
            }, 400);
        });
        ele = this.attributes['id'].value;

        var infopos = document.querySelector('.centered'); //gets info position and then shifts it accly..
        document.querySelector('.center').style.transform = "translateX(" + (infopos.offsetLeft - 10) + "px)";
        
        var svg = document.getElementById(ele);
        var svgTopRef = document.getElementsByClassName("svg")[0].offsetTop;
        svg.style.transform = "translate(-" + (svg.offsetLeft - 8) + "px ,-" + (svg.offsetTop - 10) + "px)";

        for (i = 0; i < 6; i++){
            if((i+1) != ele.charAt(ele.length-1))
            document.getElementsByClassName("svg")[i].classList.add('slide' + (i + 1));
        }
    });
var iconName;
for (i = 0; i < 6; i++)
document.getElementsByTagName("A")[i].addEventListener("click", function () {
        iconName = this.attributes['href'].value; //stores the menu icon which is selected by -u
    setTimeout(function () {
        document.querySelector(iconName).classList.add('show');
        document.querySelector(iconName).style.display = "block";
        document.getElementsByTagName("BODY")[0].style.overflowY = "visible"; //visible the overflow of page when content has to be displayed
        for (i = 0; i < 6; i++)
            if ((i + 1) != ele.charAt(ele.length - 1))
            document.getElementsByClassName("svg")[i].style.width = "0";
        }, 400);
});
