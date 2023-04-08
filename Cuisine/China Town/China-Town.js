var next_back = document.querySelector("img");
var images = ["China Town Images/1.jpg", "China Town Images/2.jpg", "China Town Images/3.jpg", "China Town Images/4.jpg", "China Town Images/5.jpg", "China Town Images/6.jpg"];

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

