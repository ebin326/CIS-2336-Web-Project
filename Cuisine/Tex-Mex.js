var next_back = document.querySelector("img");
var images = ["Tex-Mex Images/1.jpg","Tex-Mex Images/2.jpg","Tex-Mex Images/3.jpg","Tex-Mex Images/4.jpg","Tex-Mex Images/5.jpg"];

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