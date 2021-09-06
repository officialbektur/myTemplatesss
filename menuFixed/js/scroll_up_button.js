/* ====================  Scroll Up Button + Smooth Scroll Up  --Start--  ==================== */
document.addEventListener('DOMContentLoaded', () => {
	let toTopBtn = document.querySelector('.up__button');

	window.onscroll = function () {
		if (window.pageYOffset > 50) {
			toTopBtn.classList.add("_active");
		} else {
			toTopBtn.classList.remove("_active");
		}
	}
	/* ====================  Smooth Scroll Up  ==================== */ 
	toTopBtn.addEventListener('click', function () {
		window.scrollBy({
			top: -document.documentElement.scrollHeight,
			behavior: 'smooth'
		});
	});
});
/* ====================  Scroll Up Button + Smooth Scroll Up  --End--  ==================== */