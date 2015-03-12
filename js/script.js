//дата в верхнем меню - Новенькое
(function (document) {
function clock() {
    var d = new Date();
    var month_num = d.getMonth()
    var day = d.getDate();
    var month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
"июля", "августа", "сентября", "октября", "ноября", "декабря");
    if (day <= 9) day = "0" + day;
    
    var date = document.querySelector('.top-menu .date');
    
    var date_day = date.querySelector('.date__day');
    var date_month = date.querySelector('.date__month');
    
    date_day.innerHTML = day;
    date_month.innerHTML = month[month_num];
}
clock();
})(document);











//(function (document) {
//    
//})(document);