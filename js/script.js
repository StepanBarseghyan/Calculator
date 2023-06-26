
var screenNum2 = document.getElementById("scr1");
var screenOper = document.getElementById("scr2");
var screenNum1 = document.getElementById("scr3");
var result;
var pers;


$('.numbers').on('click', function() {
	if(screenNum1.innerHTML.length<15){
		if(screenOper.innerHTML!=""){
		screenNum2.innerHTML+= this.innerHTML;
		}else{
		screenNum1.innerHTML+= this.innerHTML;
		}
	}
})
$('.symbols').on('click', function() {
	if(screenNum1.innerHTML!=""){
	screenOper.innerHTML= this.innerHTML;
	}
	check()	
})


//btn clean function

$('#btn1').on('click', function() {
	screenNum1.innerHTML="";
	screenNum2.innerHTML="";
	screenOper.innerHTML="";
})


//btn back function

$('#btn2').on('click', function() {
	screenNum1.innerHTML=screenNum1.innerHTML.slice(0, screenNum1.innerHTML.length-1);
})


// operations

$('#btn20').on('click', function() {
	var num=screenNum1.innerHTML;
	var num2=screenNum2.innerHTML;
	if(screenNum2.innerHTML.includes("+")){
		 result=parseFloat(num2)+parseFloat(num);
			screenNum1.innerHTML=result;
		 	screenNum2.innerHTML="";
			screenOper.innerHTML="";
	}else if(screenNum2.innerHTML.includes("-")){
		 result=parseFloat(num2)-parseFloat(num);
		screenNum1.innerHTML=result;
		screenNum2.innerHTML="";
		screenOper.innerHTML="";
	}else if(screenNum2.innerHTML.includes("×")){
		 result=parseFloat(num2)*parseFloat(num);
		screenNum1.innerHTML=result;
		screenNum2.innerHTML="";
		screenOper.innerHTML="";
	}else if(screenNum2.innerHTML.includes("÷")){
		 result=parseFloat(num2)/parseFloat(num);
		 screenNum2.innerHTML="";
		screenOper.innerHTML="";
		screenNum1.innerHTML=result;
	}else{
		screenNum1.innerHTML="";
		screenNum2.innerHTML="";
		screenOper.innerHTML="";
	}
})

function check(){
	if(screenOper.innerHTML!=""){
		screenNum2.innerHTML=screenNum1.innerHTML+screenOper.innerHTML;
		screenNum1.innerHTML="";
		screenOper.innerHTML="";
	}
}


// btn symbolMinus function

$('#btn19').on('click', function() {

if(!screenNum1.innerHTML.includes("-") && screenNum1.innerHTML!=""){
screenNum1.innerHTML="-"+ screenNum1.innerHTML;
	}
else if(screenNum1.innerHTML.includes("-")){
	screenNum1.innerHTML=screenNum1.innerHTML.slice(1, screenNum1.innerHTML.length);
}else{
	screenNum1.innerHTML
}

})



// btn percent function

$('#btn3').on('click', function() {
	
	var num1 = screenNum1.innerHTML;
	var num2 = screenNum2.innerHTML;
	if(screenNum2.innerHTML.includes("×")){
		 result=parseFloat(num2)*parseFloat(num1);
		pers = result/100
		screenNum1.innerHTML=pers;
		screenNum2.innerHTML="";
		screenOper.innerHTML="";
	}
})


// btn point function

$('#btn18').on('click', function() {
	if(!screenNum1.innerHTML.includes(".") && screenNum1.innerHTML!=""){
  screenNum1.innerHTML+=this.innerHTML
	}
})

// btn square root function

$('#btnLast2').on('click', function() {
	if(screenNum1.innerHTML!=""){
		var num1 = screenNum1.innerHTML;
		screenNum1.innerHTML=Math.sqrt(parseFloat(num1)).toFixed(3)
		}
})


// btn pow function

$('#btnLast1').on('click', function() {
	var num=screenNum1.innerHTML;
	var num2=screenNum2.innerHTML;
	if(screenNum2.innerHTML.includes("×")){
		screenNum1.innerHTML=Math.pow(parseFloat(num2),parseFloat(num))
		screenNum2.innerHTML="";
		screenOper.innerHTML="";
		}
})




	//if(screenNum1.innerHTML[0]="0" && screenNum1.innerHTML!=screenNum1.innerHTML.isInteger())