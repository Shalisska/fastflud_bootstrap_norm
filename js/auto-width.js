function setEqualWidth(rows) {
//    var widtherrow = 0;
    rows.each(function () {
        var text = $(this).
        
        
        currentWidth = $(this).width();
        if (currentWidth > widtherrow) {
            widtherrow  = currentWidth;
        }
    });
        
    rows.height(widtherrow);
}

$(document).ready(function () {
    setEqualWidth($('.info__item > input').not($('input[type="radio"]')));
});