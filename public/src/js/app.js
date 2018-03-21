var defereedPrompt;
if (!window.Promise) {//check if browser support promises
  window.Promise = Promise; //activate the promise polyfill in promise.js
}

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(function () {
      //console.log('service worker is registered');
    }).catch(function (err) {
      console.log(err);
    });
}

window.addEventListener('beforeinstallprompt' , function (event) {
  //console.log('Before install event');
  event.preventDefault();
  defereedPrompt = event;
  return false;
});
/***********************XmlHttpRequest*********************/
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://httpbin.org/ip');//open connection
// xhr.responseType = 'json';
// xhr.onload = function () {//when response loaded excute fun
//   console.log("Data", xhr.response); //log response
// };
// xhr.onerror = function () {//if promise return an error it will be catched
//   console.log('Error');
// };
//
// xhr.send(); // send get request
/**********************************************************/
//get data from web
fetch('https://httpbin.org/ip')
  .then(function (response) {
    console.log(response);
    return response.json(); //turn body to json
  }).then(function (data) {
    console.log(data);
  }).catch(function (err) {
    console.log(err);
  });

  //post data to web
  fetch('https://httpbin.org/post', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    mode: 'cors' , //Cross-Origin Resource Sharing (CORS)
    body: JSON.stringify({message: 'Does this work ?'})
  })
    .then(function (response) {
      console.log(response);
      return response.json(); //turn body to json
    }).then(function (data) {
      console.log(data);
    }).catch(function (err) {
      console.log(err);
    });

/****************************Test Promises and asynch code**********************************/
/*
  // setTimeout(function () {
  //   console.log("Inside setTimeout");
  // }, 3000);
  // console.log("Outside setTimeout");

//to avoid callback hell bcs of using alot of them in our code, we use promise
var promise = new Promise(function(resolve, reject) {
  setTimeout(function () {
    //resolve("inside resolve: excution is done");
    reject({code: 500, message: "An Error occured"})
  }, 3000);
});

// promise.then(function (text) {
//   console.log(text);
// }, function (err) {
//   console.log(err.code , err.message);
// }).then(function (nextVal) {
//   //console.log(nextVal);//undefined
// });//u can chain more promises
//   console.log("Outside the promise");
*/
/***********************Other way to catch errors********************/
/*
promise.then(function (text) {
  console.log(text);
}).then(function (nextVal) {
  console.log(nextVal);//undefined here will not show beacuse it was catched
}).catch(function (err) {//catch will react to errors in any level above of promise
  console.log(err.code , err.message);
});
  console.log("Outside the promise");
*/
