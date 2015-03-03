var timeReload = 0.2;//время в минутах
timeReload = timeReload*60;
var timenow=0;

function isReload()
    {
    timenow = timenow + 0.2;
    if (timenow>=timeReload) {
    timenow=0;

    document.location.reload();
    }
    }

//    var t=setInterval("isReload()",1000);