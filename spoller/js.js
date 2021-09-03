documentElement;
clientWidth;
innerHeight;
Math.max();
scrollWidth;
offsetWidth;
window.pageXOffset
window.pageYOffset
// Скролит 50px
function setScrollBy() {
    window.scrollBy(0, 50);
    const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}

// Скролит от 0 до 50
function setScrollTo() {
    window.scrollTo(0, 50);
    const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}
function setScrollToOptions() {
    window.scrollTo({
        top: 500,
        left: 0,
        // smooth, instant,
        // либо auto; по умолчанию auto
        behavior: "smooth"
    })
}


// Поумолчанию top = true, при изменение в folse то оно прокрутиться до конца а при умолчанию до верха
function setScrollIntoView(top) {
    const lessonSelected = document.querySelector("section");
    // lessonSelected.scrollIntoView(top); // По умолчанию
    lessonSelected.scrollIntoView({
        // start , center , end или nearest . По умолчанию "center"
        block: "center",
        // start , center , end или nearest . По умолчанию "nearest"
        inline: "nearest",
        // auto или smooth . По умолчанию "auto"
        behavior: "smooth"
    }); 
}
offsetParent
offsetLeft
body.scrollTop = 120;

// Для полуение кордината элемента 
element.getBoundingClientRect();
console.log(element);

// узнает что расположен по кардинату 100px сверху и 100 с низу от экрана
elementFromPoint(100,100)
Math.floor(5.77)
Math.ceil(5.77)
Math.round(5.77)
let f = 5.007.Number.EPSILION
Math.round(f * 10) / 10;
isNaN
parseFloat
parseFloat
FORIN ДЛЯ ОБЬЕКТОВ



FOROF TEXT ВЫВОДИМ 

toLowerCase
toUpperCase

indexOf("od") ишет текст значение если есть этот текст то будет 1 а если не найдет то -1 
includes("ss") ишет текст значение если есть этот текст то будет True 

startWith("dsds") ишет текст с ночала строки
endsWith("ds") ишет текст с конца строки
slice(1,2) ишет текст 


elem.find(function (item) {
    return item.age === 18;
});      ишет у массива внутри обьекта у типа age со значением =18 и если есть выводит весь обект
elem.findIndex(function (item) {
    return item.age === 18;
}); ишет у массива внутри обьекта у типа age со значением =18  и выводит какой обект в нумере
elem.filter(function (item) {
    return item.age >= 18;
});ишет у массива внутри обьекта у типа age со значением =18 и выводит все обекты 
sort сортирует 
function compareNumeric(a , b) {
    console.log(a);
    // if (a > b) {return 1; }
    // if (a == 0) {return 0; }
    // if (a < b) {return -1; }
    return a - b сортирует правильно так как сорт сортирует 1,22,8 так 1,22,8 а не так 1,8,22
}
split(",") переобразовывает строку  в массив 
join(",") переобразовывает  массив  в строку




setAttribute("id" , "dad") добавляет атрибут id и его значение dad
removeAttribute("id") удаляет атрибут id
getAttribute("id") получает значени атребута 
hasAttribute("id") есть ли такой атрибут id если есть вернет true

elem.dataset.myatrrebute  позволяет менять и получить значение дата атрибута
