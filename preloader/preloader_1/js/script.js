// Прелоадер
document.body.onload = function () {
	setTimeout(function () {
		var preloader = document.querySelector(".preloader");
		var preloaderDownloadsIcon = document.querySelector(".preloader__downloads_icon");

		if (!preloader.classList.contains("_show")) {
			document.body.classList.remove("_lock");
			preloader.classList.add("_show");
			preloaderDownloadsIcon.classList.add("_show");
		}
	}, 1000);
}