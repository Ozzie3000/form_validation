$(document).ready(function(){
//UI calendar
	$(function(){
    $("#datepicker").datepicker();
  });



}); //end doc ready

function validateField1(){
	var fn =document.getElementById("fname").value;
	if((fn != "") && (fn.search(/\d/) == -1)){
		//alert('fname passes');
		console.log("first name: " + fname.value)
		document.getElementById("error1").value = "";
	}else{
		document.getElementById("error1").value = "use only letters and don't leave it empty";
	}
}
function validateField2(){
	var ln =document.getElementById("lname").value;
	if((ln != "") && (ln.search(/\d/) == -1)){
		//alert('lname passes');
		console.log("last name: " + lname.value)
		document.getElementById("error2").value = "";
	}else{
		document.getElementById("error2").value = "use only letters and don't leave it empty";
	}
}

function validateField3(){
	var comp =document.getElementById("company").value;
	if((comp != "") && (comp.length > 1)){
		document.getElementById("error3").value = "";
	}else{
		document.getElementById("error3").value = "must be at least 2 characters long";
	}
}

function validateField4(x, y){
	var phone = document.getElementById(x).value;
	var phoneNum = parseInt(phone);
	if(isNaN(phone) == true){
		alert("Only numbers please");
		//document.getElementById("error4").value = "use only numbers";
	}
	if((phoneNum != "") && (phone.length == y)){
		document.getElementById("error4").value = "";
	}else{
		document.getElementById("error4").value = "must be at least " + y + " numbers long";
	}
}

function validateForm(){
	var fn =document.getElementById("fname").value;
	if((fn != "") && (fn.search(/\d/) == -1)){
		//alert('fname passes');
		console.log("first name: " + fname.value)
	}else{
		alert("In 'First Name': use only letters and don't leave it empty");
	}

	var ln =document.getElementById("lname").value;
	if((ln != "") && (ln.search(/\d/) == -1)){
		//alert('lname passes');
		console.log("last name: " + lname.value);
	}else{
		alert("In 'Last Name': use only letters and don't leave it empty");
	}

	var company =document.getElementById("company").value;
	if(company != ""){
		//alert('company passes');
		console.log("company name: " + company)
	}else{
		alert("In 'Company Name': don't leave it empty");
	}

	var phone1 = document.getElementById("phone1").value;
	var phone2 = document.getElementById("phone2").value;
	var phone3 = document.getElementById("phone3").value;
	var phone = phone1+phone2+ phone3;
	var phoneNum = parseInt(phone);
	if(phoneNum == NaN){
		//alert("Only numbers please");
	}
	if((phoneNum != "") && (phone.length == 10)){
		//alert('phone passes');
		console.log("phone number: " + phone)
	}else{
		alert("In 'phone number': use only numbers, 10 digits, must not be empty");
	}

	var datepicker =document.getElementById("datepicker").value;
	if(datepicker != ""){
		//alert('datepicker passes');
		console.log("Date: " + datepicker)
	}else{
		alert("In 'datepicker Name': don't leave it empty");
	}

	/*   console values 
	console.log("first name: " + fname.value);
	console.log("last name: " + lname.value);
	console.log("company name: " + company.value);
	console.log("phone number: " + phone.value);
	console.log("Date: " + datepicker.value);
	for some fields fieldName.Value in console.log returns undefined so .value not necessary
	*/
}



function vf(){
	var x = document.forms["form1"]["fname"].value;
  if(x == ""){
    alert("Name must be filled out");
    return false;
  }
}