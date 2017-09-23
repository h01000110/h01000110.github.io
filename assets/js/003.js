// By: h01000110 (hi)
// github.com/h01000110
// Simple Analytics in Python

var dado = {};
var temp;
var view;
var local = document.getElementsByClassName("counter")[0];
var http = new XMLHttpRequest();
http.open('GET', '//jsonip.com/?callback=?', true);
http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE) {
        if (http.readyState == 4) {
            temp = http.responseText;
            temp = temp.substr(2);
            temp = temp.slice(0, -2);
            temp = JSON.parse(temp);
            var date = new Date();
            var page = document.location.pathname;
            dado["ip"] = temp.ip;
            dado["data"] = date.getTime();
            dado["pagina"] = page;

            var httpp = new XMLHttpRequest();
            httpp.open('POST', '//h01000110.pythonanywhere.com/post', true);
            httpp.setRequestHeader('Content-type', 'application/json');
            httpp.onreadystatechange = function() {
                if (httpp.readyState == XMLHttpRequest.DONE) {
                    if (httpp.readyState == 4) {
                        view = JSON.parse(httpp.responseText);
                        local.innerText = view["view"];
                    }
                }
            }
            httpp.send(JSON.stringify(dado));
        }
    }
}
http.send();