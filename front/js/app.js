var App = function() {
//Generate Uid
//source: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
var guid = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};



//cookies
var verifyCookies = function(){
  if(!Cookies.get('name')){
    Cookies.set('name',guid());
    console.log('nao ha cookies');
  }
  else{
    console.log(Cookies.get('name'));
  }
};



var sendCookies = function(address){
  var person = { log:{
                  cookie: Cookies.get('name'),
                  page: address
                  }
                };
  $.ajax({
        url: 'http://127.0.0.1:3000/logs.json',
        type: 'POST',
        dataType: 'json',
        success: function (data) {
              console.log(data);
        },
        data: person
  });
}

var sendEmail = function(){
  if($('#email').val()!=""){
    console.log("xyz");
    person = {
      contact: {
        cookie: Cookies.get('name'),
        email: $("#email").val()
      }
    };
    $.ajax({
          url: 'http://127.0.0.1:3000/contacts.json',
          type: 'POST',
          dataType: 'json',
          success: function () {
                window.location.href = "obrigado.html";
          },
          data: person
    });

  }

}


return {
  init: function(address){
    verifyCookies();
    sendCookies(address);
    $("#enviar").click(function(){
      sendEmail();
    });
  }

}

}();
