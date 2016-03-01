var myImage = document.querySelector('img');
var myHeader = document.querySelector('h1');


myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	
	if(mySrc === 'images/VBkHBsyhu1c.jpg'){
		myImage.setAttribute('src', 'images/_f77FShQHlo.jpg');
		myHeader.textContent = 'Cloven';
	}
	else {
		myImage.setAttribute('src', 'images/VBkHBsyhu1c.jpg');
		myHeader.textContent = 'Dive';
	}
}