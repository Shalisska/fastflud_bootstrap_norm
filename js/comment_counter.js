//рейтинг коммента
(function (document) {
   
var counters = document.querySelectorAll('.comments-item__counter-l');

for (var i = 0; i < counters.length; i++) {
	var count = function (j) {
		var counter = counters[j];
		
		var plus = counter.querySelector('.comments-item__counter--plus');
		var minus = counter.querySelector('.comments-item__counter--minus');
		
		plus.addEventListener('click', function (event) {
			event.preventDefault ();
			
			var val = parseInt(plus.innerHTML, 10);
			
			if (val >= 0) {
				val = ++val;				
				plus.innerHTML = '+' + val;
			}
		});
		
		minus.addEventListener('click', function (event) {
			event.preventDefault ();
			
			var val = parseInt(minus.innerHTML, 10);
			
			if (val <= 0) {
				val = --val;				
				minus.innerHTML = val;
			}
		});
	} (i);
};
})(document);


