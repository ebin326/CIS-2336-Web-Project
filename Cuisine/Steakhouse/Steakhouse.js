var next_back = document.querySelector("img");
var images = ["Steak images/1.jpg", "Steak images/2.jpg", "Steak images/3.jpg", "Steak images/4.jpg", "Steak images/5.jpg"];

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

