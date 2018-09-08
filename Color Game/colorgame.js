var redSpan=document.getElementById("r");
var greenSpan=document.getElementById("g");
var blueSpan=document.getElementById("b");
var fnav=document.querySelector("nav");
var btns=document.querySelectorAll("button");
var secrow=document.querySelectorAll(".second_row");
var tele=document.querySelectorAll("td")
var diff=0;//0 means hard and 1 means easy
var headRandomIndex;
var headRandomColor;

btns[1].addEventListener("click", function(){
	this.classList.remove("clicked");
	btns[2].classList.remove("clicked");
	this.classList.add("clicked");
	random_easy();
});

btns[2].addEventListener("click", function(){
	this.classList.remove("clicked");
	btns[1].classList.remove("clicked");
	this.classList.add("clicked");
	random_hard();
});

btns[0].addEventListener("click", function(){
	restore();

	//location.reload();
	randomcol();
})

function random_hard(){
	restore();
	diff=0;
	for (var i=0;i<secrow.length;i++)
		secrow[i].classList.remove("hide");

	randomcol();
}

function random_easy(){
	restore();
	diff=1;
	for (var i=0;i<secrow.length;i++)
		secrow[i].classList.add("hide");
	// secrow[0].classList.add("hide");
	// tele[0].classList.add("hide");
	randomcol();
}

function randomcol()
{
	if (diff==1) 
	{
		var red=[];
		var green=[];
		var blue=[];
		for (var i=0;i<3;i++)
		{
			var r=Math.floor(Math.random() * (255 - 0 + 1)) + 0;
			var g=Math.floor(Math.random() * (255 - 0 + 1)) + 0;
			var b=Math.floor(Math.random() * (255 - 0 + 1)) + 0;
			red.textContent=r;
			green.textContent=g;
			blue.textContent=b;
			var str="rgb(" + r + "," + g + "," + b + ")";
			tele[i].style.backgroundColor=str;
			red.push(r);
			green.push(g);
			blue.push(b);
		}
		headRandomIndex=Math.floor(Math.random() * ((red.length-1) - 0 + 1)) + 0;
		tele[headRandomIndex].setAttribute("selected", "1");
		headRandomColor="rgb(" + red[headRandomIndex] + "," + green[headRandomIndex] + "," + blue[headRandomIndex] + ")";
		//fnav.style.backgroundColor=headRandomColor;
		redSpan.textContent=red[headRandomIndex];
		greenSpan.textContent=green[headRandomIndex];
		blueSpan.textContent=blue[headRandomIndex];

	}
	if(diff==0)
	{
		var red=[];
		var green=[];
		var blue=[];
		for (var i=0;i<6;i++)
		{
			var r=Math.floor(Math.random() * (255 - 0 + 1)) + 0;
			var g=Math.floor(Math.random() * (255 - 0 + 1)) + 0;
			var b=Math.floor(Math.random() * (255 - 0 + 1)) + 0;
			red.textContent=r;
			green.textContent=g;
			blue.textContent=b;
			var str="rgb(" + r + "," + g + "," + b + ")";
			tele[i].style.backgroundColor=str;
			red.push(r);
			green.push(g);
			blue.push(b);
		}
		headRandomIndex=Math.floor(Math.random() * ((red.length-1) - 0 + 1)) + 0;
		tele[headRandomIndex].setAttribute("selected", "1");
		headRandomColor="rgb(" + red[headRandomIndex] + "," + green[headRandomIndex] + "," + blue[headRandomIndex] + ")";
		//fnav.style.backgroundColor=headRandomColor;
		redSpan.textContent=red[headRandomIndex];
		greenSpan.textContent=green[headRandomIndex];
		blueSpan.textContent=blue[headRandomIndex];
	}

	//for adding the click functionality
	for(var i=0;i<tele.length;i++)
	{
		tele[i].addEventListener("click", tileclick);
	}
}

function restore()
{
	for(var i=0;i<tele.length;i++)//to unhide any block
	{
		tele[i].classList.remove("hide");
		tele[i].setAttribute("selected","0");
	}
	//to make buttons work again
	for(var i=0;i<btns.length;i++)
	{
		btns[i].disabled=false;
	}
}

function alertUser()
{
	document.getElementById("won").innerHTML="<button>YOU WON!!</button>";
	for(var i=0;i<btns.length;i++)//to disable buttons
	{
		btns[i].disabled=true;
	}
	//to disable clicks on tiles
	//for adding the click functionality
	for(var i=0;i<tele.length;i++)
	{
		tele[i].removeEventListener("click",tileclick);
	}
	fnav.style.backgroundColor=headRandomColor;
	document.getElementById("won").addEventListener("click", function(){
		location.reload();
	})
	
}

function tileclick(){
	if (this.getAttribute("selected")=="1")
	{
		alertUser();
	}
	else
	{
		this.classList.add("hide")
	}
}