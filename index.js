
//данные для тестирования метода авторизации
var formData = 'login=grnpw&password=6vsw12rs';

// метод авторизации
function auth(userData) {

// отправка учетных данных на сервер
  function sendReq (data, callback) {
    var request = new XMLHttpRequest();
    request.open('POST', 'https://cdbits.net/api/auth/login/');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

// проверка наличия токена в localstorage
    if (localStorage.getItem('access_token')) {
      data = 'access_token=' + localStorage.getItem('access_token');
    }
// при отсутствии токена посылаем учетные данные    
    request.send(data);
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
// в случае успешного ответа сервера вызываем Callback
        callback(request.responseText);    
      }
    };
  }
  // обработка ответа сервера 
  function callbackReq(arg) {
  // формируем из ответа сервера объект
    var answer = JSON.parse(arg);
    console.log(answer);
    // записываем токен в localstorage
    localStorage.setItem("access_token", answer.token);
  }
  sendReq(userData, callbackReq);
}

//------------------------------------
//данные для тестирования метода получения профиля
var dataSend = 'profile_uid=13957';
//метод получение профиля
function getProfile (uid) {
// обработка ответа сервера 
  function callbackReq(arg) {
    var answer = JSON.parse(arg);
    console.log(answer);
  }
  // отправка UID на сервер
  function sendRequestProfile(uid, callback) {
    var request = new XMLHttpRequest();
    request.open('POST', 'https://cdbits.net/api/profile/get_profile/', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(uid);

    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
        // в случае успешного ответа сервера вызываем Callback
          callback(request.responseText);    
        }
      };
  }
  
  sendRequestProfile(uid, callbackReq);
}

//------------------------------------
//данные для тестирования метода получения новостей
var dataSend = 'access_token=83491c1b7bd66cb607df811392990b0ae0843a7a';
//метод получения новостей
function getNewsList (token) {
// обработка ответа сервера 
  function callbackReq(arg) {
    var answer = JSON.parse(arg);
    console.log(answer);
  }
  // отправка токена на сервер
  function sendRequestNews(token, callback) {
    var request = new XMLHttpRequest();
    request.open('POST', 'https://cdbits.net/api/news/get_list/', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(token);

    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
          // в случае успешного ответа сервера вызываем Callback
          callback(request.responseText);    
        }
      };
  }
  
  sendRequestNews(token, callbackReq);
}

