var next_back = document.querySelector("img");
var images = ["Korea images/1.jpg", "Korea images/2.jpg", "Korea images/3.jpg", "Korea images/4.jpg", "Korea images/5.jpg"];

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

