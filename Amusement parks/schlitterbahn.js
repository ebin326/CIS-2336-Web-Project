var mainimg = document.querySelector("img");
var images = ["https://imgur.com/znKeCtK.jpg","https://imgur.com/Wh5uuY0.jpg","https://imgur.com/m9OVAKi.jpg","https://imgur.com/DWyDpGN.jpg","https://imgur.com/0RJfvfi.jpg"];

var num=0;

function next(){
	num++;
	if (num>=images.length){
		num=0;
		mainimg.src=images[num]

	}else{
		mainimg.src=images[num]
	}
};

function back(){
	num--;
	if (num<0){
		num=images.length-1;
		mainimg.src=images[num]
	}else{
		mainimg.src=images[num]
	}
};

