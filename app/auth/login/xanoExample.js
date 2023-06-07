var login_path = 'Webflow path to log in';
var redirect_uri =
  'Where your Webflow users are re-directed after OAuth log in';
var xano_oauth_init_url = 'OAuth Init URL';
var xano_oauth_continue_url = 'Continue URL';
var formHeaders = [];
var formResponse = [];

var authState = false;

//initialize the authentication API

function initOauth() {
  var fetchURL = new URL(xano_oauth_init_url);
  fetchURL.searchParams.set('redirect_uri', redirect_uri);
  fetchURL = fetchURL.toString();

  fetch(fetchURL, {
    headers: formHeaders,
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => (formResponse = data))
    .then(() => loginResponse(formResponse))

    .catch((error) => {
      console.error('Error:', error);
      //responsePanel('error')
    });
}

//after initialization, go to the retrieved url

function loginResponse(res) {
  window.location.href = res.authUrl;
}

//button for intializing the authentication api
var authButton = document.querySelector('#authButton');
if (authButton) {
  authButton.addEventListener('click', (event) => {
    initOauth();
  });
}

var logoutButton = document.querySelector('#logout');
if (logoutButton) {
  logoutButton.addEventListener('click', (event) => {
    logout();
  });
}

//on page load, parse the code variable to be able to login/signup

window.onload = function () {
  var curUrl = new URL(document.location.href);
  var code = curUrl.searchParams.get('code');
  if (code) {
    continueOauth(code);
  } else {
    var token = window.localStorage.getItem('auth');
    if (token) {
      token = JSON.parse(token);
      if (token) {
        updateAuthState(token);
      }
    }

    if (!token && curUrl.pathname.indexOf('myaccount') !== -1) {
      document.location.href = login_path;
    }
  }
};

//when code is available attempt to login/signup. make sure to include

function continueOauth(code) {
  var fetchURL = new URL(xano_oauth_continue_url);
  fetchURL.searchParams.set('redirect_uri', redirect_uri);
  fetchURL.searchParams.set('code', code);
  fetchURL = fetchURL.toString();
  var newUrl = new URL(document.location.href);
  newUrl.searchParams.delete('code');
  newUrl.searchParams.delete('scope');
  newUrl.searchParams.delete('authuser');
  newUrl.searchParams.delete('hd');
  newUrl.searchParams.delete('prompt');
  history.replaceState(null, '', newUrl.toString());

  fetch(fetchURL, {
    headers: formHeaders,
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => (formResponse = data))
    .then(() => saveToken(formResponse))
    .catch((error) => {
      console.error('Error:', error);
    });
}

//save the generated token in the local storage as a cookie
function saveToken(res) {
  window.localStorage.setItem('auth', JSON.stringify(res));
  updateAuthState(res);
}

function updateAuthState(res) {
  alert('hi ' + res.name);
  authState = res;

  updateElement('#name', res.name);
  updateElement('#email', res.email);
}

function updateElement(id, value) {
  var el = document.querySelector(id);
  if (el) {
    el.innerHTML = value;
  }
}

function logout() {
  window.localStorage.removeItem('auth');
  window.location.reload();
}
