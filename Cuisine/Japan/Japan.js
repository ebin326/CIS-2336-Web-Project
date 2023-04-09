var next_back = document.querySelector("img");
var images = ["Japan images/1.jpg", "Japan images/2.jpg", "Japan images/3.jpg", "Japan images/4.jpg", "Japan images/5.jpg", "Japan images/6.jpg"];

var num=0;

function next(){
	num++;
	if (num>=images.length){
		num=0;
		next_back.src=images[num]

	}else{
		next_back.src=images[num]
	}
};

function back(){
	num--;
	if (num<0){
		num=images.length-1;
		next_back.src=images[num]
	}else{
		next_back.src=images[num]
	}
};

function redirect() {
    var selectedOption = document.getElementById("contid").value;
    if (selectedOption === "au") {
        window.location.href = "https://uchi.uchirestaurants.com/location/austin/menu/";
    } else if (selectedOption === "da") {
        window.location.href = "https://uchi.uchirestaurants.com/location/dallas/menu/";
    } else if (selectedOption === "de") {
        window.location.href = "https://uchi.uchirestaurants.com/location/denver/menu/";
    } else if (selectedOption === "ho") {
        window.location.href = "https://uchi.uchirestaurants.com/location/houston/menu/";
    } else if (selectedOption === "mi") {
        window.location.href = "https://uchi.uchirestaurants.com/location/miami/menu/";      
    } else {
        alert("Please select an option from the dropdown menu.");
    }
}
