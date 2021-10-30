/* ===================================  Preloader  --Start--  =================================== */
document.body.classList.add("_lock")
document.body.onload = function () {
	var preloader = document.querySelector(".preloader");
	if (preloader) {
		setTimeout(function () {
			if (!preloader.classList.contains("_show")) {
				document.body.classList.remove("_lock");
				preloader.classList.add("_show");
				animElement();
			}
		}, 3000);
	}
}
/* ===================================  Preloader  --End--  =================================== */