//чат ответы
(function (document) {
    
    var answer_btn = $('.comments-item__answer');
//    console.log(answer_btn);

    answer_btn.click(function(event) {
        event.preventDefault();

    
        var template = $('#answer_field').html();
//        console.log(template);
        var user = $('.head__registration--known .user').html();
//        console.log(user);

        var html = Mustache.render(template, {
            name:user
        });
//        console.log(html);
        var div = document.createElement('div')
        var area = $(this).closest('.comments-item--answer');
        console.log(area);

        div.classList.add('row');
        div.innerHTML = html;
        area.append(div);
        console.log(div);
        
    });
})(document);