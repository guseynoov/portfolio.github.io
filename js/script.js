
let btnText = document.getElementById("btn-text")

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {

	// change the theme of the website

	let theme = document.getElementById("theme");



	if (theme.getAttribute("href") == "light-mode.css") {
		theme.href = "dark-mode.css"
		btnText.innerHTML = "Light-Mode"

	}
	else {
		theme.href = "light-mode.css"
		btnText.innerHTML = "Dark-Mode"
	}



})











//themeChalenge.onclick = function () {
//	let theme = document.getElementById("theme");


	//if(themeChalenge.getAttribute("src")=="img/white-btn.png"){
	//	themeChalenge.src = "img/black-btn"
		//}
	//else{
	//	themeChalenge.src = "img/black-btn"
	//}

//	if (theme.getAttribute("href") == "light-mode.css") {
//		theme.href = "dark-mode.css"
//		btnText.innerHTML = "Light-Mode"

//	}
//	else {
//		theme.href = "light-mode.css"
//		btnText.innerHTML = "Dark-Mode"
//	}



//}
