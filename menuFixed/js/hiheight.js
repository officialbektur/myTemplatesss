/* ====================  hi ImgBg  --Start--  ==================== */
let hiImgBg = document.querySelector(".hi");
let fullWindowInner = document.body.clientHeight || document.documentElement.clientHeight;
let bgiMinusElementHeight = document.querySelector(".bgi-minus-height").offsetHeight;
let windowInner = fullWindowInner - bgiMinusElementHeight;
if (windowInner >= 1300) {
	hiImgBg.style.height = 900 + "px";
} else if(windowInner >= 500) {
	hiImgBg.style.height = windowInner + "px";
} else {
	hiImgBg.style.height = 500 + "px";
}
/* ====================  hi ImgBg  --End--  ==================== */