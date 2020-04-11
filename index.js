var randomNumber = Math.random();
var newValue= Math.floor((randomNumber*6)+1);


var randomDiceImage = "dice" + newValue + ".png" ;

var imageSource = "images/" + randomDiceImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);


var randomNumber = Math.random();
var newValue1= Math.floor((randomNumber*6)+1);

var randomDiceImage1 = "images/dice" + newValue1 + ".png";

var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage1);


if(newValue > newValue1)
{
  document.querySelector("h3").innerHTML = "अर्जुन ने खेल जीत लिया है";


}

else if(newValue<newValue1)
{
  document.querySelector("h3").innerHTML = "भीम ने खेल जीत लिया है";
}

else
{
    document.querySelector("h3").innerHTML = "मैच ड्रा रहा है";
}
