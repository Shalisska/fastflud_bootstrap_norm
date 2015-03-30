//дата в верхнем меню - Новенькое
//(function (document) {
//function clock() {
//    var d = new Date();
//    var month_num = d.getMonth()
//    var day = d.getDate();
//    var month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
//"июля", "августа", "сентября", "октября", "ноября", "декабря");
//    if (day <= 9) day = "0" + day;
//    
//    var date = document.querySelector('.top-menu .date');
//    
//    var date_day = date.querySelector('.date__day');
//    var date_month = date.querySelector('.date__month');
//    
//    date_day.innerHTML = day;
//    date_month.innerHTML = month[month_num];
//}
//clock();
//})(document);


//загрузка файлов - http://habrahabr.ru/post/189570/
(function (document) {
    var wrapper = $( ".file_upload" ),
        inp = wrapper.find( ".file_upload__input" ),
        btn = wrapper.find( ".file_upload__btn" ),
        lbl = wrapper.find( ".file_upload__field" );
    
    //отключение действие по умолчанию для ссылки
    btn.click(function(event) {
        event.preventDefault();
    });
    
    //имитация клика по кнопке
    btn.add( lbl ).click(function(){
        inp.click();
    });
    
    //если браузер поддерживает File API, то имя файла определяется с помощью него, в противном случае оно вырезается из значения скрытого input[type=file]. Для мобильных устройств, когда элемент представляет из себя одну кнопку, имя выбранного файла выводится на ней же
    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
        }else
            btn.text( file_name );
    }).change();
    
    //Если выбрать файл, используя «мобильное» поле, а затем увеличить размер окна и перевести элемент в «десктопный», то в текстовом поле так и останется «Файл не выбран» — нужно каждый раз обновлять элемент при изменении размеров окна
    $( window ).resize(function(){
        $( ".file_upload input" ).triggerHandler( "change" );
    });
    
})(document);

//модальные окна
(function(document) {
	//ищем кнопки
    var regs = document.querySelectorAll('.registration');
    var adds = document.querySelectorAll('.add-form');
	//ищем формы
	var reg__form = document.querySelector('.form--reg').parentNode;
    var add__form = document.querySelector('.form--add').parentNode.parentNode;
	
	//открытие формы
	for (var i = 0; i < regs.length; i++) {
		var reg = regs[i];
        
		reg.addEventListener('click', function(event) {
			event.preventDefault();
			if (reg__form.classList.contains('popup-show') != true) {
				reg__form.classList.add('popup-show');
			}
		})
	}
    
	for (var i = 0; i < adds.length; i++) {
	var add = adds[i];

	add.addEventListener('click', function(event) {
		event.preventDefault();
		if (add__form.classList.contains('popup-show') != true) {
            add__form.classList.add('popup-show');
            }
        })
    }
	
	//закрытие окон
	var esc = document.querySelectorAll('.form__esc');
	
	for (var i = 0; i < esc.length; i++) {
		esc[i].addEventListener('click', function(event) {
			event.preventDefault();
			
			var close = this.parentNode.parentNode;
			close.classList.remove('popup-show');
		});
	}
    
   var shims = document.querySelectorAll('.shim');
    
    for(i = 0; i < shims.length; i++) {
        var closing = function(j) {
        var shim = shims[j];
            
            //закрытие по клику вне формы
            shim.addEventListener('click', function(event) {
                var a = event.target;
                if(a == shim) {
                    shim.classList.remove('popup-show');
                }
            });
            
            //закрытие по Esc
            window.addEventListener('keydown', function(event) {
                if (event.keyCode==27
                   &&shim.classList.contains('popup-show')){
                   shim.classList.remove('popup-show');
                }
            });
        } (i)
    }
    
    
})(document);






//(function (document) {
//    
//})(document);