var numbersquare=6;
var colors = generateRandomColor(numbersquare);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");

var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");

var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numbersquare=3;
colors=generateRandomColor(numbersquare);
pickedcolor=pickcolor();
colordisplay.textContent = pickedcolor;
messagedisplay.textContent="";
h1.style.background="steelblue";
for(var i = 0 ; i<squares.length ; i++){
if( colors[i] ){
	squares[i].style.background=colors[i];
}
else
squares[i].style.display="none";

}

});

hardBtn.addEventListener("click",function(){
	easyBtn.classList .remove("selected");
	hardBtn.classList.add("selected");
	numbersquare=6;
colors=generateRandomColor(numbersquare);
pickedcolor=pickcolor();
colordisplay.textContent=pickedcolor;
messagedisplay.textContent="";
h1.style.background="steelblue";
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
squares[i].style.display="block";
}

});

var resetbutton=document.querySelector("#reset");

resetbutton.addEventListener("click",function(){
//generate all new colors 
resetbutton.textContent="new colors";
colors = generateRandomColor(numbersquare);
// pick a random color from an array
pickedcolor = pickcolor();
//change the text content of the header
colordisplay.textContent=pickedcolor;
messagedisplay.textContent="";
//change the colors of squares
for (var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
}
h1.style.background="steelblue";

});


colordisplay.textContent = pickedcolor;

for(var i=0 ; i < squares.length; i++){

squares[i].style.background = colors[i];

squares[i].addEventListener("click",function(){

var colorclicked = this.style.background;
/*colorclickedconsole.log(,pickedcolor);*/
if( colorclicked === pickedcolor){
	messagedisplay.textContent="CORRECT";
	changecolor(colorclicked);
h1.style.background=colorclicked;
resetbutton.textContent="play again ?";
}
else{
     	this.style.background="#232323";
     	messagedisplay.textContent="TRY AGAIN";
}

});
}

function changecolor(color){
for(var i=0; i<squares.length; i++){
squares[i].style.background = color;    
                                   }
                            }

function pickcolor(){

	var random =Math.floor(Math.random()*colors.length);
	return colors[random];
}


function generateRandomColor(num){
 
 var arr=[];
 
 	for (var i = 0 ; i < num ; i++ ){
         arr.push(RandomColor());

	}

	return arr ;

}

function RandomColor(){
var r=Math.floor(Math.random()*256);

var g=Math.floor(Math.random()*256);

var b=Math.floor(Math.random()*256);

return "rgb("+r+", "+g+", "+b+")";
}