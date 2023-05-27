var randomnumber = Math.floor(Math.random() * 6) + 1;
var randomimage  = "dice" + randomnumber + ".png";
var image = "images/" + randomimage;

document.querySelectorAll("img")[0].setAttribute("src", image);


var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomimage2  = "dice" + randomnumber2 + ".png";
var image2 = "images/" + randomimage2;
document.querySelectorAll("img")[1].setAttribute("src", image2);

if(randomnumber === randomnumber2)
{
    document.querySelector("h1").innerHTML="Draw";
}

else if( randomnumber > randomnumber2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 win";
}
else
{
    document.querySelector("h1").innerHTML="Player 2 win 🚩";
}