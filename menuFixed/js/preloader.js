/* ===================================  Preloader  --Start--  =================================== */
document.body.onload = function () {
	document.body.classList.add("_lock")
	setTimeout(function () {
		var preloader = document.querySelector(".preloader");
		if (!preloader.classList.contains("_show")) {
			document.body.classList.remove("_lock");
			preloader.classList.add("_show");
		}
	}, 1000);
} 
/* ===================================  Preloader  --End--  =================================== */