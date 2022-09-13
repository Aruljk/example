var addToDoButton=document.getElementById("addTODO");
var toDocontainer=document.getElementById("toDocontainer");
var inputfield=document.getElementById("inputfield");

addToDoButton.addEventListener("click",function(){
var paragraph=document.createElement('p')
paragraph.innerText=inputfield.value;
toDocontainer.appendChild(paragraph);
inputfield.value="";

paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration="line-through";
})
paragraph.addEventListener('dblclick',function(){
    toDocontainer.removeChild(paragraph) ;
})

})

function calculate(){
	var unitprice,qty,total,
	
	 documents=this.parentNode.parentNode,
	 unitprices=documents.getElementsByClassName("unitprice")[0],
	 qtys=documents.getElementsByClassName("qty")[0],
	 totals=documents.getElementsByClassName("total")[0];
	
	unitprice=unitprices.innerText;
	qty=qtys.value;
	total=unitprice*qty;
	totals.innerText=total;
	}
	
	
	let btn=document.getElementsByClassName("btn");
	
	/
	for(var i=0;i<btn.length; i++){
	
		btn[i].addEventListener("click",calculate);
	}
	
	
	function totalprice(){
	
	var unitprice,qty,total,
	
	documents=this.parentNode.parentNode,
	unit=documents.getElementsByClassName("unitprice")[0],
	quantity=documents.getElementsByClassName("qty")[0],
	overallprice=documents.getElementsByClassName("total")[0];
	
	
	unitprice=unit.innerText;
	qty=quantity.value;
	total=unitprice*qty;
	overallprice.innerText=total;
	
	}
	
	let btns=document.getElementsByClassName("btn")
	
	for(i=0; i<btns.length; i++){
		btns[i].addEventListener("click",totalprice);
	}

