
//Generate Uid
//source: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}



//cookies
function verifyCookies(){
  if(!Cookies.get('name')){
    Cookies.set('name',guid());
    console.log('nao ha cookies');
  }
  else{
    console.log(Cookies.get('name'));
  }
}

function sendCookies(page){
  console.log('page: '+page+'. cookie: '+Cookies.get('name')+'.')
}

function sendEmail(){
  console.log(document.getElementById('email').value);
  console.log('a')
}
