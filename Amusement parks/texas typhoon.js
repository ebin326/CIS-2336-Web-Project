var mainimg = document.querySelector("img");
var images = ["https://imgur.com/NO5kZuz.jpg","https://imgur.com/1pXJVDR.jpg","https://imgur.com/2ynF8Ib.jpg","https://imgur.com/IRwz1bl.jpg","https://imgur.com/1jAT1GW.jpg"]
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
