var mainimg = document.querySelector("img");
var images = ["https://imgur.com/OpGjvVL.jpg","https://imgur.com/cuddW4k.jpg","https://imgur.com/R1plJM1.jpg","https://imgur.com/Ijji9aM.jpg","https://imgur.com/oBiiJRT.jpg"]
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
