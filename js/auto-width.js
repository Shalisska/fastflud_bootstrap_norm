$(document).ready(function () {
	var rows = $('.info__item').not($('fieldset')).not($('.info__item--pass'));
	
	rows.each(function () {
		var rowsWidth = $(this).width() - 7;
		var textWidth = $(this).children('span').width();
		var currentWidth = rowsWidth - textWidth;
		var inputWidth = $(this).children('input').width(currentWidth);
	});
});