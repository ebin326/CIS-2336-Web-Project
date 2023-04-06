var mainimg = document.querySelector("img");
var images = ["https://imgur.com/RjRTPMD.jpg","https://imgur.com/fHGKDhH.jpg","https://imgur.com/5PYvJkU.jpg","https://imgur.com/S3lQV8T.jpg","https://imgur.com/rlpxiar.jpg"]
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
